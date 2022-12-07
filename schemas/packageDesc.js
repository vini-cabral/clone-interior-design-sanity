export default {
  title: 'Package Section',
  name: 'package',
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
