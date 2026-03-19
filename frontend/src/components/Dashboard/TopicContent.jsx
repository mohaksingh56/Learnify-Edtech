// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// const TopicContent = () => {
//   const navigate = useNavigate();
//   const { courseName, chapterNumber, topicName } = useParams();
//   const [content, setContent] = useState("");
//   const [loading, setLoading] = useState(true);
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
//       } catch (error) {
//         console.error("Error fetching topic content:", error);
//         setError(`Error loading content: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContent();
//   }, [courseName, chapterNumber, topicName]);

//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="topic-content-container max-w-4xl mx-auto p-4">
//       {/* Header with back button */}
//       <div className="mb-6">
//         <button
//           onClick={handleBack}
//           className="flex items-center text-blue-600 hover:text-blue-800"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M19 12H5M12 19l-7-7 7-7" />
//           </svg>
//           <span className="ml-2">Back to Roadmap</span>
//         </button>
//       </div>

//       {/* Content header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold mb-2">{topicName}</h1>
//         <div className="text-gray-600">
//           <span className="font-medium">{courseName}</span>
//           <span className="mx-2">•</span>
//           <span>Chapter {chapterNumber}</span>
//         </div>
//       </div>

//       {/* Main content */}
//       {loading ? (
//         <div className="flex justify-center py-8">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       ) : error ? (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//           {error}
//         </div>
//       ) : (
//         <div
//           className="prose max-w-none"
//           dangerouslySetInnerHTML={{ __html: content }}
//         />
//       )}
//     </div>
//   );
// };

// export default TopicContent;

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const TopicContent = () => {
  const navigate = useNavigate();
  const { courseName, chapterNumber, topicName } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Added state for video
  const [videoData, setVideoData] = useState({
    loading: true,
    exists: false,
    path: null,
    error: null,
    generated: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch text content
        const contentResponse = await fetch(
          `http://localhost:3000/api/file-content?courseName=${encodeURIComponent(
            courseName
          )}&chapterNumber=${encodeURIComponent(
            chapterNumber
          )}&topicName=${encodeURIComponent(topicName)}`
        );

        if (!contentResponse.ok) {
          const errorData = await contentResponse.json();
          throw new Error(errorData.error || "Failed to fetch content");
        }

        const contentData = await contentResponse.json();
        setContent(contentData.content);

        // Fetch video content
        const videoResponse = await fetch(
          `http://localhost:3000/api/video-content?courseName=${encodeURIComponent(
            courseName
          )}&chapterNumber=${encodeURIComponent(
            chapterNumber
          )}&topicName=${encodeURIComponent(topicName)}`
        );

        if (!videoResponse.ok) {
          const videoErrorData = await videoResponse.json();
          setVideoData({
            loading: false,
            exists: false,
            path: null,
            error: videoErrorData.error || "Failed to fetch video",
            generated: false,
          });
        } else {
          const videoData = await videoResponse.json();
          setVideoData({
            loading: false,
            exists: videoData.videoExists,
            path: videoData.videoPath,
            error: null,
            generated: videoData.generated || false,
          });
        }
      } catch (error) {
        console.error("Error fetching content:", error);
        setError(`Error loading content: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [courseName, chapterNumber, topicName]);

  const handleBack = () => {
    navigate(-1);
  };

  // Format topic name for display
  const formatTopicName = (name) => {
    return name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="topic-content-container max-w-4xl mx-auto p-4">
      {/* Header with back button */}
      <div className="mb-6">
        <button
          onClick={handleBack}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="ml-2">Back to Roadmap</span>
        </button>
      </div>

      {/* Content header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {formatTopicName(topicName)}
        </h1>
        <div className="text-gray-600">
          <span className="font-medium">{formatTopicName(courseName)}</span>
          <span className="mx-2">•</span>
          <span>Chapter {chapterNumber}</span>
        </div>
      </div>

      {/* Video section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Video Lecture</h2>

        {videoData.loading ? (
          <div className="flex justify-center py-8 mb-6">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : videoData.exists ? (
          <div className="mb-6">
            {videoData.generated && (
              <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
                ✅ Video was just generated for you!
              </div>
            )}
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-full object-cover"
                src={`http://localhost:3000${videoData.path}`}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
            {videoData.error || "No video lecture available for this topic."}
          </div>
        )}
      </div>

      {/* Text content section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Text Content</h2>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        ) : (
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
      <button
        onClick={() =>
          navigate(
            `/quizpage?courseName=${encodeURIComponent(
              courseName
            )}&chapterNumber=${encodeURIComponent(
              chapterNumber
            )}&topicName=${encodeURIComponent(topicName)}`
          )
        }
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        Go to Quiz
      </button>
    </div>
  );
};

export default TopicContent;
