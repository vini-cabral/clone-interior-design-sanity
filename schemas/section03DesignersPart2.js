export default {
  title: 'Designers Section Part 2 (List)',
  name: 'section03DesignersPart2',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Attribution',
          name: 'attribution',
          type: 'string',
        }
      ]
    }
  ]
}
