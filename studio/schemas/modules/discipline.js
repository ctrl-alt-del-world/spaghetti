export default {
  type: 'discipline',
  name: 'discipline',
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
      { value: 'copywriting', title: 'Copywriting' },
      { value: 'creative-direction', title: 'Creative Direction' },
      { value: 'identity', title: 'Identity' },
      { value: 'exhibition', title: 'Exhibition' },
      { value: 'print', title: 'Print' },
      { value: 'photography', title: 'Photography' },
      { value: 'packaging', title: 'Packaging Design' }
    ],
    layout: 'tags'
  }
}