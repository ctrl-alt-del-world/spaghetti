import Tabs from 'sanity-plugin-tabs'

export default {
  name: "studioContent",
  type: "object",
  title: "Studio Content",
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
      type: "studioModule",
      name: "main",
      title: "Studio",
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
