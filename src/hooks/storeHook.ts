import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AdminState, AppDispatch} from "../common/store/store.ts";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AdminState> = useSelector;