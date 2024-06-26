import { test } from "vitest"

import viewEmail from "email-viewer"

test("", () => {
  console.log(viewEmail({ email: "Hello, world!" }))
})
