export default {
  title: 'Single Project',
  name: 'singleProject',
  type: 'object',
  hidden: true,
  fields: [
    {
      name: 'role',
      title: 'Role',
      type: 'array',
      of: [
        {type: 'string'}
      ],
      options: {
        list: [
          { value: 'web-developer', title: 'Web Development' },
          { value: 'ux-designer', title: 'UX Design' },
          { value: 'ui-designer', title: 'UI Design' },
          { value: 'ui-ux-designer', title: 'UI/UX Design' },
          { value: 'strategy', title: 'Strategy' },
          { value: 'copywrite', title: 'Copywriting' },
          { value: 'creative-direction', title: 'Creative Direction' },
          { value: 'identity', title: 'Identity' },
          { value: 'exhibition', title: 'Exhibition' },
          { value: 'print', title: 'Print' },
          { value: 'photography', title: 'Photography' },
          { value: 'packaging', title: 'Packaging Design' }
        ],
        layout: 'tags'
      }
    },
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }]
    }
  ],
  preview: {
    select: {
      title: 'project.content.main.name',
      subtitle: 'role.0'
    }
  }
}
