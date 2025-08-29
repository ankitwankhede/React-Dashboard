import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // full screen
      }}
    >
      <CircularProgress size={60} />
    </Box>
  );
};

export default Loader;
