import * as fs from "fs";
import { createGzip } from "zlib";

/**
 * 开启 gzip
 * @param path
 */
function gzipSize(path) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const pipe = fs.createReadStream(path).pipe(createGzip({ level: 9 }));

    /* eslint-disable  no-unused-expressions */
    pipe.on("error", reject);
    pipe.on("data", (buf) => {
      size += buf.length;
    });
    pipe.on("end", () => {
      resolve(size);
    });
    /* eslint-disable  no-unused-expressions */
  });
}

/**
 * 直接读取文件大小
 * @param path
 */
function statSize(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      err ? reject() : resolve(stats.size);
    });
  });
}

/**
 * 获取文件大小
 * @param path
 * @param gzip
 */
export default async function fileSize(path, gzip) {
  // eslint-disable-next-line no-return-await
  return gzip ? await gzipSize(path) : await statSize(path);
}
