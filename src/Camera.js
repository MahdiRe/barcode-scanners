import React, { useEffect, useRef } from 'react';

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = { video: { facingMode: "user" } };

      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => console.error("Error accessing camera:", error));
    }
  }, []);

  return <video ref={videoRef} autoPlay />;
};

export default Camera;
