class LimitSizePlugin {
  constructor(files = []) {
    this.files = files;
  }

  apply(compiler) {
    compiler.hooks.done.tap(
      "LimitSizePlugin",
      async () => {
        /**
         * limit-size
         */
        // 1. lint size limit
        const result = await lint(this.files);
        // 2. log
        logResult(result);
        // 3. help doc
        const success = result.every((r) => r.passed);
        if (!success) {
          console.log(
            chalk.bold.yellow(
              'Try to reduce size or increase limit in "limit-size"'
            ),
            "\n"
          );
        }
      }
    );
  }
}

export default LimitSizePlugin
