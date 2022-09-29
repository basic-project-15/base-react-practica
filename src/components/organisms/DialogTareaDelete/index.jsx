import React, { useState, useEffect } from 'react';

// Hooks
import { useForm } from '../../../hooks/others';

// Components
import { DialogActions, DialogContent } from '@mui/material';
import { DialogCustom } from '../../templates';
import { AlertCustom, ButtonCustom, Loader, TextCustom } from '../../atoms';

// Services
import { apiDeleteTask, apiGetTask } from '../../../services/apis';

const DialogTareaDelete = ({
  idTarea = '',
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
}) => {
  const [loader, setLoader] = useState(false);
  const [title, setTitle] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert, resetAlert] = useForm({
    title: '',
    description: '',
    severity: 'info',
  });

  useEffect(() => {
    if (open) {
      cargarTarea();
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const resetForm = () => {
    resetAlert();
    setShowAlert();
    setTitle('');
    setLoader(false);
  };

  const cargarTarea = async () => {
    setLoader(true);
    const params = { idTarea };
    const response = await apiGetTask(params);
    const { success, message, data } = response;
    if (success) {
      setTitle(data.task.title);
    } else {
      setShowAlert(true);
      setAlert({
        title: 'Error',
        description: message,
        severity: 'warning',
      });
    }
    setLoader(false);
  };

  const handleAccept = async () => {
    setLoader(true);
    const params = { idTarea };
    const response = await apiDeleteTask(params);
    const { success, message } = response;
    if (success) {
      setOpen(false);
      onDismiss();
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

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Eliminar Tarea"
      onDismiss={onDismiss}
    >
      <DialogContent style={{ width: 500 }}>
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />
        <div className="flex flex-col relative items-center mt-4">
          <TextCustom
            text="¿Esta seguro que desea eliminar la tarea?"
            className="fontPMedium"
          />
          <TextCustom text="No la podrá recuperar" className="fontPRegular" />
          <TextCustom text={title} className="fontPMedium" />
          {loader && <Loader mode="modal" />}
        </div>
      </DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          typeColor="secondary"
          onClick={handleCancel}
        />
        <ButtonCustom
          text="Eliminar"
          typeColor="primary"
          onClick={handleAccept}
        />
      </DialogActions>
    </DialogCustom>
  );
};

export default DialogTareaDelete;
