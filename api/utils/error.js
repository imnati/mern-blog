export const errorHandler = (statcode, message) => {
  const error = new Error();
  error.statusCode;
  error.message = message;
  return error;
};
