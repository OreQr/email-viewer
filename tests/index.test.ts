import { test, assert } from "vitest"

import { viewEmail } from "email-viewer"

test("function", () => {
  const view = viewEmail({
    id: "test",
    open: true,
    subject: "test subject",
    from: "test from",
    to: "test to",
    html: "test html",
    text: "test text",
  })

  assert(view.id === "test")
  assert(view.html.startsWith("<!doctype html>"))

  assert(view.html.includes("test html"))
  assert(view.html.includes("<pre>test text</pre>"))

  assert(view.html.includes("test from"))
  assert(view.html.includes("test to"))
  assert(view.html.includes("test subject"))
})
