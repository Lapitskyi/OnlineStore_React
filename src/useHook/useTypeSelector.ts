import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppStateType } from '../redux/store';

const useTypeSelector:TypedUseSelectorHook<AppStateType> = useSelector;
export default useTypeSelector;
