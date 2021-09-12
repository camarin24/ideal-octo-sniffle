import { CogIcon, CollectionIcon, TicketIcon } from '@heroicons/react/outline';
import styles from '@styles/components/commons.module.css';
import React from 'react';


interface SideBarProps {
    opened: boolean
}

const SideBar: React.FC<SideBarProps> = ({ opened }) => {
    return <div className={ `flex flex-col transition-all duration-500 ease-in-out h-screen px-0 pt-2 bg-gray-900 dark:bg-gray-800 dark:border-gray-600 ${!opened ? styles.closedSideBar : ''}` }>
        <h2 className="text-3xl text-center font-semibold text-white">Brand</h2>
        <div className="flex flex-col justify-between flex-1 mt-6">
            <div className="text-sm">
                <a className="flex items-center pl-4 pr-20 py-2 bg-gray-700 text-gray-200" href="#">
                    <CollectionIcon className="h-5 w-5" />
                    <span className="mx-4 font-medium">Dashboard</span>
                </a>
                <a className="flex items-center pl-4 pr-20 py-2 transition-colors duration-200 transform text-gray-400 hover:bg-gray-700 hover:text-gray-200" href="#">
                    <TicketIcon className="h-5 w-5" />
                    <span className="mx-4 font-medium">Tickets</span>
                </a>
                <hr className="my-6 dark:border-gray-600" />
            </div>
            <div className="text-sm">
                <div className="flex items-center pl-4 pr-20 py-2 hover:cursor-pointer transition-colors duration-200 transform text-gray-400 hover:bg-gray-700 hover:text-gray-200" href="#">
                    <CogIcon className="h-5 w-5" />
                    <span className="mx-4 font-medium">Settings</span>
                </div>
            </div>
        </div>
    </div>;
}

export default SideBar;
