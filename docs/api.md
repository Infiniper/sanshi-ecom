# Sanshi H2O — Public API (v1)

Base URL: `https://<backend-host>/api`

## GET /categories
Returns product categories.

**Response 200**
```json
{
  "categories": [
    {
      "id": 1,
      "name": "Drinking Water",
      "slug": "drinking-water",
      "description": "Pure bottled water",
      "image_url": "https://..."
    }
  ]
}


GET /products?category=<slug>

Returns products; filter by category slug (optional).

Response 200

{
  "products": [
    {
      "id": 10,
      "category_id": 1,
      "name": "Mineral Water 1L",
      "description": "Refreshing mineral water",
      "price": 25.00,
      "image_url": "https://...",
      "in_stock": true
    }
  ]
}

POST /contact

Create a contact message.

Request

{
  "name": "Asha",
  "email": "asha@example.com",
  "message": "Do you deliver in Kurnool?"
}


Response 201

{ "id": 42, "created_at": "2025-08-24T12:34:56Z" }


Errors 400

{ "error": "Validation failed", "details": [ { "path": "email", "msg": "..."} ] }

POST /orders

Create an order (server computes totals).

Request

{
  "customer": {
    "name": "Rahul",
    "phone": "9876543210",
    "email": "rahul@example.com",
    "address": "21, KVR Street, Kurnool"
  },
  "items": [
    { "product_id": 10, "quantity": 2 },
    { "product_id": 13, "quantity": 1 }
  ]
}


Response 201

{
  "order_id": 118,
  "total_amount": 75.00
}


Errors

400: validation failed

500: server/db errors