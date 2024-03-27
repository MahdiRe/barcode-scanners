import React from 'react';
import Cam from './Cam';
import { BrowserMultiFormatReader } from '@zxing/library';

const Zxing = () => {

    const scanBarcode = async (imageSrc) => {
        const codeReader = new BrowserMultiFormatReader();
        try {
            const result = await codeReader.decodeFromImage(undefined, imageSrc);
            console.log(result.text);
            return result.text;
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    const handleCapture = async (imageSrc) => {
        const barcodeText = await scanBarcode(imageSrc);
        if (barcodeText) {
            // Handle successful barcode detection
            console.log(`Barcode detected: ${barcodeText}`);
        } else {
            // Handle barcode detection failure
            console.log('No barcode detected');
        }
    };

    return <Cam onCapture={handleCapture} />
}

export default Zxing;