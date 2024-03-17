import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

const useSettings = () => useContext(SettingsContext);

const SettingsProvider = ({ children }) => {
    const [isUsingLightTheme, setIsUsingLightTheme] = useState('light');
    const [isConsoleOpen, setConsoleOpen] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const storedConsole = localStorage.getItem('isConsoleOpen');
        const storedSidebar = localStorage.getItem('isSidebarOpen');

        if (storedTheme) setIsUsingLightTheme(storedTheme);
        if (storedConsole) setConsoleOpen(storedConsole === 'true');
        if (storedSidebar) setSidebarOpen(storedSidebar === 'true');
    }, []);

    const toggleTheme = (newValue) => {
        const isLight = newValue ?? !isUsingLightTheme;

        setIsUsingLightTheme(isLight);
        localStorage.setItem(isLight);
    };

    const toggleConsole = () => {
        setConsoleOpen((prev) => {
            const newState = !prev;
            localStorage.setItem('isConsoleOpen', newState);
            return newState;
        });
    };

    const toggleSidebar = () => {
        setSidebarOpen((prev) => {
            const newState = !prev;
            localStorage.setItem('isSidebarOpen', newState);
            return newState;
        });
    };

    const value = {
        isUsingLightTheme,
        isConsoleOpen,
        isSidebarOpen,
        toggleTheme,
        toggleConsole,
        toggleSidebar,
    };

    return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export { SettingsProvider, useSettings };