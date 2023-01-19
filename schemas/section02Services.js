export const textEditorStyles = [
  { title: 'Paragraph', value: 'normal' },
  { title: 'Heading 1', value: 'h1' },
  { title: 'Heading 2', value: 'h2' },
  { title: 'Heading 3', value: 'h3' },
  { title: 'Bullet', value: 'bullet' },
  { title: 'Number', value: 'number' },
  { title: 'Quote', value: 'blockquote' },
]

export const textEditorMarks = {
  decorators: [
    {title: 'Strong', value: 'strong'},
    {title: 'Emphasis', value: 'em'},
    {title: 'Code', value: 'code'}
  ]
}

export default {
  title: 'Services Section (Description)',
  name: 'section02Services',
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
