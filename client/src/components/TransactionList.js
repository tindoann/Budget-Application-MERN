// import React, { useContext } from 'react';
// import { Transaction } from './Transaction';
// import { GlobalContext } from '../context/GlobalState';

// export const TransactionList = () => {
//   const { transactions } = useContext(GlobalContext);

//   return (
//     <>
//       <h3>History</h3>
//       <ul className="list">
//         {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
//       </ul>
//     </>
//   )
// }

import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </>
  )
}

