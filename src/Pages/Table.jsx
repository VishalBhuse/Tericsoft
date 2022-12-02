import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DelteEMPApi, GetEMPApi } from "../Redux/action";
import { Box } from "@mui/system";

import BasicModal from "../Component/Editmodal";
import DeleteMsg from "../Component/Deletemsg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const dispatch = useDispatch();
  const emp = useSelector((state) => state.data);
  const { loading, error } = useSelector((state) => state);

  const handleDelte = (id) => {
    dispatch(DelteEMPApi(id));
  };

  React.useEffect(() => {
    dispatch(GetEMPApi());
  }, []);

  return (
    <>
      <Box>
        {loading && (
          <Typography
            color={"#0002A1"}
            textAlign={"center"}
            fontSize="35px"
            fontWeight={"700"}
            my="5"
          >
            Loading...
          </Typography>
        )}
        {error && (
          <Typography
            textAlign={"center"}
            color={"#0002A1"}
            fontSize="35px"
            fontWeight={"700"}
            my="5"
          >
            Error...
          </Typography>
        )}
      </Box>

      <Typography
        textAlign={"center"}
        color={"#0002A1"}
        fontSize="35px"
        fontWeight={"700"}
        my="5"
      >
        Employee Data
      </Typography>
      {emp >=0  ? 
        <Typography
        textAlign={"center"}
        color={"#FF1E1E"}
        fontSize="35px"
        fontWeight={"700"}
        my="5"
      >
         No Data Available
      </Typography>
       : 
        <TableContainer component={Paper} sx={{ width: "90%", margin: "auto" }}>
          <Table sx={{ minWidth: 600 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ fontSize: "1.1rem" }}>
                  Index
                </StyledTableCell>
                <StyledTableCell align="left" sx={{ fontSize: "1.1rem" }}>
                  Name
                </StyledTableCell>
                <StyledTableCell align="left" sx={{ fontSize: "1.1rem" }}>
                  Email
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.1rem" }}>
                  Phone No.
                </StyledTableCell>
                <StyledTableCell align="left" sx={{ fontSize: "1.1rem" }}>
                  Gender
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.1rem" }}>
                  Date
                </StyledTableCell>
                <StyledTableCell align="left" sx={{ fontSize: "1.1rem" }}>
                  Hobbies
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.1rem" }}>
                  Delete
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.1rem" }}>
                  Edit
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {emp?.map((row, ind = 1) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontWeight: "700",
                      fontSize: "25px",
                      color: "#6D67E4",
                      textTransform: "capitalize",
                    }}
                  >
                    {ind + 1}
                  </StyledTableCell>
                  <StyledTableCell
                    align="left"
                    sx={{
                      fontWeight: "700",
                      fontSize: "25px",
                      color: "#6D67E4",
                      textTransform: "capitalize",
                    }}
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell
                    align="left"
                    sx={{
                      fontWeight: "700",
                      fontSize: "25px",
                      color: "#6D67E4",
                    }}
                  >
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{
                      fontWeight: "700",
                      fontSize: "25px",
                      color: "#6D67E4",
                      textTransform: "capitalize",
                    }}
                  >
                    +91 {row.phone}
                  </StyledTableCell>
                  <StyledTableCell
                    align="left"
                    sx={{
                      fontWeight: "700",
                      fontSize: "25px",
                      color: "#6D67E4",
                      textTransform: "capitalize",
                    }}
                  >
                    {row.gender}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{
                      fontWeight: "700",
                      fontSize: "25px",
                      color: "#6D67E4",
                    }}
                  >
                    {row.date}
                  </StyledTableCell>
                  <StyledTableCell
                    align="left"
                    sx={{
                      fontWeight: "700",
                      fontSize: "25px",
                      color: "#6D67E4",
                      textTransform: "capitalize",
                    }}
                  >
                    {row.hobbies1} {row.hobbies2} {row.hobbies3} {row.hobbies4}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button onClick={() => handleDelte(row.id)}>
                      <DeleteMsg />
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <BasicModal {...row} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </>
  );
}
