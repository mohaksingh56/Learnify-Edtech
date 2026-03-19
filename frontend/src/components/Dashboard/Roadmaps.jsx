import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Roadmaps = () => {
  const [courseName, setCourseName] = useState("");
  const [summarizedFiles, setSummarizedFiles] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Fetch the course outline from Flask
      const courseRes = await fetch("http://127.0.0.1:5000/generate_course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course_name: courseName }),
      });

      const courseData = await courseRes.json();
      const courseText = courseData.course_outline.text;

      navigate("/roadmapdisplay", { state: { courseText } });

      console.log("Course Text:", courseText);

      // Step 2: Send the course text to summarize-course endpoint
      const summarizeRes = await fetch(
        "http://localhost:3000/summarize-course",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ courseText }),
        }
      );

      const summaryData = await summarizeRes.json();

      // Step 3: Save and show the file paths
      const files = summaryData.savedFiles || [];

      setSummarizedFiles(files);

      console.log(summarizedFiles);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-[50px] items-center justify-center h-screen ">
      <form onSubmit={handleSubmit} className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Create your own roadmap Here!!</h1>
        <div className="flex flex-row gap-4 border border-gray-700 p-3 rounded-2xl bg-[#f3f3f3] justify-center items-center px-5">
          <input
            type="text"
            placeholder="Enter a course name (e.g., AI Agents)"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="px-4 py-2 w-[600px] focus:outline-none"
            required
          />
          <button
            type="submit"
            className="text-gray-800 hover:text-black hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
              />
            </svg>
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-[20px] mt-[40px] w-full">
        <div className="flex gap-[5px] justify-evenly items-center content-center ">
          <div className="w-[31%] border-gray-400 border-1 rounded-2xl h-[200px] p-3 ">
            <h3 className="font-bold mb-[20px]">
              Deep Learning and architecture
            </h3>
            <h1 className="text-2xl font-normal ">
              Ch-6.2 Sigmoid Function and its uses{" "}
            </h1>
            <span className="text-sm text-gray-700 mb-[20px]">240 minutes</span>
            <div className="flex flex-row w-full justify-end">
              <div className="text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <mask id="ipSPlay0">
                      <g fill="none" stroke-linejoin="round" stroke-width="4">
                        <path
                          fill="#fff"
                          stroke="#fff"
                          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                        />
                        <path
                          fill="#000"
                          stroke="#000"
                          d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"
                        />
                      </g>
                    </mask>
                  </defs>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipSPlay0)"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-[31%] border-gray-400 border-1 rounded-2xl h-[200px] p-3 ">
            <h3 className="font-bold mb-[20px]">
              5G network
            </h3>
            <h1 className="text-2xl font-normal ">
              Ch-1.2 introduction to 5G network {" "}
            </h1>
            <span className="text-sm text-gray-700 mb-[20px]">240 minutes</span>
            <div className="flex flex-row w-full justify-end mt-[15px]">
              <div className="text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <mask id="ipSPlay0">
                      <g fill="none" stroke-linejoin="round" stroke-width="4">
                        <path
                          fill="#fff"
                          stroke="#fff"
                          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                        />
                        <path
                          fill="#000"
                          stroke="#000"
                          d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"
                        />
                      </g>
                    </mask>
                  </defs>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipSPlay0)"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-[31%] border-gray-400 border-1 rounded-2xl h-[200px] p-3 ">
            <h3 className="font-bold mb-[20px]">
              Solidity
            </h3>
            <h1 className="text-2xl font-normal ">
              Ch-1.2 First Solidity Contract{" "}
            </h1>
            <span className="text-sm text-gray-700 mb-[20px]">240 minutes</span>
            <div className="flex flex-row w-full justify-end mt-[15px]">
              <div className="text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <mask id="ipSPlay0">
                      <g fill="none" stroke-linejoin="round" stroke-width="4">
                        <path
                          fill="#fff"
                          stroke="#fff"
                          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                        />
                        <path
                          fill="#000"
                          stroke="#000"
                          d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"
                        />
                      </g>
                    </mask>
                  </defs>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipSPlay0)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
