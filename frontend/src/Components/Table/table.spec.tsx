import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Table from './table';
import testData from '../../utils/testData.json'
import { TPropertyList } from '../../utils/dataTypes';

const data:TPropertyList = testData

describe('Table functionality', () => {
    it('renders Table with test data', () => {
        render(<Table propertyData={data}/>);
        const pageButtons = screen.getByTestId("page-buttons");
        const table = screen.getByTestId("property-table");
        expect(pageButtons).toBeInTheDocument();
        expect(table).toBeInTheDocument();
    })

    it('displays the correct data', () => {
        render(<Table propertyData={data}/>);
        const firstProperty = screen.getAllByTestId("property-table-row")[0];
        expect(firstProperty).toHaveTextContent("671");
        expect(firstProperty).toHaveTextContent("E1");
        expect(firstProperty).toHaveTextContent("ADELINA GROVE");
    })
})

// NOTE: This is more of an intergreation test
describe('Pagination intergration', () => {
    it('changes the pages and data accordingly',() => {
        render(<Table propertyData={data}/>);
        const pageIndicator = screen.getByTestId("page-number");
        const nextButton = screen.getByTestId("next-page-button");
        const firstProperty = screen.getAllByTestId("property-table-row")[0];
        expect(pageIndicator).toHaveDisplayValue("1");
        expect(firstProperty).toBeInTheDocument();
        fireEvent.click(nextButton);
        expect(pageIndicator).toHaveDisplayValue("2");
        expect(firstProperty).not.toBeInTheDocument();
    })

})

