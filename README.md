#DEPLOYMENT LINK:
https://budget-calculator-by-rish.netlify.app

# Budget Calculator

A simple budget management application that helps you track your income and expenses. You can add transactions (both income and expenses), view the transaction history, and delete specific transactions. The app also provides a visual summary of your finances using **Chart.js** and displays the total amount left after deducting your expenses from your income.

## Features

- **Add Transactions:**  
  Add new income or expense transactions with a description and amount.

- **Transaction History:**  
  View all your past transactions in a list, with the ability to delete any specific transaction.

- **Delete Transactions:**  
  Remove any transaction from the history, and the financial summary will update accordingly.

- **Financial Summary:**  
  The app calculates and displays the total income, total expenses, and the remaining balance (income - expenses).

- **Chart Visualization:**  
  A financial summary is presented through a pie chart, showing the distribution of income and expenses using **Chart.js**.

## Table of Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Features Overview](#features-overview)
  - [Add Transaction](#add-transaction)
  - [Delete Transaction](#delete-transaction)
  - [View Financial Summary](#view-financial-summary)
- [Chart.js Integration](#chartjs-integration)
- [Contributing](#contributing)


## Demo

You can check out the live version of the app [here](#).  
*(Provide link to live demo if available)*

## Technologies

- **JavaScript (ES6)**  
- **Chart.js**  
- **TAILWINDCSS**  
- **LocalStorage** (for persisting data across sessions)

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/budget-calculator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd budget-calculator
   ```

3. Open `index.html` in your browser.

## Usage

1. **Add Transaction**  
   Enter the description and the amount for your transaction. Use a positive value for income and a negative value for expenses. Click **Add Transaction** to record it.

2. **View Transaction History**  
   Your transaction history is listed below the input fields. It shows all your transactions with details such as the description, amount, and an option to delete.

3. **Delete Transaction**  
   To delete a transaction, click the "X" button next to it in the transaction history list. The transaction will be removed, and the financial summary will update accordingly.

4. **Financial Summary**  
   At the top of the page, you will see your total income, total expenses, and the remaining balance (income - expenses). The chart below visualizes the distribution of income and expenses.

## Features Overview

### Add Transaction

The **Add Transaction** form allows you to input:
- **Description**: What the transaction is for.
- **Amount**: Positive for income, negative for expense.

### Delete Transaction

You can delete a transaction from the history by clicking the "X" button. Once deleted, the summary and chart will update automatically.

### View Financial Summary

At the top of the page, you will see:
- **Total Income**: Sum of all positive transactions.
- **Total Expenses**: Sum of all negative transactions.
- **Balance**: The difference between your total income and total expenses.

## Chart.js Integration

The financial summary is visually represented using a **pie chart** powered by **Chart.js**. The chart dynamically updates whenever you add or delete a transaction, showing the proportion of income and expenses.

- The chart has two segments:
  - **Income** (shown in one color)
  - **Expenses** (shown in another color)

The chart gives you a clear view of how your money is distributed between income and expenses.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.




