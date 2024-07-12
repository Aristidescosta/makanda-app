import { ThemeProvider, Typography } from "@mui/material"

import { makandaTheme } from "./shared/services/material-ui-api"


function App() {

  return (
    <ThemeProvider theme={makandaTheme}>
      <Typography variant="h1" component={"h1"}>
        Makanda app
      </Typography>
    </ThemeProvider>
  )
}

export default App
