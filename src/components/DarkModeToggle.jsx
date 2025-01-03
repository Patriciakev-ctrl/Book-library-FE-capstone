// src/components/DarkModeToggle.js
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check localStorage for user's preference
    useEffect(() => {
        const savedMode = localStorage.getItem('dark-mode') === 'true';
        setIsDarkMode(savedMode);
        document.body.classList.toggle('dark', savedMode);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('dark-mode', newMode);
        document.body.classList.toggle('dark', newMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded bg-gray-200 dark:bg-gray-800"
        >
            {isDarkMode ? (
                <span role="img" aria-label="light mode">🌞</span> // Sun icon for light mode
            ) : (
                <span role="img" aria-label="dark mode">🌜</span> // Moon icon for dark mode
            )}
        </button>
    );
};

export default DarkModeToggle;
