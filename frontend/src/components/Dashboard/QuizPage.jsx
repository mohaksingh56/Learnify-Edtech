// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// const QuizPage = () => {
//   const { search } = useLocation();
//   const queryParams = new URLSearchParams(search);

//   const courseName = queryParams.get("courseName");
//   const chapterNumber = queryParams.get("chapterNumber");
//   const topicName = queryParams.get("topicName");

//   const [content, setContent] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/file-content?courseName=${encodeURIComponent(
//             courseName
//           )}&chapterNumber=${encodeURIComponent(
//             chapterNumber
//           )}&topicName=${encodeURIComponent(topicName)}`
//         );

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.error || "Failed to fetch content");
//         }

//         const data = await response.json();
//         setContent(data.content);
//         console.log("Fetched Content:", content);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError(err.message);
//       }
//     };

//     fetchContent();
//   }, [courseName, chapterNumber, topicName]);

//   console.log("Course Name:", courseName);
//   console.log("Chapter Number:", chapterNumber);
//   console.log("Topic Name:", topicName);
//   return (
//     <>
//       <div class="grid grid-cols-[17%_1fr] h-screen">
//         <div className="bg-[#F3F3F3] py-4 overflow-y-auto">
//           <ul className="list-disc p-5 text-sm">
//             <Link to="/dashboard">
//               <li className="m-[20px] py-[8px] flex flex-row items-center gap-[10px] text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer">
//                 {/* Home Icon */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M20 10a1 1 0 1 0-2 0zM6 10a1 1 0 0 0-2 0zm14.293 2.707a1 1 0 0 0 1.414-1.414zM12 3l.707-.707a1 1 0 0 0-1.414 0zm-9.707 8.293a1 1 0 1 0 1.414 1.414zM7 22h10v-2H7zm13-3v-9h-2v9zM6 19v-9H4v9zm15.707-7.707l-9-9l-1.414 1.414l9 9zm-10.414-9l-9 9l1.414 1.414l9-9zM17 22a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zM7 20a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3z"
//                   />
//                 </svg>
//                 Home
//               </li>
//             </Link>

//             <li className="m-[20px] py-[8px] flex flex-row items-center gap-[10px] text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer">
//               {/* Roadmap Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 32 32"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M23.188 3.735a1.766 1.766 0 0 0-3.532-.001c0 .975 1.766 4.267 1.766 4.267s1.766-3.292 1.766-4.267zm-2.61 0a.844.844 0 1 1 1.687-.001a.844.844 0 0 1-1.687.001m4.703 14.76c-.56 0-1.097.047-1.59.123L11.1 13.976c.2-.18.312-.38.312-.59a.66.66 0 0 0-.088-.315l8.41-2.238c.46.137 1.023.22 1.646.22c1.52 0 2.75-.484 2.75-1.082c0-.6-1.23-1.083-2.75-1.083s-2.75.485-2.75 1.083q.002.105.054.202L9.896 12.2a8 8 0 0 0-2.265-.303c-2.087 0-3.78.667-3.78 1.49s1.693 1.49 3.78 1.49c.574 0 1.11-.055 1.598-.145l11.99 4.866c-.19.192-.306.4-.306.623c0 .19.096.364.236.533L8.695 25.415q-.236-.009-.477-.01c-3.24 0-5.87 1.036-5.87 2.31c0 1.277 2.63 2.313 5.87 2.313s5.87-1.034 5.87-2.312c0-.22-.083-.432-.23-.633l10.266-5.214c.37.04.753.065 1.155.065c2.413 0 4.37-.77 4.37-1.723c0-.944-1.957-1.716-4.37-1.716z"
//                 />
//               </svg>
//               Roadmaps
//             </li>
//           </ul>

//           <hr className="text-[#cfcfcf] p-[2px]" />

//           <ul className="list-disc p-5 text-sm">
//             {[
//               {
//                 name: "Courses",
//                 icon: (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <g
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                     >
//                       <path d="M6.514 2c-1.304.129-2.182.419-2.838 1.076c-1.175 1.177-1.175 3.072-1.175 6.863v4.02c0 3.79 0 5.686 1.175 6.864S6.743 22 10.526 22h2.007c3.783 0 5.675 0 6.85-1.177c1.067-1.07 1.166-2.717 1.175-5.846" />
//                       <path d="m10.526 7l1.003 3.5c.56 1.11 1.263 1.4 3.01 1.5c1.389-.034 2.195-.198 2.883-.796c.469-.408.681-1.023.784-1.635L18.55 7.5m2.508-2v5M8.601 4.933c1.587-1.317 3.001-2.024 5.934-2.802a1.94 1.94 0 0 1 1.009.005c2.596.714 3.998 1.348 5.876 2.758c.08.06.104.172.048.255c-.613.902-1.982 1.633-5.34 2.935a2.98 2.98 0 0 1-2.171-.012c-3.576-1.42-5.22-2.18-5.42-2.969a.17.17 0 0 1 .064-.17" />
//                     </g>
//                   </svg>
//                 ),
//               },
//               {
//                 name: "Quiz",
//                 icon: (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="M14 15q.425 0 .738-.312t.312-.738t-.312-.737T14 12.9t-.737.313t-.313.737t.313.738T14 15m-.75-3.2h1.5q0-.725.15-1.062t.7-.888q.75-.75 1-1.212t.25-1.088q0-1.125-.788-1.837T14 5q-1.025 0-1.787.575T11.15 7.1l1.35.55q.225-.625.613-.937T14 6.4q.6 0 .975.338t.375.912q0 .35-.2.663t-.7.787q-.825.725-1.012 1.138T13.25 11.8M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"
//                     />
//                   </svg>
//                 ),
//               },
//               {
//                 name: "Chatbot",
//                 icon: (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <g
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                     >
//                       <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM9.5 9h.01m4.99 0h.01" />
//                       <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
//                     </g>
//                   </svg>
//                 ),
//               },
//               {
//                 name: "Q&A",
//                 icon: (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 22 22"
//                   >
//                     <g fill="none" fillRule="evenodd">
//                       <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
//                       <path
//                         fill="currentColor"
//                         d="M8.017 2.861a4.218 4.218 0 1 1 5.89 6.04l-.166.149l-1.241 1.06l4.099 4.783c.33-.688.661-1.482.988-2.399a1.5 1.5 0 1 1 2.826 1.01c-.477 1.335-.981 2.488-1.51 3.48l-.2.364l1.436 1.675a1.5 1.5 0 0 1-2.172 2.064l-.106-.112l-.947-1.105a9 9 0 0 1-.964.915C14.232 22.192 12.484 22.5 11 22.5c-3.23 0-6.5-2.576-6.5-6.5c0-1.136.43-2.183.945-3.043c.521-.871 1.193-1.659 1.827-2.307q.37-.377.726-.701l.232-.21l-.599-.698a4.44 4.44 0 0 1 .073-5.858l.159-.167zm2.166 9.157c-.247.22-.508.466-.767.731c-.538.55-1.038 1.15-1.396 1.748c-.365.61-.52 1.114-.52 1.503c0 2.076 1.73 3.5 3.5 3.5c1.016 0 2.018-.192 3.05-1.036c.23-.188.466-.412.709-.683l.183-.21zm1.678-7.035a1.22 1.22 0 0 0-1.623-.09l-.1.09l-.154.154l-.1.11c-.402.495-.43 1.2-.066 1.724l.09.118l.64.745l1.244-1.064l.1-.097a1.22 1.22 0 0 0-.03-1.69Z"
//                       />
//                     </g>
//                   </svg>
//                 ),
//               },
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="m-[20px] py-[8px] flex flex-row items-center gap-[10px] text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer"
//               >
//                 {item.icon}
//                 <span>{item.name}</span>
//               </li>
//             ))}
//           </ul>

//           <ul className="list-disc p-5 text-sm absolute bottom-0">
//             <li className="m-[10px] py-[2px] flex flex-row items-center gap-[10px] font-medium">
//               {/* Help Mode */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
//                 />
//               </svg>
//               Help Mode
//             </li>
//             <li className="m-[10px] py-[2px] flex flex-row items-center gap-[10px] font-medium">
//               {/* Dark Mode */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="17"
//                 height="16"
//                 viewBox="0 0 25 24"
//               >
//                 <path
//                   fill="currentColor"
//                   d="m16.07 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.78-1.428zM2.226 12c0-5.523 4.477-10 10-10h1.734l-.868 1.5c-.579 1-.866 2.189-.866 3.5a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626A10 10 0 0 1 12.227 22c-5.523 0-10-4.477-10-10m18.5-5.584l.914 1.67L23.31 9l-1.67.914l-.914 1.67l-.913-1.67L18.143 9l1.67-.914z"
//                 />
//               </svg>
//               Dark Mode
//             </li>
//           </ul>
//         </div>
//         <div>
//           <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4">Quiz Page</h1>
//             {error ? (
//               <div className="text-red-600">Error: {error}</div>
//             ) : content ? (
//               <div className="text-gray-700">Check console for content</div>
//             ) : (
//               <div className="text-gray-500">Loading...</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default QuizPage;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const QuizPage = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const courseName = queryParams.get("courseName");
  const chapterNumber = queryParams.get("chapterNumber");
  const topicName = queryParams.get("topicName");

  const [content, setContent] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  // Fetch content first
  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3000/api/file-content?courseName=${encodeURIComponent(
            courseName
          )}&chapterNumber=${encodeURIComponent(
            chapterNumber
          )}&topicName=${encodeURIComponent(topicName)}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch content");
        }

        const data = await response.json();
        setContent(data.content);
        console.log("Fetched Content:", data.content);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [courseName, chapterNumber, topicName]);

  // Generate quiz when content is available
  const generateQuiz = async () => {
    if (!content) return;

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/generate-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content,
          questionCount: 5, // You can adjust this or make it configurable
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate quiz");
      }

      const quizData = await response.json();
      setQuiz(quizData);
      setUserAnswers(new Array(quizData.questions.length).fill(null));
      console.log("Generated Quiz:", quizData);
    } catch (err) {
      console.error("Quiz generation error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStartQuiz = () => {
    generateQuiz();
    setQuizStarted(true);
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const saveQuizData = async () => {
    if (!quiz || !quiz.questions) return;

    const enrichedQuestions = quiz.questions.map((question, index) => ({
      questionText: question.question,
      options: question.options,
      correctAnswer: question.correctAnswer,
      userAnswer: userAnswers[index],
      isCorrect: userAnswers[index] === question.correctAnswer,
    }));

    const payload = {
      courseName,
      chapterNumber,
      topicName,
      score,
      totalQuestions: quiz.questions.length,
      questions: enrichedQuestions,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:3000/api/save-quiz-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save quiz data");
      }

      console.log("✅ Quiz data saved successfully.");
    } catch (err) {
      console.error("❌ Error saving quiz data:", err);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      let newScore = 0;
      for (let i = 0; i < quiz.questions.length; i++) {
        if (userAnswers[i] === quiz.questions[i].correctAnswer) {
          newScore++;
        }
      }
      setScore(newScore);
      setQuizCompleted(true);

      // Save quiz data at once
      saveQuizData();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setUserAnswers(new Array(quiz?.questions?.length || 0).fill(null));
  };

  return (
    <>
      <div className="grid grid-cols-[17%_1fr] h-screen">
        <div className="bg-[#F3F3F3] py-4 overflow-y-auto">
          <ul className="list-disc p-5 text-sm">
            <Link to="/dashboard">
              <li className="m-[20px] py-[8px] flex flex-row items-center gap-[10px] text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer">
                {/* Home Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 10a1 1 0 1 0-2 0zM6 10a1 1 0 0 0-2 0zm14.293 2.707a1 1 0 0 0 1.414-1.414zM12 3l.707-.707a1 1 0 0 0-1.414 0zm-9.707 8.293a1 1 0 1 0 1.414 1.414zM7 22h10v-2H7zm13-3v-9h-2v9zM6 19v-9H4v9zm15.707-7.707l-9-9l-1.414 1.414l9 9zm-10.414-9l-9 9l1.414 1.414l9-9zM17 22a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zM7 20a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3z"
                  />
                </svg>
                Home
              </li>
            </Link>

            {/* Sidebar menu items */}
            {/* I'm keeping the same sidebar as your original code */}
            <li className="m-[20px] py-[8px] flex flex-row items-center gap-[10px] text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M23.188 3.735a1.766 1.766 0 0 0-3.532-.001c0 .975 1.766 4.267 1.766 4.267s1.766-3.292 1.766-4.267zm-2.61 0a.844.844 0 1 1 1.687-.001a.844.844 0 0 1-1.687.001m4.703 14.76c-.56 0-1.097.047-1.59.123L11.1 13.976c.2-.18.312-.38.312-.59a.66.66 0 0 0-.088-.315l8.41-2.238c.46.137 1.023.22 1.646.22c1.52 0 2.75-.484 2.75-1.082c0-.6-1.23-1.083-2.75-1.083s-2.75.485-2.75 1.083q.002.105.054.202L9.896 12.2a8 8 0 0 0-2.265-.303c-2.087 0-3.78.667-3.78 1.49s1.693 1.49 3.78 1.49c.574 0 1.11-.055 1.598-.145l11.99 4.866c-.19.192-.306.4-.306.623c0 .19.096.364.236.533L8.695 25.415q-.236-.009-.477-.01c-3.24 0-5.87 1.036-5.87 2.31c0 1.277 2.63 2.313 5.87 2.313s5.87-1.034 5.87-2.312c0-.22-.083-.432-.23-.633l10.266-5.214c.37.04.753.065 1.155.065c2.413 0 4.37-.77 4.37-1.723c0-.944-1.957-1.716-4.37-1.716z"
                />
              </svg>
              Roadmaps
            </li>
          </ul>

          <hr className="text-[#cfcfcf] p-[2px]" />

          <ul className="list-disc p-5 text-sm">
            {[
              {
                name: "Courses",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M6.514 2c-1.304.129-2.182.419-2.838 1.076c-1.175 1.177-1.175 3.072-1.175 6.863v4.02c0 3.79 0 5.686 1.175 6.864S6.743 22 10.526 22h2.007c3.783 0 5.675 0 6.85-1.177c1.067-1.07 1.166-2.717 1.175-5.846" />
                      <path d="m10.526 7l1.003 3.5c.56 1.11 1.263 1.4 3.01 1.5c1.389-.034 2.195-.198 2.883-.796c.469-.408.681-1.023.784-1.635L18.55 7.5m2.508-2v5M8.601 4.933c1.587-1.317 3.001-2.024 5.934-2.802a1.94 1.94 0 0 1 1.009.005c2.596.714 3.998 1.348 5.876 2.758c.08.06.104.172.048.255c-.613.902-1.982 1.633-5.34 2.935a2.98 2.98 0 0 1-2.171-.012c-3.576-1.42-5.22-2.18-5.42-2.969a.17.17 0 0 1 .064-.17" />
                    </g>
                  </svg>
                ),
              },
              {
                name: "Quiz",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 15q.425 0 .738-.312t.312-.738t-.312-.737T14 12.9t-.737.313t-.313.737t.313.738T14 15m-.75-3.2h1.5q0-.725.15-1.062t.7-.888q.75-.75 1-1.212t.25-1.088q0-1.125-.788-1.837T14 5q-1.025 0-1.787.575T11.15 7.1l1.35.55q.225-.625.613-.937T14 6.4q.6 0 .975.338t.375.912q0 .35-.2.663t-.7.787q-.825.725-1.012 1.138T13.25 11.8M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"
                    />
                  </svg>
                ),
              },
              {
                name: "Chatbot",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
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
                ),
              },
              {
                name: "Q&A",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 22 22"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        d="M8.017 2.861a4.218 4.218 0 1 1 5.89 6.04l-.166.149l-1.241 1.06l4.099 4.783c.33-.688.661-1.482.988-2.399a1.5 1.5 0 1 1 2.826 1.01c-.477 1.335-.981 2.488-1.51 3.48l-.2.364l1.436 1.675a1.5 1.5 0 0 1-2.172 2.064l-.106-.112l-.947-1.105a9 9 0 0 1-.964.915C14.232 22.192 12.484 22.5 11 22.5c-3.23 0-6.5-2.576-6.5-6.5c0-1.136.43-2.183.945-3.043c.521-.871 1.193-1.659 1.827-2.307q.37-.377.726-.701l.232-.21l-.599-.698a4.44 4.44 0 0 1 .073-5.858l.159-.167zm2.166 9.157c-.247.22-.508.466-.767.731c-.538.55-1.038 1.15-1.396 1.748c-.365.61-.52 1.114-.52 1.503c0 2.076 1.73 3.5 3.5 3.5c1.016 0 2.018-.192 3.05-1.036c.23-.188.466-.412.709-.683l.183-.21zm1.678-7.035a1.22 1.22 0 0 0-1.623-.09l-.1.09l-.154.154l-.1.11c-.402.495-.43 1.2-.066 1.724l.09.118l.64.745l1.244-1.064l.1-.097a1.22 1.22 0 0 0-.03-1.69Z"
                      />
                    </g>
                  </svg>
                ),
              },
            ].map((item, index) => (
              <li
                key={index}
                className="m-[20px] py-[8px] flex flex-row items-center gap-[10px] text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer"
              >
                {item.icon}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>

          <ul className="list-disc p-5 text-sm absolute bottom-0">
            <li className="m-[10px] py-[2px] flex flex-row items-center gap-[10px] font-medium">
              {/* Help Mode */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                />
              </svg>
              Help Mode
            </li>
            <li className="m-[10px] py-[2px] flex flex-row items-center gap-[10px] font-medium">
              {/* Dark Mode */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 25 24"
              >
                <path
                  fill="currentColor"
                  d="m16.07 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.78-1.428zM2.226 12c0-5.523 4.477-10 10-10h1.734l-.868 1.5c-.579 1-.866 2.189-.866 3.5a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626A10 10 0 0 1 12.227 22c-5.523 0-10-4.477-10-10m18.5-5.584l.914 1.67L23.31 9l-1.67.914l-.914 1.67l-.913-1.67L18.143 9l1.67-.914z"
                />
              </svg>
              Dark Mode
            </li>
          </ul>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <h1 className="text-3xl font-bold">
                {topicName && topicName.replace(/_/g, " ")} Quiz
              </h1>
              <p className="text-gray-600">
                Chapter {chapterNumber} -{" "}
                {courseName && courseName.replace(/_/g, " ")}
              </p>
            </div>

            {error ? (
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-red-700">
                <p className="font-medium">Error</p>
                <p>{error}</p>
              </div>
            ) : loading ? (
              <div className="text-center py-8">
                <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-2 text-gray-600">Loading...</p>
              </div>
            ) : !quizStarted ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Ready to test your knowledge?
                </h2>
                <p className="mb-6 text-gray-700">
                  This quiz will test your understanding of the key concepts in
                  this topic. Answer all questions to the best of your ability.
                </p>
                <button
                  onClick={handleStartQuiz}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Start Quiz
                </button>
              </div>
            ) : quiz && !quizCompleted ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-medium">
                    Question {currentQuestion + 1} of {quiz.questions.length}
                  </p>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {Math.round(
                      ((currentQuestion + 1) / quiz.questions.length) * 100
                    )}
                    % complete
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">
                    {quiz.questions[currentQuestion].question}
                  </h2>
                  <div className="space-y-3">
                    {quiz.questions[currentQuestion].options.map(
                      (option, index) => (
                        <div
                          key={index}
                          onClick={() =>
                            handleAnswerSelect(currentQuestion, index)
                          }
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            userAnswers[currentQuestion] === index
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <label className="flex items-start cursor-pointer">
                            <div className="flex items-center h-5">
                              <input
                                type="radio"
                                name={`question-${currentQuestion}`}
                                checked={userAnswers[currentQuestion] === index}
                                onChange={() =>
                                  handleAnswerSelect(currentQuestion, index)
                                }
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                            </div>
                            <div className="ml-3 text-gray-700">{option}</div>
                          </label>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={handlePrevQuestion}
                    disabled={currentQuestion === 0}
                    className={`px-4 py-2 rounded-md ${
                      currentQuestion === 0
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    } transition-colors`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNextQuestion}
                    disabled={userAnswers[currentQuestion] === null}
                    className={`px-4 py-2 rounded-md ${
                      userAnswers[currentQuestion] === null
                        ? "bg-blue-300 text-white cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    } transition-colors`}
                  >
                    {currentQuestion < quiz.questions.length - 1
                      ? "Next"
                      : "Submit"}
                  </button>
                </div>
              </div>
            ) : quizCompleted ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
                <div className="mb-6 text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-lg text-gray-700 mb-2">You scored</p>
                  <p className="text-4xl font-bold text-blue-600">
                    {score} / {quiz.questions.length}
                  </p>
                  <p className="text-lg text-gray-700 mt-2">
                    ({Math.round((score / quiz.questions.length) * 100)}%)
                  </p>
                </div>

                <div className="space-y-6 mb-6">
                  {quiz.questions.map((q, qIndex) => {
                    const isCorrect = userAnswers[qIndex] === q.correctAnswer;
                    return (
                      <div
                        key={qIndex}
                        className={`p-4 rounded-lg ${
                          isCorrect ? "bg-green-50" : "bg-red-50"
                        }`}
                      >
                        <p className="font-medium mb-2">
                          {qIndex + 1}. {q.question}
                        </p>
                        <div className="space-y-2">
                          {q.options.map((option, oIndex) => (
                            <div
                              key={oIndex}
                              className={`p-2 rounded ${
                                oIndex === q.correctAnswer
                                  ? "bg-green-100 border-green-300 border"
                                  : userAnswers[qIndex] === oIndex
                                  ? "bg-red-100 border-red-300 border"
                                  : "bg-gray-50"
                              }`}
                            >
                              <div className="flex items-center">
                                <span
                                  className={`inline-block w-5 h-5 rounded-full mr-2 flex items-center justify-center text-sm ${
                                    oIndex === q.correctAnswer
                                      ? "bg-green-500 text-white"
                                      : userAnswers[qIndex] === oIndex
                                      ? "bg-red-500 text-white"
                                      : "bg-gray-200"
                                  }`}
                                >
                                  {String.fromCharCode(65 + oIndex)}
                                </span>
                                {option}
                                {oIndex === q.correctAnswer && (
                                  <svg
                                    className="w-5 h-5 ml-2 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={handleRestartQuiz}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Retake Quiz
                  </button>
                  <Link to="/dashboard">
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                      Back to Dashboard
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-yellow-700">
                <p>Unable to load quiz. Please try again later.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
