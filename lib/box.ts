import styled from "styled-components";
import { BaseProps, StyleHandler } from "r-layout";

const STYLE_HANDLERS: StyleHandler[] = [
  {
    name: "size",
    match: ["height", "width"],
    method: (prop, size: number | string): string => {
      if (typeof size === "number" || !Number.isNaN(+size)) {
        return prop + ":" + size + "px";
      } else {
        return prop + ":" + size;
      }
    }
  },
  {
    name: "padding-or-margin",
    match: [/^mg/, /^pd/],
    method: (prop, size: number | string): string => {
      let propMap: {
        [key: string]: string;
      } = {
        mg: "margin",
        pd: "padding"
      };
      let directionMap: {
        [key: string]: string;
      } = {
        t: "top",
        l: "left",
        r: "right",
        b: "bottom",
        h: "left|right",
        v: "top|bottom"
      };
      // mgt mgb mgr mgl mgh mgv mg
      if (prop.length === 2) {
        return `${propMap[prop]}: ${size}px`;
      }

      let prefix = prop.slice(0, 2);

      let sufix = prop.slice(-1);

      return directionMap[sufix]
        .split("|")
        .map(s => `${propMap[prefix]}-${s}: ${size}px`)
        .join(";");
    }
  }
];

const matchHandler = (prop: string): ((arg0: any) => string) | undefined => {
  for (const handler of STYLE_HANDLERS) {
    for (const matcher of handler.match) {
      if (typeof matcher === "string" && matcher === prop) {
        return handler.method.bind(null, prop);
      }
      if (matcher instanceof RegExp && matcher.test(prop)) {
        return handler.method.bind(null, prop);
      }
    }
  }
};

const handlerProps = (props: BaseProps): string => {
  return Object.keys(props).reduce((pre, cur: string) => {
    const handler = matchHandler(cur);
    if (cur === "style" || handler === undefined) {
      return pre;
    } else {
      return `${pre}${handler(props[cur as keyof BaseProps])};`;
    }
  }, "");
};

export default styled.div<BaseProps>`
  ${props => handlerProps(props)}
`;
