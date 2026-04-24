import { fetcher } from "@/functions/fetcher";
import type { ISWRResponse } from "@/interfaces/swrResponseType";
import { setListeConfiguration } from "@/store/slices/Configuration/configurationSlice";

import type { TConfiguration } from "@/types/configuration";

import useSWR from "swr";

const useConfiguration = (): ISWRResponse<TConfiguration> => {
  const url = `/configuration`;

  const { data, error, isLoading } = useSWR(url, () =>
    fetcher<TConfiguration[], TConfiguration[]>(url, setListeConfiguration),
  );
  return {
    data: data ?? [],
    error,
    isLoading,
  };
};

export { useConfiguration };
