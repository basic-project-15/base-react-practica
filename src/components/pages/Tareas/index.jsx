import React, { useState } from 'react';

// Components
import { ButtonCustom } from '../../atoms';
import { CardTarea } from '../../molecules';
import {
  DialogTareaAdd,
  DialogTareaDelete,
  DialogTareaEdit,
} from '../../organisms';

const Tareas = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [idTarea, setIdTarea] = useState('0');

  const handleAction = (type = '', id = '') => {
    setIdTarea(id);
    switch (type) {
      case 'edit':
        setShowEdit(true);
        break;
      case 'delete':
        setShowDelete(true);
        break;
      default:
        console.log('No hacer nada');
        break;
    }
  };
  return (
    <div>
      <h1>Tareas</h1>
      <div className="flex justify-end">
        <ButtonCustom
          text="Crear Tarea"
          className="my-3"
          onClick={() => setShowAdd(true)}
        />
      </div>
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
      <DialogTareaAdd open={showAdd} setOpen={setShowAdd} />
      <DialogTareaEdit
        idTarea={idTarea}
        open={showEdit}
        setOpen={setShowEdit}
        onDismiss={() => setIdTarea('0')}
      />
      <DialogTareaDelete
        idTarea={idTarea}
        open={showDelete}
        setOpen={setShowDelete}
      />
    </div>
  );
};

export default Tareas;
