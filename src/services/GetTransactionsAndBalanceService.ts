import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionsAndBalanceDTO {
  transactions: Transaction[];
  balance: Balance;
}

class GetTansactionsAndBalanceService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): TransactionsAndBalanceDTO {
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();
    const transactionAnBalanceDTO = {
      transactions,
      balance,
    };

    return transactionAnBalanceDTO;
  }
}

export default GetTansactionsAndBalanceService;
