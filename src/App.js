
import { StylesProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyle from './commons/styles/global-style' 
 
function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline></CssBaseline>
      <GlobalStyle></GlobalStyle>
      <div>TESTE :D </div>
    </StylesProvider>
  );
}

export default App;
