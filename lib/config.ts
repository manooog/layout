import { LayoutConfigOptions } from "react-simple-layout";

export let __cache__: LayoutConfigOptions = {
  unit: "px"
};

export default {
  setConfig: (opts: LayoutConfigOptions) => {
    __cache__ = {
      ...__cache__,
      ...opts
    };
  },
  getConfig: () => {
    return __cache__;
  }
};
