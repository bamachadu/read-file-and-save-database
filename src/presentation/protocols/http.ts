import { Request } from 'express';

export type HttpResponse = {
  statusCode: number
  body: any
}

export interface HttpRequest<T = any> extends Request {
    body: T;
}