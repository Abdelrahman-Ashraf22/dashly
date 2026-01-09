import { Grid } from "@mui/material";
import DataCard from "../DataCard/DataCard";

const DataRibbon = () => {
  return (
    <Grid
      container
      sx={{
        display: "grid",
        textAlign: "center",
        gridTemplateColumns: "1fr",
        gap: 2,
        "@media (min-width: 900px)": {
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        },
      }}
    >
      <Grid>
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={
            "The totals of all DataSoft products in the current financial year"
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Value"}
          value={"$25,732.53"}
          description={"The total sales of the current financial year"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Avg. Order Value"}
          value={"$159.30"}
          description={
            "The average order value for all sales this current financial year"
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Conversion rate"}
          value={"0.61%"}
          description={"How many pitches become sales"}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
