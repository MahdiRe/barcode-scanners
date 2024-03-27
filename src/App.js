import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from 'react-router-dom';
import QuaggaScanner from './scan/QuaggaScanner';
import Zxing from './zebra-crossing/Zxing';
import ViewBarcode from './generate/ViewBarcode';
import ZxingRealtime from './zebra-crossing/ZxingRealtime';
import ZxingImgUpload from './zebra-crossing/ZxingImgUpload';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/quagga">Quagga JS</Link></li>
                        <li><Link to="/zebra">Zebra Crossing (Zxing)</Link></li>
                        <li><Link to="/zebra-realtime">Zebra Crossing (Zxing) - Real time</Link></li>
                        <li><Link to="/zebra-img">Zebra Crossing (Zxing) - Image upload</Link></li>
                        <li><Link to="/barcode"> + New Barcode</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/quagga" element={<QuaggaScanner />} />
                    <Route path="/zebra" element={<Zxing />} />
                    <Route path="/zebra-realtime" element={<ZxingRealtime />} />
                    <Route path="/zebra-img" element={<ZxingImgUpload />} />
                    <Route path="/barcode" element={<ViewBarcode />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
