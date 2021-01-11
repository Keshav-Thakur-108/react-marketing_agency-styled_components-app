import GlobalStyle from "./globalStyles"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from './'
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
    </Router>
  );
}

export default App;