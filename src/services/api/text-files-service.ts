import fetch from "./fetch";

import type { TextFile } from "src/types";
import type { CreateTextFile, UpdateTextFile } from "./request-types";

const create = async (body: CreateTextFile) => {
  const URL = "/text-files";
  const data = await fetch<TextFile>(URL, {
    method: "POST",
    body,
    credentials: "include",
  });

  return data as TextFile;
};

const getUserTextFile = async (id: number) => {
  const URL = `/text-files/${id}`;
  const data = await fetch<TextFile>(URL, {
    credentials: "include",
  });

  return data as TextFile;
};

const update = async (id: number, body: UpdateTextFile) => {
  const URL = `/text-files/${id}`;
  const data = await fetch<TextFile>(URL, {
    method: "PUT",
    body,
    credentials: "include",
  });

  return data as TextFile;
};

export { create, getUserTextFile, update };
