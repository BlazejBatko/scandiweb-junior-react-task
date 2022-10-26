import {gql} from '@apollo/client'

export const LOAD_CATEGORIES = gql`
    query {
        categories {
            name
        }
    }
`

export const PRODUCTS_FROM_CATEGORY = (productsCategory) => gql`
query{
    category(input: {title: "${productsCategory}"}) {
        products {
        name
        id
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`

export const PRODUCT_BY_ID = (productId) => gql`
query{
  product(id: "${productId}") {
    name
    brand
    description
    gallery
    description
    prices {
      amount
      currency {
        symbol
        label
      }
    }
    attributes {
      name
      type
      items {
        value
        displayValue
      }
    }
  }
}
`