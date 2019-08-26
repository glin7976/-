/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.createPages = ({ actions }) => {
//   const { createPage } = actions
//   const dogData = [
//     {
//       name: "Fido",
//       breed: "Sheltie",
//     },
//     {
//       name: "Sparky",
//       breed: "Corgi",
//     },
//   ]
//   dogData.forEach(dog => {
//     createPage({
//       path: `/${dog.name}`,
//       component: require.resolve(`./src/templates/dog-template.js`),
//       context: { dog },
//     })
//   })
// }
// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
//   const pokemons = [
//     { name: "Pikachu", type: "electric" },
//     { name: "Squirtle", type: "water" },
//   ]
//   pokemons.forEach(pokemon => {
//     const node = {
//       name: pokemon.name,
//       type: pokemon.type,
//       id: createNodeId(`Pokemon-${pokemon.name}`),
//       internal: {
//         type: "Pokemon",
//         contentDigest: createContentDigest(pokemon),
//       },
//     }
//     actions.createNode(node)
//   })
// }

const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/post.js`),
    })
  })
}
