import React, { useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

const JsBarcodeScanner = ({ value, options }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, value, options);
    }
  }, [value, options]); // Re-run when value or options change

  return <svg ref={barcodeRef}></svg>;
};

export default JsBarcodeScanner;