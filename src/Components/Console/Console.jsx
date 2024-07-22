import React, { useState, useRef, useEffect, useCallback } from 'react';
import Log from './Log';
import Navigation from './Navigation';
import ConsoleButton from './ConsoleButton';
import { useConsole } from '../../ContextProviders/ConsoleContext';
import { useSettings } from '../../ContextProviders/SettingsContext';
import { formatCommands } from './consoleUtils';

import './Console.css';

const helpMessage = 'Usage:\n' + formatCommands([
  { command: 'clear', description: 'Remove all console output to start fresh' },
  { command: 'help', description: 'Display a list of commands and how they are used' }
]);

function Console() {
  const { addLog, clearLogs, isShowingOptions, toggleOptionsPopover, setConsoleSize } = useConsole();
  const { isConsoleExpanded, toggleConsole } = useSettings();

  const floatingRef = useRef(null);
  const consoleRef = useRef(null);
  const popoverRef = useRef(null);
  const optionsRowRef = useRef(null);
  const optionsButtonRef = useRef(null);

  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('');
  const [isSidebarLeftOpen, setSidebarLeftOpen] = useState(true);
  const [isSidebarRightOpen, setSidebarRightOpen] = useState(true);
  const [isExecutableSelected, setExecutableSelected] = useState(true);
  const [floatingSize, setFloatingSize] = useState({ width: 0, height: 0 });
  const [optionsButtonPosition, setOptionsButtonPosition] = useState({ bottom: 0, left: 0 });

  const toggleLeftSidebar = () => {
    setSidebarLeftOpen(oldVal => !oldVal)

    if (!isSidebarRightOpen) {
      setSidebarRightOpen(oldVal => !oldVal)
    }
  }

  const toggleRightSidebar = () => {
    setSidebarRightOpen(oldVal => !oldVal)

    if (!isSidebarLeftOpen) {
      setSidebarLeftOpen(oldVal => !oldVal)
    }
  }

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

  useEffect(() => { // Calculate size of .console and .floating when .console's direct children are mutated
    const targetNode = consoleRef.current;
    if (!targetNode) return;

    const sizeOf = node => { return { width: node.offsetWidth, height: node.offsetHeight } }

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

  const calculatePosition = useCallback(() => {
    const node = optionsButtonRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    setOptionsButtonPosition({
      bottom: window.innerHeight - rect.bottom,
      left: rect.left + window.scrollX
    });
  }, []);

  useEffect(() => {
    const getCurrentPosition = () => calculatePosition(optionsButtonRef.current);
    getCurrentPosition();
    window.addEventListener('resize', getCurrentPosition);
    return () => window.removeEventListener('resize', getCurrentPosition);
  }, [calculatePosition, optionsButtonRef]);

  return (
    <>
      <div className='console' id='console' style={isConsoleExpanded ? { height: '200px' } : null} ref={consoleRef}>
        {isConsoleExpanded && (
          <div className='content-container'>
            { isSidebarLeftOpen && <Navigation /> }
            { (isSidebarLeftOpen && isSidebarRightOpen) && <div className='divider' /> }
            { isSidebarRightOpen && <Log filter={filter} floatingHeight={floatingSize.height} /> }
          </div>
        )}
        <div className='floating' ref={floatingRef} style={{
          right: isConsoleExpanded ? '20px' : '0',
          paddingTop: isConsoleExpanded ? '0' : '5px'
        }}>
          {isConsoleExpanded && (
            <div className='input' style={{ marginLeft: isSidebarLeftOpen ? 'calc(50% + 6px)' : '0', display: isSidebarRightOpen ? null : 'none' }}>
              <p>(lldb)</p>
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={checkForEnterKey}
              />
            </div>
          )}
          <div className='options' id='console-options' ref={optionsRowRef}>
            <button className={isExecutableSelected ? 'radio-selected' : null} onClick={() => setExecutableSelected(true)}>Executable</button>
            <button className={isExecutableSelected ? null : 'radio-selected'} onClick={() => setExecutableSelected(false)}>Previews</button>
            <p>|</p>
            <ConsoleButton svg='options' isActive={isShowingOptions} onClick={toggleOptionsPopover} ref={optionsButtonRef} />
            <div className='spacer' />
            <span className='copyright'>&copy; {new Date().getFullYear()} Jordan Christensen</span>
            {isConsoleExpanded && (
              <input
                type='text'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder='Filter'
              />
            )}
            {isConsoleExpanded && (
              <>
                <ConsoleButton svg='trash' isActive={true} onClick={clearLogs} />
                <p>|</p>
              </>
            )}
            <ConsoleButton svg='sidebarLeft' isActive={isSidebarLeftOpen} onClick={() => { toggleLeftSidebar(); addLog('Left sidebar toggled') }} />
            <ConsoleButton svg='sidebarRight' isActive={isSidebarRightOpen} onClick={() => { toggleRightSidebar(); addLog('Right sidebar toggled') }} />
          </div>
        </div>
      </div>
      {isShowingOptions && (
        <div className='popover' ref={popoverRef} style={optionsButtonPosition}>
          <button className='popover-button' onClick={toggleConsole}>{isConsoleExpanded ? 'Hide Output' : 'Show Output'}</button>
        </div>
      )}
    </>
  );
}

export default Console;