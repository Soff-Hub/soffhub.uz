import { useState } from 'react';

const FullscreenImage = ({ src }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const showFullscreenImage = () => {
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const hideFullscreenImage = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className='text-center' style={{height: '100%'}}>
      <img src={src} onClick={showFullscreenImage}  className="about-imgs hover-up   wow animate__animated animate__fadeIn " />

      {isFullscreen && (
        <div className="fullscreen-overlay" onClick={hideFullscreenImage}>
          <span className="close-icon">&times;</span>
          <img className="fullscreen-image" src={src} />
        </div>
      )}

      <style jsx>{`
        .fullscreen-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999999;
          background-color: rgba(0, 0, 0, 0.9);
        }

        .close-icon {
          color: #fff;
          font-size: 30px;
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
        }

        .fullscreen-image {
          max-width: 100%;
        /* //   width: 600px; */
          max-height: 100%;
          display: block;
          margin: 0 auto;
          padding: 20px;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
};

export default FullscreenImage;
