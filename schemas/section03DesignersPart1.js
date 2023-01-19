import { textEditorStyles, textEditorMarks } from "./section02Services"

export default {
  title: 'Designers Section Part 1 (Description)',
  name: 'section03DesignersPart1',
  type: 'document',
  fields: [
    {
      title: 'Section Description',
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
