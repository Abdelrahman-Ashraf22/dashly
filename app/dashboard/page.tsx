import { Box, Grid } from "@mui/material";
import DataRibbon from "../components/Dashboard/DataRibbon/DataRibbon";
import TransactionsPerDay from "../components/Dashboard/TransactionPerDay/TransactionPerDay";
import TransactionBottomRow from "../components/Dashboard/TransactionBottomRow/TransactionBottomRow";

export default function Dashboard() {
  return (
    <Box>
      <Grid gap={4}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid>
      <TransactionBottomRow />
    </Box>
  );
}

export const revalidate = 30;
export const dynamic = "force-dynamic";
export const fetchCache = "default-cache";
