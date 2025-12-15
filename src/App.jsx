
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Messages from './Dashboard/Pages/Messages';
import MyJobs from './Dashboard/Pages/MyJobs';
import Membership from './Dashboard/Pages/Membership';
import AccountSettings from './Dashboard/Pages/AccountSettings';
import SavedCandidate from './Dashboard/Pages/SavedCandidate';
import SubmitJob from './Dashboard/Pages/SubmitJob';
import MyProfile from './Dashboard/Pages/MyProfile';
import Maincontent from './Dashboard/Maincontent';


function App() {
 
  return (
    <>
     <Router>
      <Routes>
      <Route path='/' element={<Dashboard />} >
        <Route index element={<Maincontent />} />
        <Route path='Pages/Messages' element={<Messages />} />
        <Route path='Pages/MyJobs' element={<MyJobs />} />
        <Route path='Pages/Membership' element={<Membership />} />
        <Route path='Pages/AccountSettings' element={<AccountSettings />} />
        <Route path='Pages/SavedCandidate' element={<SavedCandidate />} />
        <Route path='Pages/SubmitJob' element={<SubmitJob />} />
        <Route path='Pages/MyProfile' element={<MyProfile />} />
      </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
