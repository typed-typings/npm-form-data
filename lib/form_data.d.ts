declare class FormData {
  static LINE_BREAK: string;
  static DEFAULT_CONTENT_TYPE: string;

  append (key: string, value: any, options?: string | FormData.Options): this;
  getHeaders <T> (userHeaders?: T): T & FormData.Headers;
  getCustomHeaders (contentType?: string): FormData.CustomHeaders;
  getBoundary (): string;
  getLengthSync (): number;
  getLength (cb: (error: Error, length?: number) => any): void;
  submit (params: string | Object, cb: (error: Error, response?: any) => any): any;
  pipe <T> (to: T): T;
}

declare module FormData {
  export interface Options {
    filename: string;
  }

  export interface Headers {
    'content-type': string;
  }

  export interface CustomHeaders extends Headers {
    'content-length': string;
  }
}

export = FormData;
