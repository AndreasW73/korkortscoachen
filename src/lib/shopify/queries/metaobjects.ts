export const getMetaobjectsQuery = /* GraphQL */ `
 query getMetaobjects($type: String!) {
  metaobjects(type: $type, first: 10) {
    edges {
      node {
        id
        type
        fields {
          key
          value
          type
        }
      }
    }
  }
}

`;
