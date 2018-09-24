# SHOPIFY WINTER 2019 - BACK END INTERN CHALLENGE

## Getting Started

- This project is a server-side web API making use of GraphQL, Node.js, Express, Knex.js, Bookshelf.js, SQlite3 for data persistence, and deployed to publicly accessible GKE with the following relationships:

Shops have many Products, Shops have many Orders, Products have many Line Items, Orders have many Line Items

- The project has only an API with full CRUD capabilities, and there is no front end associated with it apart from GraphiQL. The queries can be made from the GraphiQL interface on `http://35.196.190.192/graphql` and the accepted queries are in this repository under `graphql/line_item.js`, `graphql/order.js`, `graphql/product.js`, `graphql/shop.js`. Several examples from those queries are as follows:

```
mutation createLineItem($quantity: Int!, $product_id: Int!, $order_id: Int!) {
    createLineItem(quantity: $quantity, product_id: $product_id, order_id: $order_id) {
    	id,
    	quantity,
    	price,
    	product_id,
    	order_id
    }
}
```

with Query Variables:

```
{
    "quantity": <integer>,
    "product_id": <integer>,
    "order_id": <integer>
}
```

AND

```
mutation createShop($Name: String!) {
    createShop(name: $Name) {
        name
    }
}
```

with Query Variables:

```
{
    "Name": <string>
}
```

AND

```
mutation deleteShop($Id: Int!) {
    deleteShop(id: $Id)
}
```

with Query Variables:

```
{
    "Id": 5
}
```

- The models are formed by Bookshelf.js and are under the sub-directory `models/`.

- There is dummy data in the SQlite3 database that will be helpful while querying. The database have been populated by Knex seeds; hence the most up-to-date data is visible under `db/seeds/add_demo_shops.js`, `db/seeds/add_demo_products.js`, `db/seeds/add_demo_orders.js` and `db/seeds/add_demo_line_items.js`.

## Prerequisites

- The project runs on Node.js: `Node.js & npm`

## Installation

If this project is going to be run locally by cloning the repo, steps to follow are:

- Clone repo: `git clone https://github.com/nebdil/shopify-backend-challenge.git <repo>`
- Go into the cloned directory: `cd <repo>`
- Install dependencies: `npm install` or `yarn install`
- Start the server with: `node server.js`

If the project is going to be tested online, go to `http://35.196.190.192/graphql` and try out some of the example queries, or any other CRUD operation that is setup under the folder `graphql/`.
