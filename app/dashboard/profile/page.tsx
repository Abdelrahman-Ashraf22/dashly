"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Profile = () => {
  // Destructuring the data from the current session
  const { data: session } = useSession();
  const names = session?.user?.name?.split(" ") || [];
  const firstName = names[0] || "";
  const lastName = names.length > 1 ? names[names.length - 1] : "";

  // SetState to handle the inputs
  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: session?.user?.email || "",
    password: "",
    confirmPassword: "",
    receiveEmails: false,
  });

  // Handling the on change function on every input
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receiveEmails" ? checked : value,
    }));
  };

  // Submit function
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ pb: 4 }}
      >
        Hey {session?.user?.name || "User"}, welcome to your profile 👋
      </Typography>
      <Paper sx={{ p: "1rem 2rem" }}>
        <Grid
          container
          justifyContent="center"
        >
          <Grid size={{ xs: 12, sm: 8, md: 6 }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar
                sx={{
                  height: 100,
                  width: 100,
                  mb: 2,
                }}
                src={session?.user?.image as string}
                alt={session?.user?.name || "User"}
              />
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 600, margin: "0 auto" }}
            >
              <Grid
                container
                spacing={3}
              >
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="receiveEmails"
                        checked={formData.receiveEmails}
                        onChange={handleFormChange}
                        color="primary"
                      />
                    }
                    label="Receive sales analytics emails"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;
