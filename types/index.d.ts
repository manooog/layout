declare module "react-simple-layout" {
  export interface StyleHandler {
    name: string;
    match: (string | RegExp)[];
    method: (arg0: string, arg1: any) => string;
  }

  interface LayoutConfigOptions {
    unit?: "rem" | "px";
    colors?: Array<string>;
  }
  interface BaseProps {
    style?: React.CSSProperties;
    height?: number | string;
    width?: number | string;
    mg?: number | string;
    mgt?: number | string;
    mgb?: number | string;
    mgl?: number | string;
    mgr?: number | string;
    mgh?: number | string;
    mgv?: number | string;
    pd?: number | string;
    pdt?: number | string;
    pdb?: number | string;
    pdl?: number | string;
    pdr?: number | string;
    pdh?: number | string;
    pdv?: number | string;
    fz?: number | string;
    fc?: number | string;
    f?: string;
    fw?: string | number;
    // flex-shink
    fls?: number | string;
    flg?: number | string;
    bg?: string;
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
  export class LayoutConfig {
    static setConfig: (opts: LayoutConfigOptions) => void;
    static getConfig: () => LayoutConfigOptions;
  }
}
