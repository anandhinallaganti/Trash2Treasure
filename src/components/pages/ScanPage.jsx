import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, RefreshCw, CheckCircle, Clock, Coins, Crosshair } from 'lucide-react';
import '../../styles/ScanPage.css';

const ScanPage = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!userLocation) {
      setTimeout(getLocation, 500);
    }
  }, [userLocation]);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation not supported');
      return;
    }

    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: new Date().toISOString()
        });
        setLocationLoading(false);
      },
      (error) => {
        console.error('Location error:', error);
        setLocationLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      }
    );
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      setCameraStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsScanning(true);
    } catch (error) {
      console.error('Camera error:', error);
      alert('Unable to access camera. Please check permissions.');
    }
  };

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    if (ctx) {
      ctx.drawImage(video, 0, 0);
      const imageData = canvas.toDataURL('image/jpeg', 0.8);
      setCapturedImage(imageData);
      setIsScanning(false);
      
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        setCameraStream(null);
      }

      // Auto-process after 2 seconds
      setTimeout(() => {
        processImage(imageData);
      }, 2000);
    }
  };

  const processImage = async (imageData) => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setScanResult({
        itemType: 'Plastic Bottle',
        category: 'Recyclable',
        points: 25,
        impact: '0.5 kg CO2 saved',
        timestamp: new Date()
      });
      setIsProcessing(false);
    }, 3000);
  };

  const resetScan = () => {
    setCapturedImage(null);
    setScanResult(null);
    setIsScanning(false);
    setIsProcessing(false);
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
  };

  const retakeImage = () => {
    setCapturedImage(null);
    setScanResult(null);
    setIsProcessing(false);
  };

  const formatTimestamp = (date) => {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="page">
      <section className="scan-section">
        <div className="container">
          <div className="section-header">
            <h2>Scan & Earn Rewards</h2>
            <p>Point your camera at a waste item to scan and earn points</p>
          </div>
          <div className="scan-container">
            {/* Location Status */}
            <div className="location-status">
              <div className="location-info">
                <MapPin size={16} />
                <span>
                  {userLocation 
                    ? `${userLocation.latitude.toFixed(4)}, ${userLocation.longitude.toFixed(4)}`
                    : 'Location not detected'
                  }
                </span>
              </div>
              <button 
                className="btn-location" 
                onClick={getLocation}
                disabled={locationLoading}
              >
                <Crosshair size={16} />
                <span>{locationLoading ? 'Getting Location...' : 'Get Location'}</span>
              </button>
            </div>

            {!scanResult && (
              <div className="scan-interface">
                <div className="scan-area">
                  {!isScanning && !capturedImage && !isProcessing && (
                    <div className="scan-placeholder">
                      <Camera size={40} className="scan-icon" />
                      <p className="scan-text">Point camera at waste item</p>
                    </div>
                  )}
                  
                  {isProcessing && (
                    <div className="scan-loading">
                      <div className="loading-spinner"></div>
                    </div>
                  )}
                  
                  {isScanning && (
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="camera-preview"
                    />
                  )}
                  
                  {capturedImage && !isProcessing && (
                    <div className="captured-image">
                      <img src={capturedImage} alt="Captured waste item" />
                      <div className="image-timestamp">
                        {formatTimestamp(new Date())}
                      </div>
                      <div className="image-location">
                        {userLocation 
                          ? `${userLocation.latitude.toFixed(4)}, ${userLocation.longitude.toFixed(4)}`
                          : 'Location not available'
                        }
                      </div>
                    </div>
                  )}
                  
                  <canvas ref={canvasRef} style={{ display: 'none' }} />
                </div>
                
                <div className="scan-controls">
                  {!isScanning && !capturedImage && !isProcessing && (
                    <button className="btn-scan" onClick={startCamera}>
                      Start Camera
                      <Camera size={20} />
                    </button>
                  )}
                  
                  {isScanning && (
                    <button className="btn-capture" onClick={captureImage}>
                      <Camera size={20} />
                      Capture
                    </button>
                  )}
                  
                  {capturedImage && !isProcessing && (
                    <button className="btn-retake" onClick={retakeImage}>
                      <RefreshCw size={20} />
                      Retake
                    </button>
                  )}
                </div>
              </div>
            )}

            {scanResult && (
              <div className="scan-result">
                <div className="result-success">
                  <CheckCircle size={48} />
                  <h3>Item Scanned Successfully!</h3>
                </div>
                <div className="result-details">
                  <div className="result-item">
                    <h4>Item Details</h4>
                    <p className="item-type">{scanResult.itemType}</p>
                    <p className="item-category">{scanResult.category}</p>
                  </div>
                  <div className="result-impact">
                    <h4>Environmental Impact</h4>
                    <p className="impact-text">{scanResult.impact}</p>
                  </div>
                </div>
                <div className="scan-metadata">
                  <div className="metadata-item">
                    <Clock size={16} />
                    <span>{formatTimestamp(scanResult.timestamp)}</span>
                  </div>
                  <div className="metadata-item">
                    <MapPin size={16} />
                    <span>
                      {userLocation 
                        ? `${userLocation.latitude.toFixed(4)}, ${userLocation.longitude.toFixed(4)}`
                        : 'Location not available'
                      }
                    </span>
                  </div>
                </div>
                <div className="points-earned">
                  <Coins size={24} />
                  <div>
                    <p>Points Earned</p>
                    <p className="points-value">+{scanResult.points}</p>
                  </div>
                </div>
                <div className="result-actions">
                  <button className="btn-secondary" onClick={resetScan}>Scan Another</button>
                  <Link to="/dashboard" className="btn-primary">View Wallet</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScanPage;