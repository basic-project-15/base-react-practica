import React from 'react';

// Components
import { Divider } from '@mui/material';
import { IconButtonCustom, TextCustom } from '../../atoms';

// Assets
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CardTarea = ({
  id = '',
  titulo = '',
  descripcion = '',
  onClick = () => null,
}) => {
  const handleEditar = () => {
    onClick('edit', id);
  };

  const handleEliminar = () => {
    onClick('delete', id);
  };
  return (
    <div className="bg-green-300 h-36 flex">
      <div className="w-full flex flex-col gap-2 p-3">
        <div>
          <TextCustom text={titulo} className="text-xl fontPBold" />
        </div>
        <Divider />
        <div>
          <TextCustom text={descripcion} className="text-base fontPRegular" />
        </div>
      </div>
      <div className="w-20 p-2 flex flex-col items-center justify-center">
        <IconButtonCustom icon={<EditIcon />} onClick={handleEditar} />
        <IconButtonCustom icon={<DeleteIcon />} onClick={handleEliminar} />
      </div>
    </div>
  );
};

export default CardTarea;
