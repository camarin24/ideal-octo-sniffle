import Navbar from '@components/layouts/navbar';
import SideBar from '@components/layouts/side-bar';
import ThemeChanger from '@components/elements/theme-changer';
import React, { useState } from 'react';

interface LayoutProps {
    toggleOpen: (state: boolean) => void

}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [opened, setOpened] = useState(false);
    return (
        <div className="w-full overflow-hidden transition-colors bg-gray-50 dark:bg-gray-900 min-h-screen flex">
            <SideBar opened={ opened } />
            <Navbar toggleOpen={ setOpened }>
                { children }
            </Navbar>
        </div>
    )
}


export default Layout;
