import React, { useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

const ZxingImgUpload = () => {
  const [decodedText, setDecodedText] = useState('');

  const handleDecodeBarcode = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const src = e.target.result;
          const codeReader = new BrowserMultiFormatReader();
          const image = new Image();
          image.src = src;
          image.onload = async () => {
            const result = await codeReader.decodeFromImageElement(image);
            setDecodedText(result.text);
          };
          image.onerror = (error) => {
            console.error("Image load error: ", error);
          };
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error('Error decoding barcode: ', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleDecodeBarcode} accept="image/*" />
      {decodedText && <p>Decoded Text: {decodedText}</p>}
    </div>
  );
};

export default ZxingImgUpload;
