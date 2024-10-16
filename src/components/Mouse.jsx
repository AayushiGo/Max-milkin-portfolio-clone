import React, { useRef, useEffect, useState } from "react";

const MouseEffect = () => {
  const canvasRef = useRef(null);
  const [pointer, setPointer] = useState({
    x: 0.5 * window.innerWidth,
    y: 0.5 * window.innerHeight,
  });
  const params = {
    pointsNumber: 10,
    widthFactor: 0.3,
    spring: 0.5,
    friction: 0.4,
  };

  const trailRef = useRef(
    new Array(params.pointsNumber).fill().map(() => ({
      x: pointer.x,
      y: pointer.y,
      dx: 0,
      dy: 0,
    }))
  );

  const trail = trailRef.current;

  useEffect(() => {
    if (window.innerWidth > 1100) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      let animationFrameId;
      let prevTime = 0; // Состояние времени

      const handleMouseMove = (e) => {
        updateMousePosition(e.clientX, e.clientY);
      };

      const updateMousePosition = (x, y) => {
        setPointer({ x, y });
      };

      const setupCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        updateCanvas();
      };

      const updateCanvas = (time) => {
        const deltaTime = time - prevTime; // Разница во времени между кадрами
        prevTime = time;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        trail.forEach((p, pIdx) => {
          const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
          const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
          p.dx += (prev.x - p.x) * spring;
          p.dy += (prev.y - p.y) * spring;
          p.dx *= params.friction;
          p.dy *= params.friction;
          p.x += p.dx;
          p.y += p.dy;
        });

        ctx.lineCap = "round";
        ctx.strokeStyle = "#1a202310";
        ctx.lineWidth = 1; // Ширина линии
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);

        for (let i = 1; i < trail.length - 1; i++) {
          const xc = 0.5 * (trail[i].x + trail[i + 1].x);
          const yc = 0.5 * (trail[i].y + trail[i + 1].y);
          ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
          ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
          ctx.stroke();
        }

        ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
        ctx.stroke();

        animationFrameId = requestAnimationFrame(updateCanvas);
      };

      setupCanvas();
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.cancelAnimationFrame(animationFrameId); // Отменяем запрос анимации при размонтировании компонента
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [pointer]);

  return <canvas className="  mouse" ref={canvasRef} />;
};

export default MouseEffect;
