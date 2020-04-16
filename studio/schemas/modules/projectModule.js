export default {
  title: 'Project Content',
  name: 'projectModule',
  type: 'object',
  // hidden: true,
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Project URL',
      type: 'url'
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
    }
  ]
}
