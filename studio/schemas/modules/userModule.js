export default {
  title: 'User Content',
  name: 'userModule',
  type: 'object',
  // hidden: true,
  fieldsets: [
    {
      name: 'info',
      title: 'User Info',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
  ],
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
      type: 'location',
      name: 'location',
      fieldset: 'info'
    },
    { 
      type: 'discipline',
      name: 'discipline',
      fieldset: 'info'
    },
    {
      name: 'url',
      title: 'Personal Website',
      type: 'url',
      fieldset: 'info'
    }
  ]
}
