import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function DeleteMsg() {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <>
      <Button
        onClick={handleClick({
          vertical: "top",
          horizontal: "center",
        })}
      >
        <DeleteIcon sx={{ color: "#DC3535" }} />
      </Button>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={5000}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert severity="success" action={action}>
          Delete Record Successfully.
        </Alert>
      </Snackbar>
    </>
  );
}
