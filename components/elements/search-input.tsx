import React from 'react';
import { SearchIcon } from '@heroicons/react/outline'
import styles from '@styles/components/commons.module.css'


interface SearchInputProps {

}

const SearchInput: React.FC<SearchInputProps> = () => {
    return <input placeholder="buscar..." type="text" className={ `focus:w-1/2 w-80 rounded-md border-0 dark:text-white transition-colors dark:ring-gray-900 dark:bg-gray-900 bg-gray-50 ring-1 ring-gray-200 px-4 p-1 focus:ring-1 focus:ring-gray-300 ${styles.searchInput}` } />
}

export default SearchInput;
