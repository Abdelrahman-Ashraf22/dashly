"use client";
import { Card, Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import DataChart from "../../DataChart/DataChart";
import { lineChartData } from "../../mockData";

// defining the transactions card's type
export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TransactionsPerDay = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", marginTop: "10px" }}>
      <Paper
        sx={{
          display: "block",
          p: "1rem 2rem",
          width: "100%",
          "@media (min-width: 1000px)": {
            display: "flex",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            width: "100%",
            "@media (min-width: 1000px)": {
              maxWidth: "80%",
            },
          }}
        >
          <Typography>Transactions per day</Typography>
          <DataChart
            type={"line"}
            data={lineChartData}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            maxWidth: "100%",
            width: "100%",
            "@media (min-width: 1000px)": {
              flexDirection: "column",
              maxWidth: "20%",
            },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              textAlign: "center",
              p: "1rem",
              borderRadius: "8px",
              width: "100%",
              "@media (min-width: 1000px)": {
                p: "0.5rem",
              },
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "1.8rem" }}>
                Total Products
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "1.2rem" }}>1.275</Typography>
              <Typography
                color={theme.palette.success.main}
                fontSize={14}
              >
                428.7%
              </Typography>
            </Box>
          </Card>

          <Card
            variant="outlined"
            sx={{
              textAlign: "center",
              p: "1rem",
              borderRadius: "8px",
              width: "100%",
              "@media (min-width: 1000px)": {
                p: "0.5rem",
              },
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "1.8rem" }}>Buy-to-detail</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "1.2rem" }}>4.40%</Typography>
              <Typography
                color={theme.palette.success.main}
                fontSize={14}
              >
                899.4%
              </Typography>
            </Box>
          </Card>

          <Card
            variant="outlined"
            sx={{
              textAlign: "center",
              p: "1rem",
              borderRadius: "8px",
              width: "100%",
              "@media (min-width: 1000px)": {
                p: "0.5rem",
              },
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "1.8rem" }}>Refunds</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "1.2rem" }}>0</Typography>
              <Typography
                color={theme.palette.success.main}
                fontSize={14}
              >
                0
              </Typography>
            </Box>
          </Card>
        </Box>
      </Paper>
    </Box>
  );
};

export default TransactionsPerDay;
