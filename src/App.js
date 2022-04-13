
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomeLayout from './components/Home/HomeLayout';

import LoginForm from './components/Form/LoginForm';
import SignUpForm from './components/Form/SignUpForm';
import DashboardLayout from './components/Dashboard/Home/DashboardLayout';
import HomePage from './components/Dashboard/Home/HomePage';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Users from "./components/Dashboard/Administration/Users";
import Groups from './components/Dashboard/Administration/Groups';
import Roles from './components/Dashboard/Administration/Roles';
import EmailSetup from './components/Dashboard/Email/EmailSetup';
import EmailTemplates from './components/Dashboard/Email/EmailTemplates';
import Compaigns from "./components/Dashboard/Compaigns/Compaigns";
import Settings from './components/Dashboard/Settings/Settings';
import Logout from "./components/Dashboard/Logout/Logout";
import Error from './components/Error/Error';
import Intro from "./components/Dashboard/Home/Intro";
import Explanation from "./components/Dashboard/Home/Explanation";
function App() {
  return (
    <div className="container-flude">

      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />

        </Route>

        <Route path="admin" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />

          <Route path="Home" element={<HomePage />} />


          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="groups" element={<Groups />} />
          <Route path="roles" element={<Roles />} />
          <Route path="emailSetup" element={<EmailSetup />} />
          <Route path="emailTemplates" element={<EmailTemplates />} />
          <Route path="compaigns" element={<Compaigns />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>


    </div>
  );
}

export default App;
