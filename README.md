# XOi Technical Assessment by Juan Sebastian Zapata

This repository contains automated end-to-end (E2E) tests using Cypress for testing various scenarios:

- **User Registration** - Automate the registration process using a unique username and email. Verify successful account creation.
- **Login and Logout** - Automate login using registered credentials. Verify successful redirection to the dashboard. Logout and confirm session termination.
  - **Error Handling** - Attempt login with incorrect credentials and verify the system displays an appropriate error message.
- **Add Item to Cart** - Search for a product, add it to the cart, and validate that the cart reflects the correct item.
- **Checkout Process** - Proceed to checkout, enter shipping details, confirm order placement, and verify success message.

## Prerequisites

- **Node.js v20.18.3** (Ensure you have this version installed)

## Installation

1. Install dependencies:
```sh
npm install
```

## Running the Tests

### Run Tests in Cypress UI Mode

This will open the Cypress test runner:

```sh
npm run open
```

### Run All Tests in Headless Mode

To execute all tests without opening the UI:

```sh
npm run test
```

## Thanks!

Thank you, Jeff and Kristin, for the opportunity and, most of all, for the great energy!

---
