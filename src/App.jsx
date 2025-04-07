import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import ProjectShelf from './my-components/ProjectShelf'; // Import the ProjectShelf component
import Rendering from './my-components/Rendering';


function App() {
  return (
    <Router> 
      <div>
        <div className="bg-black">
          <Routes>
            <Route path="/" element={<Rendering />} />
            <Route path="/projects-shelf" element={<ProjectShelf />} /> {/* Define route for ProjectShelf */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
