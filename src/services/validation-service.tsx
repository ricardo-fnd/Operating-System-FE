const isEmpty = (value: string) => !value.length;
const checkLength = (length: number, value: string) => value?.length >= length;
const isEmail = (email?: string) =>
  email ? /^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/.test(email) : false;

const ValidationService = { isEmpty, checkLength, isEmail };

export default ValidationService;
