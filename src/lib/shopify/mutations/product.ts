import productFragment from '../fragments/product';

export const createProductMutation = /* GraphQL */ `
  mutation createProduct($input: ProductInput!) {
    productCreate(input: $input) {
      product {
        ...product
      }
      userErrors {
        field
        message
      }
    }
  }
  ${productFragment}
`;

export const updateProductMutation = /* GraphQL */ `
  mutation updateProduct($id: ID!, $input: ProductInput!) {
    productUpdate(id: $id, input: $input) {
      product {
        ...product
      }
      userErrors {
        field
        message
      }
    }
  }
  ${productFragment}
`;

export const deleteProductMutation = /* GraphQL */ `
  mutation deleteProduct($id: ID!) {
    productDelete(id: $id) {
      deletedProductId
      userErrors {
        field
        message
      }
    }
  }
`;
