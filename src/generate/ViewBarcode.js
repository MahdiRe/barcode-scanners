import React from 'react';
import JsBarcodeScanner from './JsBarcodeScanner';

const ViewBarcode = () => {
  return (
    <div>
      <h1>My Barcode</h1>
      <JsBarcodeScanner 
        value="123456789012" 
        options={{
          format: "EAN13",
          lineColor: "#000",
          width: 2,
          height: 40,
          displayValue: true
        }}
      />
    </div>
  );
};

export default ViewBarcode;
