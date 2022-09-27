import React from 'react';

// Components
import { DialogActions, DialogContent } from '@mui/material';
import { DialogCustom } from '../../templates';
import { ButtonCustom, TextCustom } from '../../atoms';

const DialogTareaEdit = ({
  idTarea = '',
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
}) => {
  const handleAccept = () => {
    setOpen(false);
    onDismiss();
  };

  const handleCancel = () => {
    setOpen(false);
    onDismiss();
  };

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Editar Tarea"
      onDismiss={onDismiss}
    >
      <DialogContent style={{ width: 500 }}>
        <div className="flex flex-col relative">
          <TextCustom text="Ingrese sus datos" variant="h5" />
          {idTarea}
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
