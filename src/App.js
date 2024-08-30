import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects, workExperience } from "./components/Projects";
import { Hobbies } from "./components/Hobbies";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import WorkDetailPage from './pages/WorkDetailPage';

function HomePage() {
  return (
    <div>
      <Banner />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/experience/:id",
      element: <WorkDetailPage experiences={workExperience} />
    }
  ]);

  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
