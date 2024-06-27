# Email viewer
Opens browser with email preview

## Install
```bash
npm install email-viewer
```

## Example usage
```typescript
  const message = {
    subject: "test subject",
    text: "Hello, world!",
  }

  if (process.env.NODE_ENV === "development") {
    return import("email-viewer").then(({ viewEmail }) => viewEmail(message))
  }
```
