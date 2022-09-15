import React from "react";

interface AvatarProps {
  imageSrc: string;
  userNameForAlt: string;
  bgColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  imageSrc,
  userNameForAlt,
  bgColor = "#FCF0EC",
}) => {
  return imageSrc !== "no-image" ? (
    <img
      src={imageSrc}
      alt={userNameForAlt}
      className="rounded-full black w-8 h-8 p-0.5"
      style={{ backgroundColor: bgColor }}
    />
  ) : (
    <div className="flex items-center flex-col justify-center bg-gray-200 rounded-full w-8 h-8 p-0.5 text-sm">GS</div>
  );
};

export default Avatar;
