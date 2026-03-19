import React, { useState } from "react";
import MainDashboard from "../../components/Dashboard/MainDashboard";
import Roadmaps from "../../components/Dashboard/Roadmaps";
import Mycourses from "../../components/Dashboard/Mycourses";
import QnA from "../../components/Dashboard/Qna";

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("home");

  const renderContent = () => {
    switch (activeNav) {
      case "home":
        return <MainDashboard />;
      case "roadmaps":
        return <Roadmaps />;
      case "courses":
        return <Mycourses />;
      case "quiz":
        return <div>Quiz Component</div>;
      case "chatbot":
        return <div>Chatbot Component</div>;
      case "grading":
        return <QnA />;
      default:
        return <MainDashboard />;
    }
  };

  // Helper function to determine if a navigation item is active
  const isActive = (navItem) => activeNav === navItem;

  return (
    <div className="grid grid-cols-[240px_1fr_320px] h-screen bg-white">
      {/* Left Sidebar */}
      <div className="  bg-[#FFFFF]  border-gray-200 flex flex-col">
        <div className="p-6 flex items-center">
          <span className="text-2xl font-semibold tracking-tight">
            <span className="text-orange-500">L</span>earnify
          </span>
        </div>
        
        <nav className="flex-1 px-2 py-4">
          <div className="space-y-1">
            <button
              className={`flex items-center px-4 py-3 w-full rounded-lg ${
                isActive("home")
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveNav("home")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-3">
                <path
                  fill="currentColor"
                  d="M20 10a1 1 0 1 0-2 0zM6 10a1 1 0 0 0-2 0zm14.293 2.707a1 1 0 0 0 1.414-1.414zM12 3l.707-.707a1 1 0 0 0-1.414 0zm-9.707 8.293a1 1 0 1 0 1.414 1.414zM7 22h10v-2H7zm13-3v-9h-2v9zM6 19v-9H4v9zm15.707-7.707l-9-9l-1.414 1.414l9 9zm-10.414-9l-9 9l1.414 1.414l9-9zM17 22a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zM7 20a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3z"
                />
              </svg>
              Home
            </button>

            <button
              className={`flex items-center px-4 py-3 w-full rounded-lg ${
                isActive("courses")
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveNav("courses")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-3">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  color="currentColor"
                >
                  <path d="M6.514 2c-1.304.129-2.182.419-2.838 1.076c-1.175 1.177-1.175 3.072-1.175 6.863v4.02c0 3.79 0 5.686 1.175 6.864S6.743 22 10.526 22h2.007c3.783 0 5.675 0 6.85-1.177c1.067-1.07 1.166-2.717 1.175-5.846" />
                  <path d="m10.526 7l1.003 3.5c.56 1.11 1.263 1.4 3.01 1.5c1.389-.034 2.195-.198 2.883-.796c.469-.408.681-1.023.784-1.635L18.55 7.5m2.508-2v5M8.601 4.933c1.587-1.317 3.001-2.024 5.934-2.802a1.94 1.94 0 0 1 1.009.005c2.596.714 3.998 1.348 5.876 2.758c.08.06.104.172.048.255c-.613.902-1.982 1.633-5.34 2.935a2.98 2.98 0 0 1-2.171-.012c-3.576-1.42-5.22-2.18-5.42-2.969a.17.17 0 0 1 .064-.17" />
                </g>
              </svg>
              Courses
            </button>

            <button
              className={`flex items-center px-4 py-3 w-full rounded-lg ${
                isActive("resources")
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveNav("resources")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-3">
                <path
                  fill="currentColor"
                  d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0-3h8v2h-8zm0 6h4v2h-4z"
                />
              </svg>
              Resources
            </button>

            <button
              className={`flex items-center px-4 py-3 w-full rounded-lg ${
                isActive("quiz")
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveNav("quiz")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="mr-3"
              >
                <path
                  fill="currentColor"
                  d="M14 15q.425 0 .738-.312t.312-.738t-.312-.737T14 12.9t-.737.313t-.313.737t.313.738T14 15m-.75-3.2h1.5q0-.725.15-1.062t.7-.888q.75-.75 1-1.212t.25-1.088q0-1.125-.788-1.837T14 5q-1.025 0-1.787.575T11.15 7.1l1.35.55q.225-.625.613-.937T14 6.4q.6 0 .975.338t.375.912q0 .35-.2.663t-.7.787q-.825.725-1.012 1.138T13.25 11.8M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"
                />
              </svg>
              Quiz
            </button>

            <button
              className={`flex items-center px-4 py-3 w-full rounded-lg ${
                isActive("chatbot")
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveNav("chatbot")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="mr-3"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM9.5 9h.01m4.99 0h.01" />
                  <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
                </g>
              </svg>
              Chatbot
            </button>

            <button
              className={`flex items-center px-4 py-3 w-full rounded-lg ${
                isActive("roadmaps")
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveNav("roadmaps")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                className="mr-3"
              >
                <path
                  fill="currentColor"
                  d="M23.188 3.735a1.766 1.766 0 0 0-3.532-.001c0 .975 1.766 4.267 1.766 4.267s1.766-3.292 1.766-4.267zm-2.61 0a.844.844 0 1 1 1.687-.001a.844.844 0 0 1-1.687.001m4.703 14.76c-.56 0-1.097.047-1.59.123L11.1 13.976c.2-.18.312-.38.312-.59a.66.66 0 0 0-.088-.315l8.41-2.238c.46.137 1.023.22 1.646.22c1.52 0 2.75-.484 2.75-1.082c0-.6-1.23-1.083-2.75-1.083s-2.75.485-2.75 1.083q.002.105.054.202L9.896 12.2a8 8 0 0 0-2.265-.303c-2.087 0-3.78.667-3.78 1.49s1.693 1.49 3.78 1.49c.574 0 1.11-.055 1.598-.145l11.99 4.866c-.19.192-.306.4-.306.623c0 .19.096.364.236.533L8.695 25.415q-.236-.009-.477-.01c-3.24 0-5.87 1.036-5.87 2.31c0 1.277 2.63 2.313 5.87 2.313s5.87-1.034 5.87-2.312c0-.22-.083-.432-.23-.633l10.266-5.214c.37.04.753.065 1.155.065c2.413 0 4.37-.77 4.37-1.723c0-.944-1.957-1.716-4.37-1.716z"
                />
              </svg>
              Roadmaps
            </button>

            <button
              className={`flex items-center px-4 py-3 w-full rounded-lg ${
                isActive("grading")
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-700 hover:bg-orange-50"
              }`}
              onClick={() => setActiveNav("grading")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="mr-3"
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                />
              </svg>
              Grading
            </button>
          </div>
        </nav>

        <div className="p-4 mt-auto border-t border-gray-200">
          <div className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 rounded-lg cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24"
              className="mr-2"
            >
              <path
                fill="currentColor"
                d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
              />
            </svg>
            Help Mode
          </div>
          <div className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 rounded-lg cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 25 24"
              className="mr-2"
            >
              <path
                fill="currentColor"
                d="m16.07 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.78-1.428zM2.226 12c0-5.523 4.477-10 10-10h1.734l-.868 1.5c-.579 1-.866 2.189-.866 3.5a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626A10 10 0 0 1 12.227 22c-5.523 0-10-4.477-10-10m18.5-5.584l.914 1.67L23.31 9l-1.67.914l-.914 1.67l-.913-1.67L18.143 9l1.67-.914z"
              />
            </svg>
            Dark Mode
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white p-5 overflow-y-auto">
        {renderContent()}
      </div>

      {/* Right Sidebar - Leaderboard */}
      <div className="bg-white border-l border-gray-200 p-6 overflow-y-auto">
        <div className="flex flex-col mb-6">
          <h2 className="text-4xl font-bold">Leaderboard</h2>
        
        </div>

        {/* Bar chart visualization */}
        <div className="mt-3 mb-5">
          <div className="flex items-end justify-around h-44">
            <div className="w-16 bg-blue-400 rounded-t-lg h-32"></div>
            <div className="w-16 bg-orange-400 rounded-t-lg h-40"></div>
            <div className="w-16 bg-green-400 rounded-t-lg h-24"></div>
          </div>
          <div className="flex justify-around mt-2 text-sm font-medium text-gray-600">
            <div>Mohak</div>
            <div>Siddesh</div>
            <div>Nikhil</div>
          </div>
        </div>

        {/* Leaderboard list */}
        <div className="mt-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
                <div>
                  <div className="font-medium">Siddesh</div>
                  <div className="text-xs text-gray-500">+6 hours</div>
                </div>
              </div>
              <div className="flex items-center text-green-500">
                <span className="font-medium">+1</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10 15a.75.75 0 01-.75-.75V7.612L6.295 10.85a.75.75 0 11-1.09-1.034l3.25-3.5a.75.75 0 011.09 0l3.25 3.5a.75.75 0 11-1.09 1.034l-2.955-3.238V14.25A.75.75 0 0110 15z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
                <div>
                  <div className="font-medium">Mohak</div>
                  <div className="text-xs text-gray-500">+2 hours</div>
                </div>
              </div>
              <div className="flex items-center text-red-500">
                <span className="font-medium">-2</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10 5a.75.75 0 01.75.75v6.638l2.955-3.236a.75.75 0 111.09 1.03l-3.25 3.5a.75.75 0 01-1.09 0l-3.25-3.5a.75.75 0 111.09-1.03l2.955 3.236V5.75A.75.75 0 0110 5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
                <div>
                  <div className="font-medium">Nikhil</div>
                  <div className="text-xs text-gray-500">+5 hours</div>
                </div>
              </div>
              <div className="flex items-center text-green-500">
                <span className="font-medium">+2</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10 15a.75.75 0 01-.75-.75V7.612L6.295 10.85a.75.75 0 11-1.09-1.034l3.25-3.5a.75.75 0 011.09 0l3.25 3.5a.75.75 0 11-1.09 1.034l-2.955-3.238V14.25A.75.75 0 0110 15z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
                <div>
                  <div className="font-medium">Sriram</div>
                  <div className="text-xs text-gray-500">+4 hours</div>
                </div>
              </div>
              <div className="flex items-center text-red-500">
                <span className="font-medium">-2</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10 5a.75.75 0 01.75.75v6.638l2.955-3.236a.75.75 0 111.09 1.03l-3.25 3.5a.75.75 0 01-1.09 0l-3.25-3.5a.75.75 0 111.09-1.03l2.955 3.236V5.75A.75.75 0 0110 5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
                <div>
                  <div className="font-medium">Nikhil</div>
                  <div className="text-xs text-gray-500">+8 hours</div>
                </div>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="font-medium">+0</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Badges section */}
        <div className="mt-2 pt-1 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">🏆</span>
            <span className="font-medium">3/39 Badges earned</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-yellow-500 h-2 rounded-full w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;