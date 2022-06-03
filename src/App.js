
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomeLayout from './components/Home/HomeLayout';

import LoginForm from './components/Form/LoginForm';
import SignUpForm from './components/Form/SignUpForm';
import DashboardLayout from './components/Dashboard/Home/DashboardLayout';
import HomePage from './components/Dashboard/Home/HomePage';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Users from "./components/Dashboard/Administration/Users";
import Groups from "./components/Dashboard/Administration/Groups/Groups";
import Roles from './components/Dashboard/Administration/Roles';
import EmailSetup from './components/Dashboard/Email/EmailSetup';
import EmailTemplates from './components/Dashboard/Email/EmailTemplates';
import Compaigns from "./components/Dashboard/Compaigns/Compaigns";
import Settings from './components/Dashboard/Settings/Settings';
import Logout from "./components/Dashboard/Logout/Logout";
import Error from './components/Error/Error';
import LearningHub from "./components/Dashboard/Learning Hub/LearningHub";
import ForgotPasswordLayout from "./components/Forgot Password/ForgotPasswordLayout";
import ForgotPasswordEmail from "./components/Forgot Password/ForgotPasswordEmail";
import ForgotPasswordCode from "./components/Forgot Password/ForgotPasswordCode";
import NewPassword from "./components/Forgot Password/NewPassword";
import Projects from "./components/Projects/Projects";
import ProjectLayout from './components/Projects/ProjectLayout'
import Project from './components/Projects/Project'
import EditProject from "./components/Projects/EditProject";
import AddCompaigns from './components/Dashboard/Compaigns/AddCompaigns'
function App() {
  return (
    <div className="container-flude">

      <Routes>
        <Route path="Sophos-reactapp" element={<HomeLayout />}>
          <Route index element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
        </Route>

        <Route path="Sophos-reactapp/Forgot_Password" element={<ForgotPasswordLayout />}>
          <Route index element={<ForgotPasswordEmail />} />
          <Route path="Forgot_Password" element={<ForgotPasswordEmail />} />
          <Route path="code" element={<ForgotPasswordCode />} />
          <Route path="new_password" element={<NewPassword />} />
        </Route>

        <Route path="Sophos-reactapp/admin" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path="Home" element={<HomePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="groups" element={<Groups />} />
          <Route path="roles" element={<Roles />} />
          <Route path="emailSetup" element={<EmailSetup />} />
          <Route path="emailTemplates" element={<EmailTemplates />} />
          <Route path="compaigns" element={<Compaigns />} />
          <Route path="compaign" element={<AddCompaigns />} />
          <Route path="learninghub" element={<LearningHub />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />

        </Route>

        
        <Route path="Sophos-reactapp/projects" element={<ProjectLayout />} >
          <Route index element={<Projects/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="project" element={<Project/>} />
          <Route path="edit_project/:id" element={<EditProject/>} />
        </Route>
        <Route path="/*" element={<Error />} />

      </Routes>


    </div>
  );
}

export default App;
