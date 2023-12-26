import { createContext } from 'react';
import { LocalStorageType } from '../../types/context/loginContextTypes';


export const LocalStorageContext = createContext({} as LocalStorageType );