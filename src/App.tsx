import { ThemeProvider } from "@mui/material"

import { makandaTheme } from "./shared/services/material-ui-api"
import RoutesConfig from "./routes/Routes"


function App() {

  return (
    <ThemeProvider theme={makandaTheme}>
      <RoutesConfig />
    </ThemeProvider>
  )
}

export default App
