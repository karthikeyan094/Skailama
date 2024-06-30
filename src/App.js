import './App.css';
import Project from './components/Projects.componet';
import { Route,Routes } from "react-router-dom";
import ProjectDetails from './components/ProjectDetail.component';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Project/>} />
        <Route path='/project' element={<ProjectDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
