import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline'
import ThemeChanger from '@components/elements/theme-changer';
import SearchInput from '@components/elements/search-input';

interface NavbarProps {
    toggleOpen: (state: boolean) => void

}

const Navbar: React.FC<NavbarProps> = ({ children, toggleOpen }) => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open);
        toggleOpen(!open);
    }

    return <div className="w-full">
        <nav className="bg-white shadow-sm ease-in-out dark:bg-gray-800 transition-all">
            <div className="px-6 py-2">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <button type="button" onClick={ toggleMenu } className="text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700" aria-label="toggle menu">
                                <MenuIcon className="w-6 h-6 fill-current" />
                            </button>
                        </div>
                        <div className="text-xl font-semibold text-gray-700">
                        </div>
                    </div>
                    <div className="flex-1 md:flex md:items-center md:justify-between">
                        <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8 w-full justify-center">
                            {/* <a href="#" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Projects</a> */ }
                            <SearchInput />
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                            <ThemeChanger className="mx-4" />
                            <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                <div className="w-6 h-6 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img src="https://secure.gravatar.com/avatar/af1995634e62554b01387834efeda17e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FCZ-2.png" className="object-cover w-full h-full" alt="avatar" />
                                </div>
                                <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">Khatab wedaa</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className="flex">
            { children }
        </div>
    </div>;
}

export default Navbar;
