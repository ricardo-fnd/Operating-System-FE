"use client";
import { QueryClientProvider } from "@tanstack/react-query";

import { getQueryClient } from "src/services";

import type { Provider } from "./types";

const queryClient = getQueryClient();

const ReactQueryProvider = ({ children }: Provider) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default ReactQueryProvider;
