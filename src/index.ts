import ejs from "ejs"
import template from "templates/template.ejs"

export interface ViewEmailProps {
  email: string
}
const viewEmail = ({ email }: ViewEmailProps) => {
  const test = ejs.render(template, {
    email,
  })

  return test
}

export default viewEmail
