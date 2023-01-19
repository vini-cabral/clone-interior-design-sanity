export default {
  title: 'Showcase Section (List)',
  name: 'section01Showcase',
  type: 'document',
  fields: [
    {
      title: 'Project',
      name: 'project',
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
          title: 'Attribution',
          name: 'attribution',
          type: 'string',
          validation: Rule => Rule.required(),
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
          title: 'Attribution',
          name: 'attribution',
          type: 'string',
          validation: Rule => Rule.required(),
        }
      ]
    }
  ]
}
