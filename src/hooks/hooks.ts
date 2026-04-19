// import type { AppDispatch, RootState } from "@/redux/store";
import type { AppDispatch, RootState } from "@/store/generalStore";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
