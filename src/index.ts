import { randomUUID } from "crypto"
import ejs from "ejs"
import template from "templates/template.ejs"
import os from "os"
import path from "path"
import fs from "fs"
import openFile from "open"
import { openExplorer } from "./open"

export interface ViewEmailOptions {
  id?: string
  dir?: string
  open?: boolean
  subject?: string
  from?: string
  to?: string | string[]
  html?: string
  text?: string
}
export interface ViewEmailResult {
  id: string
  html: string
}
export const viewEmail = (options: ViewEmailOptions): ViewEmailResult => {
  const { id = randomUUID(), dir = os.tmpdir(), open = true } = options

  const html = ejs.render(template, { options })

  if (open) {
    const filePath = path.join(dir, `${id}.html`)
    fs.writeFileSync(filePath, html)

    const target = `file://${filePath}`
    if (process.platform === "win32") {
      openExplorer(target)
    } else {
      openFile(target)
    }
  }

  return { id, html }
}
