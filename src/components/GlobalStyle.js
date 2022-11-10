import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Raleway', sans-serif;
        color: #1D1F22;
    }

    nav,
    section,
    main {
        width: 90%;
        margin: 0 auto;
    }
    img {
        max-width: 100%;
        display: block;
    }

    /* TYPOGRAPHY */

    .heading {
        font-size: 2.625rem;
        font-weight: 400;
        text-transform: capitalize;
    }

    .product-name__category {
        font-size: 1.125rem;
        font-weight: 300;
        line-height: 28.8px

    }
    .product-price__category {
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 28.8px
    }

    .product-brand__detail {
        font-weight: 600;
        font-size: 1.875rem;
        line-height: 27px;
    }
    .product-name__detail {
        font-weight: 400;
        font-size: 1.875rem;
    }
    .product-attribute-title__detail,
    .product-attribute-price-title__detail  {
        font-family: 'Roboto Condensed';
        font-weight: 700;
        font-size: 1.125rem;
    }

    .product-price__detail {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 18px;
    }

    .product-description__detail {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1rem;
    }

    .product-brand__cart, .product-name__cart {
        font-weight: 300;
        font-size: 1rem;
        line-height: 27px
    }

    .product-price__cart {
        font-weight: 500;
        font-size: 1rem;
        line-height: 27px
    }

    .product-attribute-label__cart {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 16px;
    }

    .product-attribute-text__cart {
        font-family: 'Source Sans Pro';
        font-size: 0.875rem;
        font-weight: 400;
    }

    .product-total-price-label__cart {
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    .product-total-price-value__cart{
        font-size: 1rem;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
    }

    .my-bag-label-text__cart {
        font-weight: 700;
        font-size: 1rem;
    }

    .my-bag-items-count__cart {
        font-weight: 500;
        font-style: 'Raleway', sans-serif;
        font-size: 1rem;
    }


   

`
export default GlobalStyle