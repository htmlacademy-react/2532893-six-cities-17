import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {StateType, AppDispatchType} from '../store/types.ts';

export const useAppDispatch = () => useDispatch<AppDispatchType>();

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
