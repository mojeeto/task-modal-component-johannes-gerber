import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FiCopy } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ModalOptions: React.FC = () => {
  const animation = "animate-fadeUp";
  return <div className="flex gap-5 text-xl text-slate-400 ">
    <IoIosArrowBack className={animation} style={{ animationDelay: "0.1s" }} />
    <IoIosArrowForward className={animation} style={{ animationDelay: "0.2s" }} />
    <FiCopy className={animation} style={{ animationDelay: "0.3s" }} />
    <BsThreeDotsVertical className={animation} style={{ animationDelay: "0.4s" }} />
  </div>
}

export default ModalOptions;
