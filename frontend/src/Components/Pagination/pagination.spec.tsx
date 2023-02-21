import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from './pagination';
import testData from '../../utils/testData.json';
import { TPropertyList } from '../../utils/dataTypes';

const mockPropertyData:TPropertyList = testData


describe('Pagination functionality', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('renders Pagination with test data', () => {
        const mockSetPageArray = jest.fn()
        render(<Pagination propertyData={mockPropertyData} setPageArray={mockSetPageArray} />)

        const pageUI = screen.getByTestId("page-buttons")
        const pageNumberDropdown = screen.getByTestId("page-number")
        const pagePrevButton = screen.getByTestId("previous-page-button")
        const pageNextButton = screen.getByTestId("next-page-button")

        expect(pageUI).toBeInTheDocument();
        expect(pageNumberDropdown).toBeInTheDocument();
        expect(pageNumberDropdown).toHaveValue("1");
        expect(pagePrevButton).toBeDisabled();
        expect(pageNextButton).not.toBeDisabled();
    })

    it('updates when next button is clicked', () => {
        const mockSetPageArray = jest.fn()
        render(<Pagination propertyData={mockPropertyData} setPageArray={mockSetPageArray} />)

        const pageNumberDropdown = screen.getByTestId("page-number")
        const pagePrevButton = screen.getByTestId("previous-page-button")
        const pageNextButton = screen.getByTestId("next-page-button")

        expect(pageNumberDropdown).toHaveValue("1");
        expect(pagePrevButton).toBeDisabled();
        expect(pageNextButton).not.toBeDisabled();
        fireEvent.click(pageNextButton);
        expect(mockSetPageArray).toBeCalled();
        expect(pageNumberDropdown).toHaveValue("2");
        expect(pagePrevButton).not.toBeDisabled();
    })

    it('updates when previous button is clicked', () => {
        const mockSetPageArray = jest.fn()
        render(<Pagination propertyData={mockPropertyData} setPageArray={mockSetPageArray} />)

        const pageNumberDropdown = screen.getByTestId("page-number")
        const pagePrevButton = screen.getByTestId("previous-page-button")
        const pageNextButton = screen.getByTestId("next-page-button")

        fireEvent.click(pageNextButton);
        expect(pageNumberDropdown).toHaveValue("2");
        fireEvent.click(pagePrevButton);
        expect(pageNumberDropdown).toHaveValue("1");
        expect(pagePrevButton).toBeDisabled();
    })

    it('updates when dropdown is used', () => {
        const mockSetPageArray = jest.fn()
        render(<Pagination propertyData={mockPropertyData} setPageArray={mockSetPageArray} />)

        const pageNumberDropdown = screen.getByTestId("page-number")
        const pagePrevButton = screen.getByTestId("previous-page-button")

        expect(pageNumberDropdown).toHaveValue("1");
        expect(pagePrevButton).toBeDisabled();
        fireEvent.change(pageNumberDropdown, {
            target: { value: "3" },
          });
        expect(mockSetPageArray).toBeCalled();
        expect(pageNumberDropdown).toHaveValue("3");
        expect(pagePrevButton).not.toBeDisabled();
    })
})