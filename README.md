# Email viewer

![NPM Version](https://img.shields.io/npm/v/email-viewer?style=flat-square)
![NPM Downloads](https://img.shields.io/npm/dw/email-viewer?style=flat-square)
![License](https://img.shields.io/github/license/oreqr/email-viewer?style=flat-square)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Opens browser with email preview by rendering HTML file using bundled EJS template.

## Preview

Email example from [React Email](https://react.email)

![image](https://github.com/OreQr/email-viewer/assets/50458706/ab9de2a3-5bdd-4e58-bb99-41072cea173f)

## Installation

```bash
npm install email-viewer
```

## Example usage

Here is an example of how to use the `viewEmail` function:

```typescript
const message = {
  subject: "test subject",
  text: "Hello, world!",
}

if (process.env.NODE_ENV === "development") {
  return import("email-viewer").then(({ viewEmail }) => viewEmail(message))
}
```

## Options

The `viewEmail` function accepts an object with the following properties:

### ViewEmailOptions

| Property | Type                 | Description                                                                                         | Default        |
| -------- | -------------------- | --------------------------------------------------------------------------------------------------- | -------------- |
| id       | `string`             | ID of the email. If not provided, a random UUID will be generated.                                  | `randomUUID()` |
| dir      | `string`             | Directory where the HTML file will be saved. If open is set to false, the file will not be created. | `os.tmpdir()`  |
| open     | `boolean`            | Whether to automatically open the rendered HTML file in the default browser.                        | `true`         |
| subject  | `string`             | Subject of the email.                                                                               | `undefined`    |
| from     | `string`             | Sender of the email.                                                                                | `undefined`    |
| to       | `string \| string[]` | Recipient(s) of the email.                                                                          | `undefined`    |
| html     | `string`             | HTML content of the email.                                                                          | `undefined`    |
| text     | `string`             | Plain text content of the email.                                                                    | `undefined`    |

## Result

The `viewEmail` function returns an object with the following properties:

### ViewEmailResult

| Property | Type     | Description            |
| -------- | -------- | ---------------------- |
| id       | `string` | ID of the email.       |
| html     | `string` | Rendered HTML content. |

## License

[MIT](https://github.com/OreQr/email-viewer/blob/main/LICENSE.txt)
