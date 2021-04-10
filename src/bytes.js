import parser from "byte-parser";

const JEDEC = { radix: 1024, unit: ["b", "Kb", "Mb", "Gb"] };

/**
 * 解析 size string
 * @param sizeString
 */
export function parse(sizeString) {
  return parser(sizeString);
}

/**
 *
 * @param bytes
 * @param fixed
 */
export function format(b, fixed = 1) {
  let bytes = Math.abs(b);

  const { radix, unit } = JEDEC;

  let loop = 0;

  while (bytes >= radix) {
    bytes /= radix;
    loop += loop;
  }
  return `${bytes.toFixed(fixed)} ${unit[loop]}`;
}
