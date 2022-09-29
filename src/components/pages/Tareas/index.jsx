import React, { useEffect, useState } from 'react';

// Hooks
import { useForm } from '../../../hooks/others';

// Components
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../../atoms';
import { CardTarea } from '../../molecules';
import {
  DialogTareaAdd,
  DialogTareaDelete,
  DialogTareaEdit,
} from '../../organisms';

// Const
import { apiGetTasks } from '../../../services/apis';

const Tareas = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [idTarea, setIdTarea] = useState('');
  const [tareas, setTareas] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert, resetAlert] = useForm({
    title: '',
    description: '',
    severity: 'info',
  });

  useEffect(() => {
    cargarTareas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cargarTareas = async () => {
    resetAlert();
    setLoader(true);
    const response = await apiGetTasks();
    const { success, message, data } = response;
    if (success) {
      setTareas(data.tasks);
    } else {
      setShowAlert(true);
      setAlert({
        title: 'Error',
        description: message,
        severity: 'error',
      });
    }
    setLoader(false);
  };

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
      <TextCustom text="Aplicación de tareas" className="text-3xl fontPBold" />
      <div className="flex justify-end">
        <ButtonCustom
          text="Crear Tarea"
          className="my-3"
          onClick={() => setShowAdd(true)}
        />
      </div>
      <AlertCustom
        title={alert.title}
        description={alert.description}
        open={showAlert}
        setOpen={setShowAlert}
        severity={alert.severity}
      />
      <div className="flex flex-col gap-2 relative">
        {tareas.map(tarea => (
          <CardTarea
            key={tarea.id}
            id={tarea.id}
            titulo={tarea.title}
            descripcion={tarea.description}
            onClick={handleAction}
          />
        ))}
        {loader && <Loader mode="modal" />}
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
