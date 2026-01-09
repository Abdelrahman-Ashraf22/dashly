import { Paper, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// Defining the data card types
export type DataCardProps = {
  title: string;
  value: string;
  description: string;
};

const DataCard = (props: DataCardProps) => {
  // destructuring the props
  const { title, value, description } = props;
  return (
    <Paper
      sx={{
        position: "relative",
        height: "100%",
        width: "calc(100% - 0.1rem)",
        padding: "1rem 0.5rem",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          variant="h6"
          sx={{ padding: "0.25rem" }}
        >
          {title}
        </Typography>
        <Tooltip
          title={
            <Typography fontSize={16}>
              {`${description} which is ${value}`}
            </Typography>
          }
        >
          <IconButton sx={{ padding: "0.25rem" }}>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Typography
        variant="h4"
        sx={{ padding: "0.5rem 1rem", margin: 0 }}
      >
        {value}
      </Typography>
    </Paper>
  );
};

export default DataCard;
