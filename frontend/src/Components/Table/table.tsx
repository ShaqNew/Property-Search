import { useState } from "react";
import TableRow from "../TableRow/tableRow";
import Pagination from "../Pagination/pagination";
import { TPropertyList } from "../../utils/dataTypes";
import "./table.scss";

const Table = (props:{propertyData:TPropertyList}) => {
  const { propertyData } = props;
  const [pageArray, setPageArray] = useState<TPropertyList>(propertyData.slice(0,10))

  return (
    <>
      <Pagination propertyData={propertyData} setPageArray={setPageArray}/>
      <div className="propertyTable" data-testid="property-table">
        <div className="propertyTable__head">
          <div className="propertyTable__head_id tableHeading">ID</div>
          <div className="propertyTable__head_outcode tableHeading">
            Outcode
          </div>
          <div className="propertyTable__head_street tableHeading">Street</div>
          <div className="propertyTable__head_transactions tableHeading">
            Transactions
          </div>
        </div>
        {pageArray.map((property) => {
          return (
            <div
              key={property.id}
              className="propertyTable__row"
              data-testid="property-table-row"
            >
              <TableRow property={property} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Table;
