import React from 'react';
import { useSettings } from './SettingsContext';

const ThemeSwitcher = () => {
    const { theme, updateTheme } = useSettings();

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        updateTheme(newTheme);
    };

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );
};

export default ThemeSwitcher;