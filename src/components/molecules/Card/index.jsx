import React from 'react';

// Components
import { Divider } from '@mui/material';
import { TextCustom } from '../../atoms';

const Card = ({ titulo = '', descripcion = '', imagen = null, precio = 0 }) => {
  return (
    <div className="rounded-lg border-2 border-gray-400">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-40 hover:cursor-pointer"
      />
      <div className="flex flex-col justify-between">
        <div className="p-2">
          <TextCustom text={titulo} className="text-xl fontPBold" />
          <Divider />
          <TextCustom text={descripcion} className="text-base fontPRegular" />
        </div>
        <div>
          <Divider />
          <div className="p-3 flex justify-between">
            <TextCustom text="Por tan solo" className="text-base" />
            <TextCustom
              text={precio}
              className="text-lg fontPMedium text-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
