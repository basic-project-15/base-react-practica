import React, { useState } from 'react';
import { CardTarea } from '../../molecules';
import { DialogTareaEdit } from '../../organisms';

const Tareas = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [idTarea, setIdTarea] = useState('0');

  const handleAction = (type = '', id = '') => {
    setIdTarea(id);
    switch (type) {
      case 'edit':
        console.log('Abrir la ventana modal de editar');
        setShowEdit(true);
        break;
      case 'delete':
        console.log('Abrir la ventana modal de eliminar');
        break;
      default:
        console.log('No hacer nada');
        break;
    }
  };
  return (
    <div>
      <h1>Tareas</h1>
      <span>{idTarea}</span>
      <div className="flex flex-col gap-2">
        <CardTarea
          id={'1'}
          titulo="Preparar el desayuno"
          descripcion="Hacer panqueques con miel."
          onClick={handleAction}
        />
        <CardTarea
          id={'2'}
          titulo="Preparar el almuerzo"
          descripcion="Hacer arroz con pollo."
          onClick={handleAction}
        />
      </div>
      <DialogTareaEdit
        idTarea={idTarea}
        open={showEdit}
        setOpen={setShowEdit}
        onDismiss={() => setIdTarea('0')}
      />
    </div>
  );
};

export default Tareas;
