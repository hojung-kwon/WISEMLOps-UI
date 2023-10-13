
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

  interface workflowNodeInfo {
    id: string;
    label: string;
    // attribute: {
    //   // inputParams: string;
    //   // outputParams: string;
    //   // args: string;
    //   // command: string;
    //   // image: string
    // }
    attribute: any;
  }
}

