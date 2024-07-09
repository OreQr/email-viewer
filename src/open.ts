import { exec } from "child_process"

export const openExplorer = (target: string) => {
  exec("explorer " + target)
}
