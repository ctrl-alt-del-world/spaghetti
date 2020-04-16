import Tabs from 'sanity-plugin-tabs'

export default {
  name: "userContent",
  type: "object",
  title: "User Content",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "projects", title: "Projects" },
    { name: "defaultMeta", title: "Meta" }
  ],
  options: {
    layout: "object"
  },
  fields: [
    {
      type: "userModule",
      name: "main",
      title: "User",
      fieldset: "main"
    },
    {
      name: 'projects',
      type: 'linkedProjects',
      title: 'Projects',
      fieldset: 'projects'
    },
    {
      type: "metaCard",
      name: "meta",
      title: "Meta",
      fieldset: "defaultMeta"
    }
  ]
}
