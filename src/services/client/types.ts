import type { UndefinedInitialDataOptions } from "@tanstack/react-query";

export type UseQueryProps<T> = Omit<
  UndefinedInitialDataOptions<T>,
  "queryKey" | "queryFn"
>;
