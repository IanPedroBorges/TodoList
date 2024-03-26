export type ServiceMessage = { message: string };

type ServiceResponseErrorType =
  'invalidData' | 'notFound' | 'internalServerError' | 'unauthorized' | 'unprocessableEntity';

type ServiceResponseSuceessType = 'created' | 'ok' | 'noContent';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceMessage
};

export type ServiceResponseSuccess<T> = {
  status: ServiceResponseSuceessType,
  data: T
};

export type errorHttpTypes = ServiceResponseErrorType | ServiceResponseSuceessType;

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
