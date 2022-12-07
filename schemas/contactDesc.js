export default {
  title: 'Contact Section',
  name: 'contact',
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
