import { useContext } from 'react';
import { storesContext } from '../store/store';

export const useRootStore = () => useContext(storesContext);
