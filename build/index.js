const rollup = require("rollup");
const config = require("./config");

const build = async option => {
  const bundle = await rollup.rollup(option);
  await bundle.write(option.output);
};

config.opts.map(opt => {
  build(config.configFactory(opt));
});
