import React, { useState, useRef, useEffect } from 'react';
import { useConsole } from './ConsoleContext';

import './Console.css';

function Console() {
    const { logs, addLog, clearLogs } = useConsole();
    const [input, setInput] = useState('');
    const outputRef = useRef(null);

    const handleInput = () => {
        if (input === "clear") {
            clearLogs();
        } else {
            addLog(input);
        }

        setInput('');
    };

    const checkForEnterKey = (e) => {
        if (e.key === 'Enter') handleInput();
    };

    useEffect(() => {
        let isMounted = true;
        let timer = setTimeout(() => {
            if (isMounted) {
                addLog("print(\"Hello, World!\") // Click 'Run' to execute Swift code.");
            }
        }, 5000); // Add a log after 5 seconds for demonstration

        return () => {
            clearTimeout(timer);
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        // Scroll to the bottom of the output on log change
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="console">
            <div className="output" ref={outputRef}>
                {logs.map((log, index) => <p key={index + log}>{index + ' ' + log}</p>)}
                <p></p>
            </div>
            <div className="input">
                <p>$</p>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={checkForEnterKey}
                />
            </div>
        </div>
    );
}

export default Console;