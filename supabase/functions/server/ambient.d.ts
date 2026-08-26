declare global {
  const Deno: {
    env: {
      get(key: string): string | undefined;
    };
    serve: (options: { port: number }, handler: (req: Request) => Response | Promise<Response>) => void;
  };
}

export {};

declare module "npm:hono" {
  export class Hono {
    use(path: string, ...handlers: any[]): void;
    get(path: string, handler: (c: any) => Response | Promise<Response> | any): void;
    post(path: string, handler: (c: any) => Response | Promise<Response> | any): void;
    delete(path: string, handler: (c: any) => Response | Promise<Response> | any): void;
    fetch: (req: Request, env?: any, executionCtx?: any) => Response | Promise<Response>;
  }
}

declare module "npm:hono/cors" {
  export function cors(options: any): any;
}

declare module "npm:hono/logger" {
  export function logger(...args: any[]): any;
}

declare module "npm:@supabase/supabase-js@2.49.8" {
  export function createClient(url: string | undefined, key: string | undefined): any;
}
