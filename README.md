
# Junior React Scandiweb Assignment

Frontend layer of an online store created as part of a recruitment assignment for the position of Junior React Developer at Scandiweb. 
The web application allows users to filter results according to a selected category, add items to a shopping cart, and specify a selected currency in which product prices are displayed.


## Overview

The data is fetched from the GraphQL endpoint and provides an interface to view and interact with this data.

The project is built following design and functionality principles from this  [link](https://www.figma.com/file/ZhIW76oCgjW0wzJ8qCHhnt/Junior-Frontend-Test-Designs-(Public)-(Copy)?node-id=150%3A5&t=1BeeUQPXohlwtXo9-1).

The outcome is not pixel-perfect to the provided design, but there are no noticeable mismatches both in terms of design and functionality
## Demo

https://user-images.githubusercontent.com/61236659/202907124-5bf8a40e-ce50-44cf-95fe-2bd54ddbb863.mp4


## FAQ

- #### Is it responsive?

    Even though there was no requirement to implement responsiveness, it was decided to adapt the interfaces to smaller viewports

- #### Will items added to the cart be visible after the page reloads?

    Yes, both items in the cart and the chosen currency will stay the same after reloading. It's achieved by storing cart and currency data in local storage.

- #### Are there any hardcoded links?

    The only hardcoded link is link responsible for displaying cart page
- #### Are there any functionalities that are implemented but were not specified in the requirements?
    Yes, when I was testing the app I found some problems I decided to solve to enhance user experience. 

    - Custom 404 page 
    - Showing relevant information about current cart state
    - Changing add to cart button appearance depending on if the given item is already in the cart
    - Animation when a user adds an item to the cart from the category page to hint about a successful result
## Screenshots

![screencapture-localhost-3000-clothes-huarache-x-stussy-le-2022-11-20-16_19_13](https://user-images.githubusercontent.com/61236659/202911553-ba03198f-f08d-40cb-a9f6-6b3d25ede989.jpg)

![screencapture-localhost-3000-cart-2022-11-20-16_19_58](https://user-images.githubusercontent.com/61236659/202911556-1bf438b6-68d5-418b-a9b0-fbc20a8e720b.jpg)

![screencapture-localhost-3000-cart3-2022-11-20-16_20_54](https://user-images.githubusercontent.com/61236659/202911558-e84f6034-09cb-4a51-9f10-b2a49707c4c5.jpg)


## Lessons Learned

First of all, I would like to thank you very much for the opportunity to do this recruitment task. Doing this assignment has strengthened my skills and brought me closer to what it looks like to create real, commercial solutions based on provided, clearly defined requirements. I learned how to use GraphQL, how to create contexts to help manage more complex application state, and how to create as accurate as possible projects with Figma
## Technologies Used

- ### Languages
    - JS
    - HTML
    - CSS
    - [GraphQl](https://graphql.org)
- ### Front-End Libraries
    - [ReactJS](https://reactjs.org)
    - [React Router](https://github.com/remix-run/react-router)
    - [styled components](https://github.com/remix-run/react-router)
- ### Other tools
    - [Apollo](https://www.apollographql.com)
    - [html-react-parser](https://www.npmjs.com/package/html-react-parser)


## Run Locally
~~#### to run this project on your machine, first, you have to install and host graphql [endpoint](https://github.com/scandiweb/junior-react-endpoint) as localhost~~

#### graphql endpoint is now hosted on the server so you dont have to setup backend locally, now you can start right off from installing the client

Clone the project

```bash
  git clone https://github.com/BlazejBatko/scandiweb-junior-react-task.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

