import seoFragment from './seo';
import imageFragment from './image';
import metafieldFragment from './metafield';

const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    slug: metafield(namespace: "custom", key: "slug") {
      ...metafield
    }
    description
    descriptionHtml
    vendor
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          quantityAvailable
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
            priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    logisticsNote: metafield(namespace: "custom", key: "logistics_note") {
      ...metafield
    }
    producers: metafield(namespace: "custom", key: "producers") {
      ...metafield
    }
    boxContent: metafield(namespace: "custom", key: "box") {
      ...metafield
    }
    producer_tags: metafield(namespace: "custom", key: "tags_certifieringar") {
      ...metafield
    }
    tags
    updatedAt
  }
  ${imageFragment}
  ${seoFragment}
  ${metafieldFragment}
`;

export default productFragment;
