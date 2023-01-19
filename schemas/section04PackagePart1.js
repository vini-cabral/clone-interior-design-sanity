export default {
  title: 'Package Section Part 1 (Description)',
  name: 'section04PackagePart1',
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
