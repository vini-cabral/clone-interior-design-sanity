export default {
  title: 'Teammate',
  name: 'teammate',
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
          title: 'Caption',
          name: 'caption',
          type: 'string',
          validation: Rule => Rule.required(),
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          title: 'Attribution',
          name: 'attribution',
          type: 'string',
        }
      ]
    }
  ]
}
