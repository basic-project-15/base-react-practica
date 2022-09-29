export const formValidTask = task => {
  const dataResponse = {
    isValid: true,
    msgValid: {
      errors: null,
      success: null,
    },
  };
  let isValid = true;
  let inputsError = {
    title: '',
    description: '',
  };
  let inputsSuccess = {
    title: true,
    description: true,
  };
  if (!task.title) {
    inputsError.title = 'Título no ha sido asignado.\n';
    inputsSuccess.title = false;
    isValid = false;
  }
  if (!task.description) {
    inputsError.description = 'Descripción no ha sido asignada.\n';
    inputsSuccess.description = false;
    isValid = false;
  }
  dataResponse.isValid = isValid;
  dataResponse.msgValid.errors = inputsError;
  dataResponse.msgValid.success = inputsSuccess;
  return dataResponse;
};
