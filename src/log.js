import chalk from "chalk";
import { format } from "./bytes";

export function logResult(result) {
  result.forEach((r) => {
    const { config, passed, bytes, limitBytes } = r;
    const { path, limit, gzip } = config;

    const logs = [
      chalk.bold(path),
      "\n",
      ...(passed
        ? []
        : [
            "  ",
            chalk.red(
              `Package size limit has exceeded by ${chalk.bold(
                format(bytes - limitBytes)
              )}`
            ),
            "\n",
          ]),
      "  ",
      "Size limit:  ",
      passed ? chalk.bold.green(limit) : chalk.bold.red(limit),
      "\n",
      "  ",
      "Size:        ",
      passed ? chalk.bold.green(format(bytes)) : chalk.bold.red(format(bytes)),
      "\n",
      "  ",
      "Gzip:        ",
      gzip ? chalk.bold("Yes") : chalk.bold("No"),
      "\n",
    ];

    // 打印
    console.log(logs.join(""));
  });
}
