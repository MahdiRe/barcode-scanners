import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { BrowserMultiFormatReader } from '@zxing/library';

const ZxingRealtime = () => {
  const webcamRef = useRef(null);
  const codeReader = new BrowserMultiFormatReader();

  const scanBarcode = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    try {
      const result = await codeReader.decodeFromImage(undefined, imageSrc);
      console.log(result.text);
      // Handle barcode detection success
    } catch (error) {
      // Handle barcode detection failure
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scanBarcode();
    }, 1000); // Scan every 1000 milliseconds (1 second)

    return () => clearInterval(interval);
  }, []);

  return <Webcam audio={false} ref={webcamRef} />;
};

export default ZxingRealtime;
