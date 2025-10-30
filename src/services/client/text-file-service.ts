import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";

import {
  create,
  getUserTextFile,
  update,
  deleteFile,
} from "../api/text-files-service";
import NotificationsService from "../notifications-service";
import { QUERIES_KEYS } from "src/enums";

import type { TextFile } from "src/types";
import type { ApiError } from "../api/response-types";
import type { CreateTextFile, UpdateTextFile } from "../api/request-types";
import type { UseQueryProps } from "./types";

const useCreate = (
  props: UseMutationOptions<TextFile, ApiError, CreateTextFile>
) => {
  return useMutation({
    mutationFn: create,
    onError: (error) => NotificationsService.error(error.detail),
    ...props,
  });
};

const useGetUserTextFile = (id: number, props: UseQueryProps<TextFile> = {}) => {
  return useQuery({
    queryKey: [QUERIES_KEYS.textFiles, id],
    queryFn: () => getUserTextFile(id),
    ...props,
  });
};

const useUpdate = (
  props: UseMutationOptions<TextFile, ApiError, { id: number; body: UpdateTextFile }>
) => {
  return useMutation({
    mutationFn: ({ id, body }) => update(id, body),
    onError: (error) => NotificationsService.error(error.detail),
    ...props,
  });
};

const useDelete = (props: UseMutationOptions<void, ApiError, number> = {}) => {
  return useMutation({
    mutationFn: deleteFile,
    onError: (error) => NotificationsService.error(error.detail),
    ...props,
  });
};

const TextFilesService = {
  useCreate,
  useGetUserTextFile,
  useUpdate,
  useDelete,
};

export default TextFilesService;
