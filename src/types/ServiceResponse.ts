type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND';

export type ServiceResponseSuccess<T> = {
  type: 'SUCCESSFUL', 
  message: T
};

export type ServiceResponseError = {
  type: ServiceResponseErrorType, 
  message: string
};

export type ServiceResponse<T> = ServiceResponseSuccess<T> | ServiceResponseError;