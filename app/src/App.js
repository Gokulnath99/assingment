import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Insert from './components/insert';
import Edit from './components/edit';
import View from './components/view';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className="container">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h1>Navbar</h1>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/insert'} className="nav-link">Insert or Updated</Link>
              </li>
              <li className="nav-item">
                <Link to={'/view'} className="nav-link">View</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/insert' component={ Insert } />
        <Route exact path='/edit/:id' component={ Edit } />
        <Route exact path='/view' component={ View } />
      </Switch>

      </div>
    </Router>
  );
}

export default App;
