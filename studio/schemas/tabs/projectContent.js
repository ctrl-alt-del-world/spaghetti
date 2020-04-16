import Tabs from 'sanity-plugin-tabs'

export default {
  name: "projectContent",
  type: "object",
  title: "Project Content",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "defaultMeta", title: "Meta" }
  ],
  options: {
    layout: "object"
  },
  fields: [
    {
      type: "projectModule",
      name: "main",
      title: "Project",
      fieldset: "main"
    },
    {
      type: "metaCard",
      name: "meta",
      title: "Meta",
      fieldset: "defaultMeta"
    }
  ]
}
