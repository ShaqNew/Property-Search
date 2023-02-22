import './transactionDetails.scss';
import Table from 'react-bootstrap/Table';
import { TTransactionList } from '../../utils/dataTypes';

const  TransactionDetails = (props:{transactions:TTransactionList}) => {
    const { transactions } = props

    return  (
        <Table data-testid="transaction-details-table" className={`transactionsTable`}>
            <thead className='transactionsTable__head'>
                <tr>
                    <td data-testid="transaction-head-id">
                        ID
                    </td>
                    <td data-testid="transaction-head-date">
                        Date
                    </td>
                    <td data-testid="transaction-head-price">
                        Price
                    </td>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => {
                    return (
                        <tr data-testid="transaction-details-row" key={transaction.id}>
                            <td data-testid="transaction-details-id">
                                {transaction.id}
                            </td>
                            <td data-testid="transaction-details-date">
                                {transaction.date}
                            </td>
                            <td data-testid="transaction-details-price">
                                {transaction.price}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default TransactionDetails;