import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (dark) => {

    const [darkMode, setDarkMode] = useLocalStorage (dark);

    useEffect (() => {
        
    })


    return [darkMode, setDarkMode];
}

