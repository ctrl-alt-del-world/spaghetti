export default {
  title: 'Studio Content',
  name: 'studioModule',
  type: 'object',
  // hidden: true,
  fields: [
    {
      name: 'name',
      title: 'Studio Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'content.main.name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      type: 'url',
      title: 'Site URL'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [ {type: 'block' }]
    }
  ]
}
