export interface StyleHandler {
  name: string;
  match: (string | RegExp)[];
  method: (arg0: string, arg1: any) => string;
}

declare module "react-simple-layout" {
  interface BaseProps {
    style?: React.CSSProperties;
    height?: number | string;
    width?: number | string;
    mg?: number;
    mgt?: number;
    mgb?: number;
    mgl?: number;
    mgr?: number;
    mgh?: number;
    mgv?: number;
    pd?: number;
    pdt?: number;
    pdb?: number;
    pdl?: number;
    pdr?: number;
    pdh?: number;
    pdv?: number;
  }
  interface FlexProps extends BaseProps {
    /**
     * 主轴对齐方式
     *
     * @type {('start' | 'end' | 'center')}
     * @memberof FlexProps
     */
    m?: "start" | "end" | "center" | "space-between";

    /**
     * 交叉轴对齐方式
     *
     * @type {('top' | 'center' | 'bottom')}
     * @memberof FlexProps
     */
    c?: "top" | "center" | "bottom" | "stretch";
  }
  /* eslint-disable no-undef */
  export class Box<P = any> extends React.Component<BaseProps & P, {}> {}
  export class Row extends Box<FlexProps> {}
  export class Col extends Box<FlexProps> {}
}
