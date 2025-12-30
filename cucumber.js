module.exports = {
  default: {
    require: [
      "step-definitions/**/*.ts",
      "src/support/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: ["html:reports/report.html"],
    paths: ["features/**/*.feature"],
    publishQuiet: true
  }
};
