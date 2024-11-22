import { useContext } from 'react';
import { dataContext } from 'Context';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const ToastComponent = () => {
  const {showToast, setShowToast, toastMessage, toastSeverity} = useContext(dataContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowToast(false);
  };

  return (
    <div>
      <Snackbar open={showToast} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={toastSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
