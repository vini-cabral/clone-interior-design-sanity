import { textEditorStyles, textEditorMarks } from "./services"

export default {
  title: 'Designers Section',
  name: 'designers',
  type: 'document',
  fields: [
    {
      title: 'Designers Section',
      name: 'body',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [
        {
          type: 'block',
          styles: textEditorStyles,
          marks: textEditorMarks
        }
      ]
    }
  ]
}
