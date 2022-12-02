import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { EditEMPApi } from "../Redux/action";

import {
  Alert,
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
import EditIcon from "@mui/icons-material/Edit";

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
  gap: "12px"
};

export default function BasicModal(row) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [employee, setEmployee] = React.useState(row);

  const [edit, setEdit] = React.useState(false);
  const handleClickEdit = () => setEdit(true);
  const handleCloseEdit = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setEdit(false);
  };

  const handleData = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleEdit = (id) => {
    dispatch(
      EditEMPApi(id, {
        ...employee,
      })
    );
    handleClickEdit();
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <EditIcon />
      </Button>

      {/* modal for edit */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ backgroundColor: "red" }}>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              fontWeight={"600"}
              color={"#7743DB"}
            >
              Update Employee Record
            </Typography>
            <Box>
              <TextField
                label="Name"
                name="name"
                value={employee.name}
                variant="filled"
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
                variant="filled"
                value={employee.email}
                onChange={handleData}
                type={"text"}
                sx={{ width: "80%" }}
                size="small"
              />
            </Box>
            <Box>
              <TextField
                label="Phone"
                name="phone"
                variant="filled"
                value={employee.phone}
                onChange={handleData}
                type={"text"}
                sx={{ width: "80%" }}
                size="small"
              />
            </Box>
            <Box>
              <TextField
                type={"date"}
                name="date"
                value={employee.date}
                variant="filled"
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
                  value={row.hobbies}
                  name="hobbies1"
                  onChange={handleData}
                  control={<Checkbox />}
                  label="Travelling"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value={row.hobbies}
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
                onClick={() => handleEdit(employee.id)}
              >
                Update Employee Data
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* update msg */}
      <Snackbar open={edit} autoHideDuration={6000} onClose={handleCloseEdit}>
        <Alert onClose={handleCloseEdit} severity="success" variant="outlined" sx={{ width: "100%" }}>
          Record Update Successfully.
        </Alert>
      </Snackbar>
    </>
  );
}
