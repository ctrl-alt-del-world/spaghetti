export default {
  type: 'discipline',
  name: 'discipline',
  type: 'array',
  of: [
    {type: 'string'}
  ],
  options: {
    list: [
      { value: 'founder', title: 'Founder' },
      { value: 'studio', title: 'Runs Studio' },
      { value: 'web-developer', title: 'Web Development' },
      { value: 'technical-architect', title: 'Technical Architect' },
      { value: 'ecommerce-strategy', title: 'Ecommerce Strategy' },
      { value: 'ux-designer', title: 'UX Design' },
      { value: 'ui-designer', title: 'UI Design' },
      { value: 'product-design', title: 'Product Design' },
      { value: 'ui-ux-designer', title: 'UI/UX Design' },
      { value: 'strategy', title: 'Strategy' },
      { value: 'copywriting', title: 'Copywriting' },
      { value: 'creative-direction', title: 'Creative Direction' },
      { value: 'identity', title: 'Identity' },
      { value: 'exhibition', title: 'Exhibition' },
      { value: 'illustrator', title: 'Illustrator' },
      { value: 'project-management', title: 'Project Management' },
      { value: 'print', title: 'Print' },
      { value: 'photography', title: 'Photography' },
      { value: 'packaging', title: 'Packaging Design' }
    ],
    layout: 'tags'
  }
}