import React, { MutableRefObject, useEffect, useState } from 'react';

export interface ThemeChangerProps {
    className?: string
}

const ThemeChanger: React.FunctionComponent<ThemeChangerProps> = ({ className }) => {
    const [darkMode, setDarkMode] = useState(false);

    const changeTheme = (def?: boolean = null) => {
        const dark = def !== null && def;
        document.documentElement.classList.toggle("dark");
        localStorage.theme = darkMode ? "light" : "dark"
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark')
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) {
                document.documentElement.classList.add('dark')
                localStorage.theme = "dark"
                setDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.theme = "light"
                setDarkMode(false);
            }
        });

    }, [darkMode])

    return <button type="button" onClick={ (ev) => { changeTheme() } } className={ `text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 ${className}` }>
        { darkMode ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform -rotate-90"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        }
    </button>;
}

export default ThemeChanger;
