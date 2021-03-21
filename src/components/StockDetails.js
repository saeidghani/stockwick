import React from 'react';
// import PropTypes from 'prop-types';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const callback = (key) => {
  console.log(key);
};

function StockDetails() {
  // eslint-disable-next-line react/prop-types
  const DetailsColumn = ({ detailsList }) => (
    <div className="flex flex-col space-y-3 w-full">
      {/* eslint-disable-next-line react/prop-types */}
      {detailsList.map((i) => (
        <div key={i} className="flex justify-between">
          <div className="text-base">Last</div>
          <div className="text-base">136.76</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full c-white-collapse">
      <Collapse defaultActiveKey={['1']} onChange={callback} expandIconPosition="right">
        <Panel header={<span className="boldPrimaryText text-xl">Stock Details</span>} key="1">
          <div className="flex space-x-10 w-full">
            <DetailsColumn detailsList={[1, 2, 3, 4, 5]} />
            <DetailsColumn detailsList={[1, 2, 3, 4, 5]} />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}

StockDetails.propTypes = {
  //
};

export default StockDetails;
