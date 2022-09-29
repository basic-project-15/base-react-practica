import React, { useState } from 'react';

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

// Services
import { apiPostTask } from '../../../services/apis';
import { formValidTask } from '../../../core/validations';

const DialogTareaAdd = ({
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

  const resetForm = () => {
    resetAlert();
    setShowAlert();
    resetFormErrors();
    resetFormSuccess();
    setTitle('');
    setDescription('');
    setLoader(false);
  };

  const handleAccept = async () => {
    if (handleValidForm()) {
      setLoader(true);
      const params = {
        title,
        description,
      };
      const response = await apiPostTask(params);
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
    resetForm();
  };

  const handleDismiss = () => {
    onDismiss();
    resetForm();
  };

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Crear Tarea"
      onDismiss={handleDismiss}
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

export default DialogTareaAdd;
