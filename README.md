# Customer Rewards Program App

This React application simulates a customer rewards program for a retailer. Customers earn points based on the amount spent per transaction. The app provides an interface to view individual customer reward summaries, filter by month and year, and inspect transaction-level reward points.

## Features

**Rewards Logic**

  * 2 points for every dollar over **\$100**
  * 1 point for every dollar between **\$50 and \$100**

**Customer Filtering**

  * Displays a list of all customers on the left
  * Allows selecting customer, month, and year

**Reward Summary**

  * Monthly and total reward points shown side by side

**Recent 3 Months View**

  * Shows transactions in the last 3 months by default

**Paginated Transaction Table**

  * Handles large data with clean pagination

**Unit Tests**

  * Positive and negative cases for reward calculation (with decimals)

**Styled Components**

  * UI styled with `styled-components` for modular and reusable styles

---

## Rewards Calculation Example

For a transaction amount of **\$120**:

* Over \$100: `(120 - 100) * 2 = 40` points
* Between \$50 and \$100: `(100 - 50) * 1 = 50` points
* **Total = 90 points**

---

## Tests

Unit tests are located under `__tests__` .

### Positive Cases

* Amounts over 100
* Amounts between 50–100
* Exact boundary amounts

### Negative Cases

* Amounts under 50
* Invalid/missing data

 ### Run tests using:

```bash
npm test
# or if using vitest
npx vitest run
```

---

## Technologies Used

* **React 18+**
* **Vite** for fast build/dev
* **Styled Components**
* **PropTypes** for runtime type-checking
* **Jest/Vitest** for testing

---

## Running the App

### 1. Clone the Repo

```bash
git clone https://github.com/Bharti-Mehrotra/customer-reward-app.git
            
cd customer-reward-app
```

### 2. Install Dependencies

```bash
npm install
npm install -g json-server
```

### 3. Start the App

## Start Mock API Server

```bash
json-server --watch src/data/mockTransactions.json --port 3001
```

## Start React App

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

---

## Screenshots

### Landing Page 
![alt text](<Landing Page.png>)

### Customer Selection  with default month as "recent 3 months" and year "2025"
![alt text](<Reward Summary for Default Date.png>)

### Customer Selection  with any month and year selected
![alt text](<Reward Summary for Selected Date.png>)

### Test Success
![alt text](<Test case.png>)

---

## Notes

* All data is dynamic, fetched asynchronously from mocked JSON(using json-server)
* Error states are simulated with random chance
* Custom pagination logic is implemented without libraries

---


