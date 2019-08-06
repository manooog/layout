import styled from "styled-components";
import { BaseProps, StyleHandler } from "react-simple-layout";
import config from "./config";
import { strLikeNum } from "./util";

const sizeValue = (str: string | number): string => {
  if (typeof str === "number" || strLikeNum(str)) {
    return str + config.getConfig().unit;
  } else {
    return str;
  }
};

const colorValue = (source: string | number) => {
  try {
    let color = config.getConfig().colors[+source];
    if (color) {
      return `color: ${color}`;
    } else {
      return `color: ${color}`;
    }
  } catch (error) {
    console.warn("要使用色条，请先设置文字色条");
    return "";
  }
};

const STYLE_HANDLERS: StyleHandler[] = [
  {
    name: "size",
    match: ["height", "width"],
    method: (prop, size: number | string): string => {
      return prop + ":" + sizeValue(size);
    }
  },
  {
    name: "font",
    match: ["f", "fc", "fw"],
    method: (prop, size: number | string): string => {
      let result = "";
      if (prop === "f") {
        let [colorIndex, fontSize] = (size as string).split(",");
        result = `font-size: ${sizeValue(fontSize)};${colorValue(colorIndex)};`;
      }
      if (prop === "fc") {
        result = colorValue(size) + ";";
      }
      if (prop === "fw") {
        result = `font-weight: ${size}` + ";";
      }
      return result;
    }
  },
  {
    name: "flex-shink",
    match: ["fls", "flg"],
    method: (prop, size: number | string): string => {
      if (prop === "fls") {
        return `flex-shrink: ${size};`;
      }
      if (prop === "flg") {
        return `flex-grow: ${size};`;
      }
    }
  },
  {
    name: "flex-shink",
    match: ["bg"],
    method: (prop, size: number | string): string => {
      return `background: ${size};`;
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
      size = sizeValue(size);
      // mgt mgb mgr mgl mgh mgv mg
      if (prop.length === 2) {
        return `${propMap[prop]}: ${size}`;
      }

      let prefix = prop.slice(0, 2);

      let sufix = prop.slice(-1);

      return directionMap[sufix]
        .split("|")
        .map(s => `${propMap[prefix]}-${s}: ${size}`)
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
  box-sizing: border-box
`;
