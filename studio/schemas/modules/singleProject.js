export default {
  title: 'Single Project',
  name: 'singleProject',
  type: 'object',
  hidden: true,
  fields: [
    { 
      type: 'discipline',
      name: 'discipline'
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
