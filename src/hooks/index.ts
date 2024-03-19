import { AppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
