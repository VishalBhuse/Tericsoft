import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { AddEMPApi } from "../Redux/action";

const style = {
  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "5px solid #557153",
  boxShadow: 24,
  p: 3,
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

export const Employee = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [msg, setMsg] = React.useState(false);
  const handleClickMsg = () => setMsg(true);
  const handleCloseMsg = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMsg(false);
  };

  const [err, setErr] = React.useState(false);
  const handleClickErr = () => setErr(true);
  const handleCloseErr = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErr(false);
  };

  const [employee, setEmployee] = React.useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    date: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handlesubmit = () => {
    if (
      employee.name !== "" &&
      employee.email !== "" &&
      employee.phone !== "" &&
      employee.gender !== "" &&
      employee.date !== ""
    ) {
      dispatch(AddEMPApi(employee));
      setEmployee({
        name: "",
        email: "",
        phone: "",
        gender: "",
        date: "",
      });
      handleClickMsg();
      handleClose();
    } else {
      handleClickErr();
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Add Employee
      </Button>

      {/* add new employess modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            fontWeight={"600"}
            color={"#7743DB"}
          >
            Add Employee
          </Typography>
          <Box>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              onChange={handleData}
              type={"text"}
              sx={{ width: "80%" }}
              size="small"
            />
          </Box>
          <Box>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              onChange={handleData}
              type={"email"}
              sx={{ width: "80%" }}
              size="small"
            />
          </Box>
          <Box>
            <TextField
              label="Phone"
              name="phone"
              variant="outlined"
              onChange={handleData}
              type="tel"
              inputProps={{ maxLength: 10, minLength: 10 }}
              sx={{ width: "80%" }}
              size="small"
            />
          </Box>
          <Box>
            <TextField
              type={"date"}
              name="date"
              variant="outlined"
              onChange={handleData}
              sx={{ width: "80%" }}
              size="small"
            />
          </Box>
          <FormControl
            sx={{ width: "80%", margin: "auto", padding: "0px 10px" }}
          >
            <FormLabel
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                textAlign: "left",
                color: "#1976D2",
              }}
            >
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
              onChange={handleData}
            >
              <FormControlLabel
                value="male"
                name="gender"
                onChange={handleData}
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                name="gender"
                onChange={handleData}
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                name="gender"
                onChange={handleData}
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <FormControl
            sx={{ width: "80%", margin: "auto", padding: "0px 10px" }}
          >
            <FormLabel
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                textAlign: "left",
                color: "#1976D2",
              }}
            >
              Hobbies
            </FormLabel>
            <FormGroup row name="hobbies" onChange={handleData}>
              <FormControlLabel
                value="travelling"
                name="hobbies1"
                onChange={handleData}
                control={<Checkbox />}
                label="Travelling"
                labelPlacement="end"
              />
              <FormControlLabel
                value="watch movies"
                name="hobbies2"
                onChange={handleData}
                control={<Checkbox />}
                label="Watch Movies"
                labelPlacement="end"
              />
              <FormControlLabel
                value="swimming"
                name="hobbies3"
                onChange={handleData}
                control={<Checkbox />}
                label="Swimming"
                labelPlacement="end"
              />
              <FormControlLabel
                value="music"
                name="hobbies4"
                onChange={handleData}
                control={<Checkbox />}
                label="Music"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>

          <Box sx={{ margin: "15px" }}>
            <Button
              variant="contained"
              size="large"
              type="submit"
              onClick={handlesubmit}
            >
              Add Employee
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* success alert */}
      <Snackbar open={msg} autoHideDuration={6000} onClose={handleCloseMsg}>
        <Alert
          onClose={handleCloseMsg}
          severity="success"
          sx={{ width: "100%" }}
        >
          Record Added Successfullly.
        </Alert>
      </Snackbar>

      {/* error alert */}
      <Snackbar open={err} autoHideDuration={6000} onClose={handleCloseErr}>
        <Alert onClose={handleCloseErr} severity="error" sx={{ width: "100%" }}>
          Please Filled the Data Appropriately.
        </Alert>
      </Snackbar>
    </>
  );
};
