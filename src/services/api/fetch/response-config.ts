const onSuccess = async (response: Response) => {
  if (response.status === 204) return undefined;

  const responseJSON = await response.json();
  return responseJSON;
};

const onError = async (response: Response) => {
  const error = await response.json();
  throw error;
};

export { onSuccess, onError };
