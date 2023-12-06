// components/SouthernLightsCanvasLinear.js

import { useEffect, useRef } from 'react';

const SouthernLightsCanvasLinear = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawLights = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'blue');
      gradient.addColorStop(0.3, 'green');
      gradient.addColorStop(1, 'purple');
      gradient.addColorStop(1, 'white');
      gradient.addColorStop(1, 'red');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 0, canvas.width, canvas.height);
    };

    drawLights();
  }, []);

  return <canvas ref={canvasRef} width={400} height={100} />;
};

export default SouthernLightsCanvasLinear;
