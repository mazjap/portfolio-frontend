import React, { useState, useRef, useEffect } from 'react';
import ConsoleButton from './ConsoleButton';
import { useConsole } from './ConsoleContext';
import usePosition from './Hooks/usePosition';
import { formatCommands, logPrefixForLevel } from './consoleUtils';

import './Console.css';

const helpMessage = 'Usage:\n' + formatCommands([
    { command: 'clear', description: 'Remove all console output to start fresh' },
    { command: 'help', description: 'Display a list of commands and how they are used' }
]);

function Console() {
    const { logs, addLog, clearLogs, isOutputHidden, toggleOutputHidden, isShowingOptions, toggleOptionsPopover, setConsoleSize } = useConsole();
    const outputRef = useRef(null);
    const floatingRef = useRef(null);
    const consoleRef = useRef(null);
    const popoverRef = useRef(null);

    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('');
    const [isExecutableSelected, setExecutableSelected] = useState(true);
    const [floatingSize, setFloatingSize] = useState({ width: 0, height: 0 });

    const [optionsButtonPosition, optionsButtonRef] = usePosition();

    const handleInput = () => {
        if (input === 'clear') {
            clearLogs();
        } else {
            addLog(input, 3);
        }

        switch (input) {
            case 'help':
                addLog(helpMessage);
                break;
            default:
                break;
        }

        setInput('');
    };

    const checkForEnterKey = (e) => {
        if (e.key === 'Enter') handleInput();
    };

    useEffect(() => { // Scroll to the bottom of the output on change of logs
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [logs]);

    useEffect(() => { // Log welcome message if no other logs exist
        let isMounted = true;
        let timer = setTimeout(() => {
            if (isMounted && logs.length === 0) addLog('Welcome to my portfolio. Type "help" to get started');
        }, 1000);

        return () => {
            clearTimeout(timer);
            isMounted = false;
        };
    }, []); // No dependencies because this useEffect should only ever run once

    useEffect(() => { // Calculate size of .console and .floating when .console's direct children are mutated
        const targetNode = consoleRef.current;
        if (!targetNode) return;

        const sizeOf = node => { return { width: node.offsetWidth, height: node.offsetHeight }}

        // Set size on initial load
        setConsoleSize(sizeOf(targetNode));
        if (floatingRef.current) setFloatingSize(sizeOf(floatingRef.current));

        const config = {
            childList: true, // Watch for direct child node additions/removals
            subtree: false, // Do not watch for changes in descendants
        };
        
        const callback = (mutationsList) => {
            for (let mutation of mutationsList) {
                if (mutation.type !== 'childList') continue;

                let wasOutputMutated = false;
                const mutatedNodes = [...mutation.addedNodes, ...mutation.removedNodes]
                for (let node of mutatedNodes) {
                    if (node.nodeType !== 1 || !node.classList.contains('output')) return;

                    wasOutputMutated = true;
                    break;
                }

                if (!wasOutputMutated) continue;
                const consoleNode = consoleRef.current;
                if (!consoleNode) continue;

                setConsoleSize({ width: consoleNode.offsetWidth, height: consoleNode.offsetHeight });
                if (floatingRef.current) setFloatingSize({ width: floatingRef.current?.offsetWidth, height: floatingRef.current?.offsetHeight });
            }
        };

        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);

        return () => observer.disconnect();
    }, []); // No dependencies because this useEffect should only ever run once

    useEffect(() => { // Close popover when user clicks outside of it
        const handleClickOutside = (e) => {
            if (
                !isShowingOptions || // Ensure options aren't hidden
                (optionsButtonRef.current && optionsButtonRef.current.contains(e.target)) || // Ensure click was not on the options button
                !popoverRef.current || // Ensure popoverRef exists
                popoverRef.current.contains(e.target) // Ensure click was not within the popover
            ) return;

            toggleOptionsPopover();
        };

        document.addEventListener('mousedown', handleClickOutside);
    }, [popoverRef, toggleOptionsPopover, isShowingOptions]);

    return (
        <>
            <div className='console' id='console' style={isOutputHidden ? null : { height: '200px' }} ref={ consoleRef }>
                {!isOutputHidden && (
                    <div className='output' ref={ outputRef } style={{ paddingBottom : floatingSize.height }}>
                        { logs.filter(({ message }) => message.includes(filter)).map(({ message, level }, index) => <p className='log' key={[index + message + level].join("-")}>{ logPrefixForLevel(level) + ' ' + message }</p>) }
                    </div>
                )}
                <div className='floating' ref={ floatingRef } style={{
                    right: isOutputHidden ? '0' : '20px',
                    paddingTop: isOutputHidden ? '5px' : '0'
                }}>
                    {!isOutputHidden && (
                        <div className='input'>
                            <p>(lldb)</p>
                            <input
                                type='text'
                                value={ input }
                                onChange={ (e) => setInput(e.target.value) }
                                onKeyDown={ checkForEnterKey }
                            />
                        </div>
                    )}
                    <div className='options' id='console-options'>
                        <button className={ isExecutableSelected ? 'radio-selected' : null } onClick={() => setExecutableSelected(true) }>Executable</button>
                        <button className={ isExecutableSelected ? null : 'radio-selected' } onClick={() => setExecutableSelected(false) }>Previews</button>
                        <p>|</p>
                        <ConsoleButton svg='Options' isActive={ isShowingOptions } onClick={ toggleOptionsPopover } ref={ optionsButtonRef } />
                        <div className='spacer' />
                        <input
                            type='text'
                            value={ filter }
                            onChange={ (e) => setFilter(e.target.value) }
                            placeholder='Filter'
                        />
                        <ConsoleButton svg='Trash' isActive={ true } onClick={ clearLogs } />
                        <p>|</p>
                        <ConsoleButton svg='SidebarLeft' isActive={ false } onClick={ () => { addLog('Left sidebar clicked') }} />
                        <ConsoleButton svg='SidebarRight' isActive={ false } onClick={ () => { addLog('Right sidebar clicked') }} />
                    </div>
                </div>
            </div>
            {isShowingOptions && (
                <div className='popover' ref={ popoverRef } style={ optionsButtonPosition }>
                    <button className='popover-button' onClick={ toggleOutputHidden }>{ isOutputHidden ? 'Show Output' : 'Hide Output' }</button>
                </div>
            )}
        </>
    );
}

export default Console;