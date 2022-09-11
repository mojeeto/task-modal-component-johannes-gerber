import React, {
  useRef,
  useEffect
} from 'react';
import { BsCheck } from 'react-icons/bs';

interface CircleProgressProps {
  initialProgress?: number;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ initialProgress = 40 }) => {
  const progressRef = useRef<SVGCircleElement>(null);
  const RADIUS_CIRCLES = 15;
  const STROKE_CIRCLES = 4;

  const calculateProgressOfCircle = (circumference: number, percent: number): number => circumference - (percent / 100) * circumference;

  useEffect(() => {
    if (progressRef.current) {
      const progressCircle = progressRef.current;
      const circumference = RADIUS_CIRCLES * 2 * Math.PI;
      progressCircle.style.strokeDasharray = String(circumference).toString();
      const dashoffset = calculateProgressOfCircle(circumference, initialProgress);
      progressCircle.style.strokeDashoffset = String(dashoffset).toString();
    }
  }, [initialProgress])

  return (
    <div>
      <svg className="w-[40px] h-[40px] ">
        <circle
          cx={"50%"}
          cy={"50%"}
          r={RADIUS_CIRCLES}
          strokeWidth={STROKE_CIRCLES}
          fill="transparent"
          stroke="currentColor"
          className="text-gray-300" />
        <circle
          cx="50%"
          cy="50%"
          r={RADIUS_CIRCLES}
          strokeWidth={STROKE_CIRCLES}
          fill="transparent"
          className="text-blue-600 -rotate-90 origin-center transition-[stroke-dashoffset] duration-500 ease-linear"
          stroke="currentColor"
          ref={progressRef}
          strokeDashoffset={0}
          strokeLinecap="round" />
        <BsCheck className={`text-xl transition-colors ${initialProgress === 100 ? "text-blue-600" : "text-gray-300"}`} x="25%" y="25%" />
      </svg>
    </div>
  );
}

export default CircleProgress;
