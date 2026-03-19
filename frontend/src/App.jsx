import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/auth/Authpage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import MenuPage from "./components/LandingPage/Navbar/MenuPage";
import RoadmapDisplay from "./components/Dashboard/RoadmapDisplay.jsx";
import HomePage from "./Homepage.jsx";
import TopicContent from "./components/Dashboard/TopicContent.jsx";
import QuizPage from "./components/Dashboard/QuizPage.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/menu" element={<MenuPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/roadmapdisplay" element={<RoadmapDisplay />} />
        <Route
          path="/topic/:courseName/:chapterNumber/:topicName"
          element={<TopicContent />}
        />
        <Route path="/quizpage" element={<QuizPage />} />
      </Routes>
    </>
  );
}

export default App;
