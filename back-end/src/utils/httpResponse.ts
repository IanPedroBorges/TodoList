import { errorHttpTypes } from '../interfaces/ServiceResponse';

const httpTypes = {
  ok: 200,
  created: 201,
  noContent: 204,
  invalidData: 400,
  unauthorized: 401,
  notFound: 404,
  unprocessableEntity: 422,
  internalServerError: 500,
};

const httpStatus = (type: errorHttpTypes): number => httpTypes[type];

export default httpStatus;
