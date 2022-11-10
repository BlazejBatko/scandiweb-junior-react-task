import {gql} from '@apollo/client'

export const LOAD_CATEGORIES = gql`
  query {
      categories {
          name
      }
  }
`

export const GET_AVAILABLE_PRICES = gql`
query {
  currencies {
    label
    symbol
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
      inStock
      attributes {
        name
        type
        items {
          value
          displayValue
        }
      }
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
    id
    name
    brand
    description
    gallery
    description
    inStock
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