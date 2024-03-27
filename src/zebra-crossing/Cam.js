import React from 'react';
import Webcam from 'react-webcam';

const Cam = ({ onCapture }) => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        onCapture(imageSrc);
    }, [webcamRef, onCapture]);


    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{ width: 750 }}
            />
            <button onClick={capture}>Capture</button>
        </>
    );
};

export default Cam;