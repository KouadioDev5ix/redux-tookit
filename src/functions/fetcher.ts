import { apiClient } from "@/apiClient";
import { store } from "@/redux/store";
import type { Action } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = async <ServerResponseDataType, ReturnType = any>(
  url: string,
  storeDispatchFunction?: (action: ReturnType) => Action,
  dataFormatFunction?: (data: ServerResponseDataType) => ReturnType,
) => {
  const res = await apiClient.get<ServerResponseDataType>(url);
  const data = res.data!;
  if (res.data && storeDispatchFunction) {
    const formattedData = dataFormatFunction
      ? dataFormatFunction(data)
      : (data as unknown as ReturnType);
    store.dispatch(storeDispatchFunction(formattedData));
  }

  return data;
};
