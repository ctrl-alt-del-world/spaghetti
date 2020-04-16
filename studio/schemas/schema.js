// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Content Types
import user from './types/user'
import project from './types/project'
import studio from './types/studio'

// Tabs
import userContent from './tabs/userContent'
import studioContent from './tabs/studioContent'
import projectContent from './tabs/projectContent'

// Modules
import metaCard from './modules/metaCard'
import userModule from './modules/userModule'
import studioModule from './modules/studioModule'
import projectModule from './modules/projectModule'
import linkedProjects from './modules/linkedProjects'
import singleProject from './modules/singleProject'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    user,
    studio,
    project,
    // Tabs
    userContent,
    studioContent,
    projectContent,
    // Modules
    metaCard,
    userModule,
    studioModule,
    projectModule,
    linkedProjects,
    singleProject
  ])
})
