import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FiCopy } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ModalOptions: React.FC = () => {
  return <div className="flex gap-5 text-xl text-slate-400">
    <IoIosArrowBack />
    <IoIosArrowForward />
    <FiCopy />
    <BsThreeDotsVertical />
  </div>
}

export default ModalOptions;
