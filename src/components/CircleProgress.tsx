import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import { BsCheck } from 'react-icons/bs';

interface CircleProgress {
  children: React.ReactNode;
}

const CircleProgress: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const progressRef = useRef<SVGCircleElement>(null);
  const RADIUS_CIRCLES = 15;
  const STROKE_CIRCLES = 4;

  const calculateProgressOfCircle = (circumference: number, percent: number) => {
    const result = circumference - (-percent / 100) * circumference;
    setProgress(result);
  }

  useEffect(() => {
    if (progressRef.current) {
      const progressCircle = progressRef.current;
      const circumference = RADIUS_CIRCLES * 2 * Math.PI;
      progressCircle.style.strokeDasharray = String(circumference).toString();
      calculateProgressOfCircle(circumference, 40);
    }
  }, [progress])

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
          className="text-blue-600 -rotate-90 origin-center"
          stroke="currentColor"
          ref={progressRef}
          strokeDashoffset={progress}
          strokeLinecap="round" />
        <BsCheck className="text-xl text-gray-300" x="25%" y="25%" />
      </svg>
    </div>
  );
}

export default CircleProgress;
