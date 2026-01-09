// the pie chart component
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import DataChart from "../../DataChart/DataChart";
import { doughnutChartData } from "../../mockData";
const TransactionBottomRow = () => {
  return (
    <Grid
      container
      sx={{
        display: "grid",
        gap: "0.5rem",
        gridTemplateColumns: "1fr",
        "@media (min-width: 900px)": {
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        },
      }}
    >
      <Grid>
        <Paper
          sx={{
            position: "relative",
            top: "1rem",
            height: "100%",
            width: "calc(100% - 0.1rem)",
            padding: "0.5rem",
          }}
        >
          <p style={{ padding: "0.5rem 1rem", margin: "0" }}>
            Transactions per user type
          </p>
          <DataChart
            type={"doughnut"}
            data={doughnutChartData}
          />
        </Paper>
      </Grid>
      <Grid>
        <Paper
          sx={{
            position: "relative",
            top: "1rem",
            height: "100%",
            width: "calc(100% - 0.1rem)",
            padding: "0.5rem",
          }}
        >
          <p style={{ padding: "0.5rem 1rem", margin: "0" }}>
            Transactions per user type
          </p>
          <DataChart
            type={"doughnut"}
            data={doughnutChartData}
          />
        </Paper>
      </Grid>
      <Grid>
        <Paper
          sx={{
            position: "relative",
            top: "1rem",
            height: "100%",
            width: "calc(100% - 0.1rem)",
            padding: "0.5rem",
          }}
        >
          <p style={{ padding: "0.5rem 1rem", margin: "0" }}>
            Transactions per user type
          </p>
          <DataChart
            type={"doughnut"}
            data={doughnutChartData}
          />
        </Paper>
      </Grid>
      <Grid>
        <Paper
          sx={{
            position: "relative",
            top: "1rem",
            height: "100%",
            width: "calc(100% - 0.1rem)",
            padding: "0.5rem",
          }}
        >
          <p style={{ padding: "0.5rem 1rem", margin: "0" }}>
            Transactions per user type
          </p>
          <DataChart
            type={"doughnut"}
            data={doughnutChartData}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;
