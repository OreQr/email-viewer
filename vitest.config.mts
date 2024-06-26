import { defineConfig } from "vitest/config"
import tsconfigPaths from "vite-tsconfig-paths"
import fs from "fs"

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    [
      {
        name: "ejs-transform",
        load(id) {
          if (id.endsWith(".ejs")) {
            return `export default \`${fs.readFileSync(id)}\``
          }
        },
      },
    ],
  ],
})
