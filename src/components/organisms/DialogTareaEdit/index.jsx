import React, { useEffect, useState } from 'react';

// Hooks
import { useForm } from '../../../hooks/others';

// Components
import { DialogActions, DialogContent } from '@mui/material';
import { DialogCustom } from '../../templates';
import {
  AlertCustom,
  ButtonCustom,
  Loader,
  TextInputCustom,
} from '../../atoms';

// Core
import { formValidTask } from '../../../core/validations';

// Services
import { apiGetTask, apiPatchTask } from '../../../services/apis';

const DialogTareaEdit = ({
  idTarea = '',
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loader, setLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert, resetAlert] = useForm({
    title: '',
    description: '',
    severity: 'info',
  });
  const [formErrors, setFormErrors, resetFormErrors] = useForm({
    title: '',
    description: '',
  });
  const [formSuccess, setFormSuccess, resetFormSuccess] = useForm({
    title: false,
    description: false,
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
    setDescription('');
    setLoader(false);
    resetFormErrors();
    resetFormSuccess();
  };

  const cargarTarea = async () => {
    setLoader(true);
    const params = { idTarea };
    const response = await apiGetTask(params);
    const { success, message, data } = response;
    if (success) {
      setTitle(data.task.title);
      setDescription(data.task.description);
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
    if (handleValidForm()) {
      setLoader(true);
      const params = {
        idTarea,
        title,
        description,
      };
      const response = await apiPatchTask(params);
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
    }
  };

  const handleValidForm = () => {
    const params = {
      title,
      description,
    };
    const response = formValidTask(params);
    setFormErrors(response.msgValid.errors);
    setFormSuccess(response.msgValid.success);
    return response.isValid;
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Editar Tarea"
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
        <div className="flex flex-col relative">
          <TextInputCustom
            name="Título"
            value={title}
            setValue={setTitle}
            className="mt-2"
            msgError={formErrors.title}
            success={formSuccess.title}
          />
          <TextInputCustom
            name="Descripción"
            value={description}
            setValue={setDescription}
            className="mt-2"
            msgError={formErrors.description}
            success={formSuccess.description}
          />
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
          text="Guardar"
          typeColor="primary"
          onClick={handleAccept}
        />
      </DialogActions>
    </DialogCustom>
  );
};

export default DialogTareaEdit;
