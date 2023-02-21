import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import UserSearch from './userSearchjs';
import testData from '../../utils/testData.json'

describe('UserSearch functionality', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({success:true, lrProperty:testData})
        })) as jest.Mock;
    });

    it('renders UserSearch', () => {
        const mockSetPropertyData = jest.fn();
        render(<UserSearch setPropertyData={mockSetPropertyData} />)

        const container = screen.getByTestId("input-container");
        const searchInput = screen.getByTestId("search-text-input");
        const selectInput = screen.getByTestId("search-type-input");

        expect(container).toBeInTheDocument();
        expect(searchInput).toBeInTheDocument();
        expect(selectInput).toBeInTheDocument();
    })

    it('should fetch data when enter is pressed', async () => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({success:true, lrProperty:testData})
        })) as jest.Mock;
        const mockSetPropertyData = jest.fn();
        render(<UserSearch setPropertyData={mockSetPropertyData} />)

        const searchInput = screen.getByTestId("search-text-input");
        fireEvent.change(searchInput, { target: { value: 'E11' } });
        fireEvent.keyDown(searchInput, { key: "Enter", code: 13, charCode: 13 });
        
        expect(searchInput).toHaveValue("E11")
        await waitFor(()=> expect(mockSetPropertyData).toHaveBeenCalled());
    })
})