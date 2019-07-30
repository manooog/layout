const path = require("path");
const typescript = require("rollup-plugin-typescript");

function configFactory(opt) {
  let options = {
    input: path.resolve(__dirname, "../index.ts"),
    plugins: [typescript()],
    external: ["leaflet"],
    output: {
      format: opt.format,
      file: path.resolve(__dirname, `../dist/bundle.${opt.format}.js`)
    }
  };
  if (opt.format === "umd") {
    options.output.name = opt.name;
  }

  return options;
}

const opts = [
  {
    format: "cjs"
  },
  {
    format: "es"
  },
  {
    format: "umd",
    name: "velocityLayer"
  }
];

module.exports = {
  opts,
  configFactory
};
