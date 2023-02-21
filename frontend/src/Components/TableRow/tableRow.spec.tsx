import { fireEvent, render, screen } from '@testing-library/react';
import TableRow from "./tableRow";
import { IProperty } from "../../utils/dataTypes";

const property:IProperty = {
    "id": 1265,
    "outcode": "E11",
    "incode": "1NS",
    "paon": "41",
    "saon": null,
    "street": "JAMES LANE",
    "lrTransactions": [
        {
            "id": 1265,
            "lr_property_id": 1265,
            "date": "1995-08-15",
            "price": 74500
        },
        {
            "id": 2299480,
            "lr_property_id": 1265,
            "date": "1997-10-07",
            "price": 89000
        },
        {
            "id": 8030639,
            "lr_property_id": 1265,
            "date": "2002-02-28",
            "price": 215000
        },
        {
            "id": 9705088,
            "lr_property_id": 1265,
            "date": "2003-02-13",
            "price": 249999
        }
    ]
}

describe('TableRow functionality', () => {
    it('renders TableRow with test data', () =>{
        render(<TableRow property={property}/>);
        const row = screen.getByTestId("table-row");
        const id = screen.getByTestId("table-row-id");
        const outcode = screen.getByTestId("table-row-outcode");
        const street = screen.getByTestId("table-row-street");
        const transactions = screen.getByTestId("table-row-transactions");

        expect(row).toBeInTheDocument();
        expect(id).toHaveTextContent('1265');
        expect(outcode).toHaveTextContent('E11');
        expect(street).toHaveTextContent('JAMES LANE');
        expect(transactions).toHaveTextContent('4');
    })

    
    it('renders displays transaction details when clicked', () =>{
        render(<TableRow property={property}/>);
        const row = screen.getByTestId("table-row");
        const transactionsColumn = screen.getByTestId("table-row-transactions");
        const transactionDetails = screen.getByTestId("transaction-details-table")

        expect(row).toBeInTheDocument();
        expect(transactionsColumn).toHaveTextContent('4');
        // NOTE: I think it would be better to test that the component returns the TransactionDetails component(toBeInTheDocument())
        // But the TableRows component instead toggles a classname within TransactionDetails because I intended
        // for the height in the styling to change and allow an animation that would slide the details down
        expect(transactionDetails).toHaveClass('transactionsTable');
        fireEvent.click(row)
        expect(transactionDetails).toHaveClass('transactionsTable--show');
    })
})