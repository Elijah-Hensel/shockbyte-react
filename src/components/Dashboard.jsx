import "../styles/Dashboard.css";
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";

const columns = [
  { field: "id", headerName: "id", width: 50 },
  { field: "free_ram", headerName: "Free Ram", type: "number", width: 180 },
  {
    field: "allocated_ram",
    headerName: "Allocated Ram",
    type: "number",
    width: 180,
  },
  {
    field: "free_disk",
    headerName: "Free Disk",
    type: "number",
    width: 180,
  },
  {
    field: "allocated_disk",
    headerName: "Allocated Disk",
    type: "number",
    width: 180,
  },
  {
    field: "up_since",
    headerName: "Up Since",
    description: "This column shows how long the server has been running",
    width: 200,
  },
];

function Dashboard({ loggedIn }) {
  const [rows, setRows] = useState([]);

  const fetchData = async () => {
    if (!loggedIn) {
      return;
    }
    const res = await fetch(
      "https://600f10ec6c21e1001704e67a.mockapi.io/api/v1/stats"
    );
    const data = await res.json();
    if (data) {
      setRows(data);
    }
  };

  fetchData();

  return (
    <div style={{ height: 425, width: "65%" }}>
      <DataGrid
        style={{ color: "white" }}
        rows={rows}
        columns={columns}
        pageSize={6}
      />
    </div>
  );
}

export default Dashboard;
