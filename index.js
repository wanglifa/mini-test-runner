import glob from 'glob'
import fs from 'fs/promises'
import { build} from 'esbuild'
const files = glob.sync("*.spec.js")
for(const file of files) {
  const fileContent = await fs.readFile(file, "utf-8")
  await runModule(fileContent + ";import {run} from './core.js'; run()")
}
async function runModule(fileContent) {
  const result = await build({
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd(),
    },
    // 不写入文件
    write: false,
    // 将文件都打包到一个文件里
    bundle: true,
    target: "esnext"
  })
  new Function(result.outputFiles[0].text)()
}