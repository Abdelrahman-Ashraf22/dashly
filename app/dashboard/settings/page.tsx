"use client";
import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";

const Settings = () => {
  const [showRevenue, setShowRevenue] = React.useState(true);
  const [showProfit, setShowProfit] = React.useState(true);
  const [showOrders, setShowOrders] = React.useState(true);
  const [showCustomers, setShowCustomers] = React.useState(true);

  const handleShowRevenueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowRevenue(event.target.checked);
  };

  const handleShowProfitChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowProfit(event.target.checked);
  };

  const handleShowOrdersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowOrders(event.target.checked);
  };

  const handleShowCustomersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowCustomers(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ mb: 4 }}
      >
        Settings
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
      >
        Dashboard Features
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid size={{ xs: 12 }}>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={showRevenue}
                      onChange={handleShowRevenueChange}
                    />
                  }
                  label="Revenue"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={showProfit}
                      onChange={handleShowProfitChange}
                    />
                  }
                  label="Profit"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={showOrders}
                      onChange={handleShowOrdersChange}
                    />
                  }
                  label="Orders"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={showCustomers}
                      onChange={handleShowCustomersChange}
                    />
                  }
                  label="Customers"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Save Settings
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Settings;
