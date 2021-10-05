import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

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
        <TableCell
          style={{ fontWeight: "bold", color: "white", padding: "5px" }}
        >
          {id}
        </TableCell>
        <TableCell style={{ color: "white", padding: "5px" }}>
          {allocated_ram}
        </TableCell>
        <TableCell style={{ color: "white", padding: "5px" }}>
          {free_ram}
        </TableCell>
        <TableCell
          style={{ color: "white", padding: "5px", fontSize: "small" }}
        >
          {allocated_disk}
        </TableCell>
        <TableCell
          style={{ color: "white", padding: "5px", fontSize: "small" }}
        >
          {free_disk}
        </TableCell>
        <TableCell
          style={{ color: "white", padding: "5px", fontSize: "small" }}
        >
          {convDate} @ {convTime}
        </TableCell>
      </TableRow>
    </>
  );
};

export default DashboardRow;
