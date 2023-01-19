export default {
  title: 'Contact Section (Description)',
  name: 'section05Contact',
  type: 'document',
  fields: [
    {
      title: 'Section Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
}
