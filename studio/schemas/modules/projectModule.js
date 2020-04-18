export default {
  title: 'Project Content',
  name: 'projectModule',
  type: 'object',
  // hidden: true,
  fieldsets: [
    {
      name: 'media',
      title: 'Project Media',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
  ],
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
    },
    {
      name: 'image',
      type: 'image',
      title: 'Project Card',
      options: {
        hotspot: true
      },
      fieldset: 'media'
    }
  ]
}
