import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

// Pages
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AboutPage from "./pages/AboutCms.jsx";
import SkillsPage from "./pages/admin/SkillCms.jsx";
import ProjectsPage from "./pages/admin/ProjectsCms.jsx";
import ExperiencePage from "./pages/admin/ExperiencePage.jsx";
import BlogsPage from "./pages/admin/BlogsPage.jsx";
import TestimonialsPage from "./pages/admin/TestimonialsPage.jsx";
import ServicesPage from "./pages/admin/ServicesPage.jsx";
// import Contact from "./pages/Contact.jsx";
// Components
import ProtectedRoute from "./components/ProtectedRoutes.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/home"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />


          {/* Dashboard parent route (protected) */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="about" element={<AboutPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="blogs" element={<BlogsPage />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="services" element={<ServicesPage />} />
            {/* <Route path="/contact" element={<Contact />} /> */}

          </Route>

          {/* Redirect any unknown route to login */}
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
