import React, { createContext, useContext, useState } from 'react';

const ConsoleContext = createContext();

export const useConsole = () => useContext(ConsoleContext);

export const ConsoleProvider = ({ children }) => {
    const [logs, setLogs] = useState([]);
    const addLog = (message) => {
        setLogs((prevLogs) => [...prevLogs, message]);
    };
    const clearLogs = () => setLogs([]);

    return (
        <ConsoleContext.Provider value={{ logs, addLog, clearLogs }}>
            {children}
        </ConsoleContext.Provider>
    );
};