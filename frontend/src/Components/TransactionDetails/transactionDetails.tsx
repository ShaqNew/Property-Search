import { useEffect, useState } from 'react';
import './transactionDetails.scss';
import Table from 'react-bootstrap/Table';
import { TTransactionList } from '../../utils/dataTypes';

const  TransactionDetails = (props:{transactions:TTransactionList, display:boolean}) => {
    const { transactions, display } = props
    const [show, setShow] =  useState("")
    useEffect(()=>{
        display ?
        setShow("--show"):
        setShow("")
    },[display])

    return  (
        <Table data-testid="transaction-details-table" className={`transactionsTable${show}`}>
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