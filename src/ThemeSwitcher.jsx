import React from 'react';
import { useSettings } from './ContextProviders/SettingsContext';

const ThemeSwitcher = () => {
    const { isUsingLightTheme, toggleTheme } = useSettings();

    return (
        <button onClick={toggleTheme}>
            Switch to {isUsingLightTheme ? 'Dark' : 'Light'} Theme
        </button>
    );
};

export default ThemeSwitcher;