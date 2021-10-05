import "../styles/Dashboard.css";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import DashboardRow from "./DashboardRow";

const useStyles = makeStyles({
  root: {
    width: "80%",
    backgroundColor: "#080808",
  },
  container: {
    maxHeight: 400,
    borderRight: "2px solid #121212",
    borderLeft: "2px solid #121212",
  },
  pagination: {
    backgroundColor: "#080808",
    color: "#fff",
  },
  logout: {
    fontSize: "16px",
    width: "6rem",
    height: "3rem",
    color: "#0f94ff",
    backgroundColor: "#161616",
    border: "1px solid #0f94ff",
    cursor: "pointer",
    margin: "20px",
  },
});

const Dashboard = ({ loggedIn, setLoggedIn }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [allServers, setAllServers] = useState([]);

  useEffect(() => {
    const fetchAllServers = async () => {
      try {
        const response = await fetch(
          "https://600f10ec6c21e1001704e67a.mockapi.io/api/v1/stats",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setAllServers(data);
        console.log(allServers);
      } catch (err) {
        throw err;
      }
    };
    fetchAllServers();
  }, [setAllServers]);

  const logOut = () => {
    setLoggedIn(false);
    console.log(loggedIn);
    window.location.href = "/";
  };

  const columns = [
    { id: "id", label: "ID", minWidth: 50, maxWidth: 50 },
    {
      id: "allocated_ram",
      label: "Allocated Ram",
      minWidth: 50,
      maxWidth: 50,
    },
    { id: "used_ram", label: "Used Ram", minWidth: 50, maxWidth: 50 },
    {
      id: "allocated_disk",
      label: "Allocated Disk",
      minWidth: 50,
      maxWidth: 50,
    },
    { id: "used_disk", label: "Used Disk", minWidth: 50, maxWidth: 50 },
    { id: "up_since", label: "Up Since", minWidth: 50, maxWidth: 50 },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper className={classes.root}>
          <div className="container-class">
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        className="list-cell"
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          fontWeight: "bold",
                          backgroundColor: "#0f94ff",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allServers.length > 1
                    ? allServers
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return <DashboardRow key={row.id} allServers={row} />;
                        })
                    : "Could Not Fetch Servers"}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <TablePagination
            className={classes.pagination}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={allServers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <button onClick={logOut} className="logout-btn">
          Logout
        </button>
      </div>
    </>
  );
};

export default Dashboard;
