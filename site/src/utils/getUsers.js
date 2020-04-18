const groq = require('groq')
const client = require('./sanityClient.js')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('./serializers')

function generateUser (user) {
  return {
    ...user,
    // bio: BlocksToMarkdown(user.bio, { serializers, ...client.config() })
  }
}

async function getUsers () {
  const filter = groq`*[_type == "user"] {
    ...,
    projects[]-> {
      ...,
      project[] {
        ...
      }
    }
  }`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const users = docs.map(generateUser)
  return users
}

module.exports = getUsers