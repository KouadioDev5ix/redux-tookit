export interface ISWRResponse<T> {
  data: T[];
  isLoading: boolean;
  error: unknown;
}
