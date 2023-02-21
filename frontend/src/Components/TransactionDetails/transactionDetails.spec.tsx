import { render, screen } from '@testing-library/react';
import TransactionDetails from './transactionDetails';
import { TTransactionList } from '../../utils/dataTypes';

const mockTransactions:TTransactionList  = [
    {
        "id": 2365,
        "lr_property_id": 2365,
        "date": "1995-05-30",
        "price": 111000
    },
    {
        "id": 5955932,
        "lr_property_id": 2365,
        "date": "2000-10-04",
        "price": 142000
    },
    {
        "id": 11829881,
        "lr_property_id": 2365,
        "date": "2005-02-17",
        "price": 200000
    }
]

describe('TransactionDetails', () =>  {
    it('renders TransactionDetails with test data', () => {
        render(<TransactionDetails transactions={mockTransactions} display={true} />)

        const transactionDetailsTable = screen.getByTestId("transaction-details-table")
        const transactionDetailsRow = screen.getAllByTestId("transaction-details-row")
        const firstId = screen.getAllByTestId("transaction-details-id")[0]
        const firstDate = screen.getAllByTestId("transaction-details-date")[0]
        const firstPrice = screen.getAllByTestId("transaction-details-price")[0]

        expect(transactionDetailsTable).toBeInTheDocument()
        expect(transactionDetailsTable).toHaveClass('transactionsTable--show');
        expect(transactionDetailsRow).toHaveLength(3)
        expect(firstId).toBeInTheDocument()
        expect(firstDate).toBeInTheDocument()
        expect(firstPrice).toBeInTheDocument()
    })
    // NOTE: This has also been tested in tableRow.spec but I think this is a more
    // direct test of the classname updating
    // The test in tableRow.spec is more of an intergration test than this is
    it('should have 0 height when not shown', () => {
        render(<TransactionDetails transactions={mockTransactions} display={false} />)

        const transactionDetailsTable = screen.getByTestId("transaction-details-table")

        expect(transactionDetailsTable).toBeInTheDocument()
        expect(transactionDetailsTable).not.toHaveClass('transactionsTable--show');
    })


})