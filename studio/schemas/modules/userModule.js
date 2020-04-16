export default {
  title: 'User Content',
  name: 'userModule',
  type: 'object',
  // hidden: true,
  fields: [
    {
      name: 'name',
      title: 'Name',
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
      title: 'Personal Website',
      type: 'url'
    }
  ]
}
