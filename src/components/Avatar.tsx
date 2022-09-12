import React from "react";

interface AvatarProps {
  imageSrc: string;
  userNameForAlt: string;
  bgColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageSrc, userNameForAlt, bgColor = "#FCF0EC" }) => {
  return (
    <img
      src={imageSrc}
      alt={userNameForAlt}
      className="rounded-full black w-8 h-8 p-0.5"
      style={{ backgroundColor: bgColor }}
    />
  );
};

export default Avatar;
