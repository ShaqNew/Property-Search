import React, { useState } from "react";
import TransactionDetails from "../TransactionDetails/transactionDetails";
import { IProperty } from "../../utils/dataTypes";
import "./tableRow.scss";

const TableRow = (props:{property:IProperty}) => {
  const { property } = props;
  const {id, outcode, street, lrTransactions} = property
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <>
        <div
        data-testid="table-row"
        className="tableRow"
        onClick={() => {
            setShowDetails(!showDetails);
        }}
        >{
            !showDetails?
            <i className="fa-solid fa-angle-down"></i>:
            <i className="fa-solid fa-minus"></i>
        }
            <div data-testid="table-row-id" className="tableRow__id rowInfo">{id}</div>
            <div data-testid="table-row-outcode" className="tableRow__outcode rowInfo">{outcode}</div>
            <div data-testid="table-row-street" className="tableRow__street rowInfo">{street}</div>
            <div data-testid="table-row-transactions" className="tableRow__transactions rowInfo">
                {property.lrTransactions.length}
            </div>
        </div>
        {/* NOTE: I think this could have been rewritten to either return the component or nothing 
            This would  have made it better for testing however I aimed to change the styling of this
            component to allow it to animate/grow uder it's repeective row*/}
        <TransactionDetails transactions={lrTransactions} display={showDetails} />
    </>
  );
};

export default TableRow;
