import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import GetTransactionsAndBalanceService from '../services/GetTransactionsAndBalanceService';

const transactionRouter = Router();
const transactionRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const getTransactionsAndBalanceService = new GetTransactionsAndBalanceService(
      transactionRepository,
    );

    const transactionsAndBalance = getTransactionsAndBalanceService.execute();

    return response.json(transactionsAndBalance);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;

    const createTransactionService = new CreateTransactionService(
      transactionRepository,
    );

    const transaction = createTransactionService.execute({
      title,
      value,
      type,
    });

    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
