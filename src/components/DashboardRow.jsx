import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  idCell: {
    fontWeight: "bold",
    color: "white",
    padding: "5px",
  },
  cell: {
    color: "white",
    padding: "5px",
  },
});

const DashboardRow = ({
  allServers: {
    id,
    allocated_ram,
    free_ram,
    allocated_disk,
    free_disk,
    up_since,
  },
}) => {
  const classes = useStyles();
  const dateFromData = new Date(up_since);
  const convDate = dateFromData.toLocaleDateString();
  let convTime = dateFromData.toTimeString();
  convTime = convTime.substring(0, convTime.lastIndexOf("G"));
  return (
    <>
      <TableRow
        style={{ backgroundColor: "#080808" }}
        hover
        role="checkbox"
        tabIndex={-1}
        key={id}
      >
        <TableCell className={classes.idCell}>{id ? id : "n/a"}</TableCell>
        <TableCell className={classes.cell}>
          {allocated_ram ? allocated_ram : "n/a"}
        </TableCell>
        <TableCell className={classes.cell}>
          {free_ram ? free_ram : "n/a"}
        </TableCell>
        <TableCell className={classes.cell}>
          {allocated_disk ? allocated_disk : "n/a"}
        </TableCell>
        <TableCell className={classes.cell}>
          {free_disk ? free_disk : "n/a"}
        </TableCell>
        <TableCell className={classes.cell}>
          {up_since ? `${convDate} @ ${convTime}` : "n/a"}
        </TableCell>
      </TableRow>
    </>
  );
};

export default DashboardRow;
