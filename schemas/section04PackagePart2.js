export default {
  title: 'Package Section Part 2 (List)',
  name: 'section04PackagePart2',
  type: 'document',
  fields: [
    {
      title: 'Package',
      name: 'package',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Support Time',
      name: 'supportTime',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      title: 'Aux Service',
      name: 'auxService',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Discount (%)',
      name: 'discount',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      title: 'Message',
      name: 'message',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: Rule => Rule.required()
    }
  ]
}
