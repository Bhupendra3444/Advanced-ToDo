import React, { useState, useEffect, useCallback } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar"; // ✅ Import Navbar
import { ThemeProvider, createTheme, CssBaseline, Container, Box, Switch, Typography, CircularProgress, Alert, Button } from "@mui/material";
import { fetchWeather } from "./utils/api";
import { useMemo } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getWeather = useCallback(() => {
    setLoading(true);
    fetchWeather()
      .then((data) => {
        setWeather(data);
        setWeatherError(null);
      })
      .catch((error) => {
        setWeatherError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar /> {/* ✅ Add Navbar here */}
      <Container maxWidth="sm">
        <Box mt={5} display="flex" flexDirection="column" gap={3} alignItems="center">
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} color="primary" />
          {loading ? (
            <CircularProgress />
          ) : weatherError ? (
            <Alert severity="error">{weatherError}</Alert>
          ) : (
            <Box textAlign="center">
              <Typography variant="h6">Current Weather</Typography>
              <Typography>{weather.temp}°C, {weather.condition}</Typography>
              <Button variant="contained" color="primary" onClick={getWeather} sx={{ mt: 1 }}>
                Refresh Weather
              </Button>
            </Box>
          )}
          <TaskInput />
          <TaskList />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
