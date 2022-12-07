export default {
  title: 'Project',
  name: 'showcase',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
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
    },
    {
      title: 'Large',
      name: 'large',
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
