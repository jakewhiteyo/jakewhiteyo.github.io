import { useEffect, useRef } from "react";
import xwing from "../assets/xwing.png";

const SIZE = 140;
const EDGES = ["top", "right", "bottom", "left"];

// A random point just outside the viewport on a random edge.
function randomEdgePoint() {
  const edge = EDGES[Math.floor(Math.random() * EDGES.length)];
  const w = window.innerWidth;
  const h = window.innerHeight;
  switch (edge) {
    case "top":
      return { x: Math.random() * w, y: -SIZE };
    case "bottom":
      return { x: Math.random() * w, y: h + SIZE };
    case "left":
      return { x: -SIZE, y: Math.random() * h };
    default:
      return { x: w + SIZE, y: Math.random() * h };
  }
}

// A random point in the middle 40% of the page, so every pass crosses the center area.
function randomCenterPoint() {
  return {
    x: window.innerWidth * (0.3 + Math.random() * 0.4),
    y: window.innerHeight * (0.3 + Math.random() * 0.4),
  };
}

// Extend the line from `from` through `via` until it leaves the viewport (plus margin).
function exitPoint(from, via) {
  const dx = via.x - from.x;
  const dy = via.y - from.y;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const candidates = [];
  if (dx > 0) candidates.push((w + SIZE - from.x) / dx);
  if (dx < 0) candidates.push((-SIZE - from.x) / dx);
  if (dy > 0) candidates.push((h + SIZE - from.y) / dy);
  if (dy < 0) candidates.push((-SIZE - from.y) / dy);
  const t = Math.min(...candidates);
  return { x: from.x + dx * t, y: from.y + dy * t };
}

export default function XWing() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof el.animate !== "function") return undefined;
    let timer;
    let animation;

    const fly = () => {
      const from = randomEdgePoint();
      const to = exitPoint(from, randomCenterPoint());
      // The artwork's nose points up, so rotate by heading + 90 to face the travel direction.
      const heading = (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;
      const rotate = heading + 90;
      const duration = 2000 + Math.random() * 2500;
      animation = el.animate(
        [
          { transform: `translate(${from.x - SIZE / 2}px, ${from.y - SIZE / 2}px) rotate(${rotate}deg)` },
          { transform: `translate(${to.x - SIZE / 2}px, ${to.y - SIZE / 2}px) rotate(${rotate}deg)` },
        ],
        { duration, easing: "linear", fill: "forwards" }
      );
      timer = setTimeout(fly, duration + 500 + Math.random() * 2000);
    };

    fly();
    return () => {
      clearTimeout(timer);
      if (animation) animation.cancel();
    };
  }, []);

  return (
    <img
      ref={ref}
      src={xwing}
      alt=""
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 select-none opacity-70"
      style={{ width: SIZE, transform: `translate(-${SIZE}px, -${SIZE}px)` }}
    />
  );
}
