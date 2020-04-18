const groq = require('groq')
const client = require('./sanityClient.js')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('./serializers')

function generateProject (project) {
  return {
    ...project,
    // bio: BlocksToMarkdown(project.bio, { serializers, ...client.config() })
  }
}

async function getProjects () {
  const filter = groq`*[_type == "project"] {
    ...,
    'image': content.main.image.asset->
  }`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const projects = docs.map(generateProject)
  return projects
}

module.exports = getProjects