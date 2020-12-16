import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <MainContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
