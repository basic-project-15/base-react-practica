import React, { useState } from 'react';

// Components
import { DialogActions, DialogContent } from '@mui/material';
import { DialogCustom } from '../../templates';
import { ButtonCustom, TextInputCustom } from '../../atoms';

const DialogTareaAdd = ({
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
      title="Crear Tarea"
      onDismiss={onDismiss}
    >
      <DialogContent style={{ width: 500 }}>
        <div className="flex flex-col relative">
          <TextInputCustom
            name="Título"
            value={title}
            setValue={setTitle}
            className="mt-2"
          />
          <TextInputCustom
            name="Descripción"
            value={description}
            setValue={setDescription}
            className="mt-2"
          />
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
