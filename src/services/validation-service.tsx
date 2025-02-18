const isEmpty = (value: string) => !value.length;
const checkLength = (length: number, value: string) => value?.length >= length;

const ValidationService = { isEmpty, checkLength };

export default ValidationService;
