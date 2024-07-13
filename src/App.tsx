import { Box, ThemeProvider } from "@mui/material";

import { makandaTheme } from "./shared/services/material-ui-api";
import RoutesConfig from "./routes/Routes";

function App() {
  return (
    <ThemeProvider theme={makandaTheme}>
      <Box
        height={"100vh"}
        width={"100vw"}
        bgcolor={"background.default"}
        color="text.primary"
      >
        <RoutesConfig />
      </Box>
    </ThemeProvider>
  );
}

export default App;
