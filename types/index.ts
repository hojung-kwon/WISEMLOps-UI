
export { };

declare global {

  interface ResponseBody {
    code: number;
    message?: string;
    result: any;
  }
  
  interface RB {
    code: number;
    message?: string;
    result: any;
  }
}