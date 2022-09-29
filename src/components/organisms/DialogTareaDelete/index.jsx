import React from 'react';

// Components
import { DialogActions, DialogContent } from '@mui/material';
import { DialogCustom } from '../../templates';
import { ButtonCustom, TextCustom } from '../../atoms';

const DialogTareaDelete = ({
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
      title="Eliminar Tarea"
      onDismiss={onDismiss}
    >
      <DialogContent style={{ width: 500 }}>
        <div className="flex flex-col relative items-center mt-4">
          <TextCustom
            text="¿Esta seguro que desea eliminar la tarea?"
            className="fontPMedium"
          />
          <TextCustom text="No la podrá recuperar" className="fontPRegular" />
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
