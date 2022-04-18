import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from './Components/MainNavBar'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home.js'
import CreateTaskForm from './Pages/Form/CreateTaskForm.js'
import Dashboard from './Pages/DashBoard/Dashboard.js'
import Stats from './Pages/Stats/Stats.js'


function App() {
  return (
    <>
    <MainNavBar />
    <div className="page-container">
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/create-new-task" exact element={<CreateTaskForm />}></Route>
      <Route path="/dashboard" exact element={<Dashboard />}></Route>
      <Route path="/dashboard-daily" exact element={<Dashboard />}></Route>
      <Route path="/dashboard-weekly" exact element={<Dashboard />}></Route>
      <Route path="/dashboard-monthly" exact element={<Dashboard />}></Route>
      <Route path="/stats" exact element={<Stats />}></Route>
    </Routes>
    </div>
    </> 
  );
}

export default App;
