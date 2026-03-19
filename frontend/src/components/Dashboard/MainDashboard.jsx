import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";

const MainDashboard = () => {
  // Data for line chart (hours spent)
  const hoursData = [15, 20, 18, 25, 22, 30, 30];
  const daysLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  // Data for quiz bar chart
  const quizData = [15, 10, 20, 34, 25, 20, 30];

  // Data for answers bar chart
  const answerData = [65, 72, 80, 78.3, 68, 60, 75];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-6 max-w-6xl mx-auto">
        {/* Header with user info */}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl text-gray-900">Welcome Nikhil</h1>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600">👤</span>
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-gray-600">🔔</span>
            </div>
          </div>
        </div>
        
        {/* Stat Cards Row */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {/* Enrolled Courses Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <span className="text-green-600 text-2xl">📚</span>
              </div>
              <div>
                <div className="text-2xl font-bold">4</div>
                <div className="text-gray-500 text-sm">Enrolled courses</div>
              </div>
            </div>
            <div className="mt-4 pt-2 border-t flex justify-between items-center">
              <span className="text-blue-600 text-sm">View Details</span>
              <span className="text-blue-600">→</span>
            </div>
          </div>
          
          {/* Quizzes Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-start space-x-3">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <span className="text-yellow-600 text-2xl">📝</span>
              </div>
              <div>
                <div className="text-2xl font-bold">10</div>
                <div className="text-gray-500 text-sm">Quizzes</div>
              </div>
            </div>
            <div className="mt-4 pt-2 border-t flex justify-between items-center">
              <span className="text-blue-600 text-sm">View Details</span>
              <span className="text-blue-600">→</span>
            </div>
          </div>
          
          {/* Completed Roadmaps Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <span className="text-green-600 text-2xl">🗺️</span>
              </div>
              <div>
                <div className="text-2xl font-bold">2</div>
                <div className="text-gray-500 text-sm">Completed roadmaps</div>
              </div>
            </div>
            <div className="mt-4 pt-2 border-t flex justify-between items-center">
              <span className="text-blue-600 text-sm">View Details</span>
              <span className="text-blue-600">→</span>
            </div>
          </div>
        </div>
        
        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Hours Spent Chart */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="text-xl font-semibold">30</div>
                <div className="text-gray-500 text-sm">Hours Spent</div>
              </div>
              <select className="text-sm border rounded p-1 bg-gray-50">
                <option>This week</option>
              </select>
            </div>
            <div className="h-48">
              <LineChart
                width={400}
                height={200}
                series={[
                  {
                    data: hoursData,
                    label: "",
                    color: "#2e7d32", // Dark green for line
                    area: false,
                    showMark: true,
                    lineWidth: 2,
                    markSize: 5,
                  },
                ]}
                xAxis={[{ scaleType: "point", data: daysLabels }]}
                yAxis={[
                  {
                    tickFormat: () => "",
                    stroke: "none",
                    disableTicks: true,
                    disableAxisLine: true,
                    position: "left",
                    axisLabel: "",
                  },
                ]}
                sx={{
                  ".MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                    display: "none",
                  },
                  ".MuiChartsAxis-left .MuiChartsAxis-line": {
                    display: "none",
                  },
                }}
              />
            </div>
          </div>
          
          {/* Lessons Chart */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Lessons</h3>
              <select className="text-sm border rounded p-1 bg-gray-50">
                <option>This week</option>
              </select>
            </div>
            
            <div className="bg-red-50 rounded-xl p-4">
              {/* Quizzes Bar Chart */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-semibold text-lg">34</div>
                  <div className="text-gray-500 text-sm">Quizzes</div>
                </div>
                <div style={{ width: "120px", height: "60px" }}>
                  <BarChart
                    width={120}
                    height={60}
                    series={[
                      {
                        data: quizData,
                        color: "#1976d2", // Blue bars
                        barWidth: 0.4,
                      },
                    ]}
                    xAxis={[
                      {
                        data: [1, 2, 3, 4, 5, 6, 7],
                        scaleType: "band",
                        disableTicks: true,
                        disableAxisLine: true,
                        disableGridLines: true,
                      },
                    ]}
                    yAxis={[
                      {
                        disableTicks: true,
                        disableAxisLine: true,
                        disableGridLines: true,
                      },
                    ]}
                    margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    sx={{
                      ".MuiChartsAxis-root": { display: "none" },
                    }}
                  />
                </div>
              </div>
              
              {/* Answers Bar Chart */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-lg">78.3%</div>
                  <div className="text-gray-500 text-sm">Answers</div>
                </div>
                <div style={{ width: "120px", height: "60px" }}>
                  <BarChart
                    width={120}
                    height={60}
                    series={[
                      {
                        data: answerData,
                        color: "#ff8f00", // Orange bars
                        barWidth: 0.4,
                      },
                    ]}
                    xAxis={[
                      {
                        data: [1, 2, 3, 4, 5, 6, 7],
                        scaleType: "band",
                        disableTicks: true,
                        disableAxisLine: true,
                        disableGridLines: true,
                      },
                    ]}
                    yAxis={[
                      {
                        disableTicks: true,
                        disableAxisLine: true,
                        disableGridLines: true,
                      },
                    ]}
                    margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    sx={{
                      ".MuiChartsAxis-root": { display: "none" },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Continue Learning Section */}
        <div className="mt-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-lg">Continue Learning</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search your courses..."
                    className="border border-gray-300 rounded-lg pl-3 pr-8 py-1 text-sm"
                  />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                    🔍
                  </span>
                </div>
                <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm">
                  See All
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 text-gray-500 font-medium text-sm px-4 pb-2">
              <div>Course Name</div>
              <div>Progress</div>
              <div className="text-right">Status</div>
            </div>
            
            {/* Course 1 */}
            <div className="bg-gray-50 p-4 rounded-lg mb-3 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-red-600 font-bold text-xs">LA</span>
              </div>
              <div className="flex-1">
                <div className="font-medium">Linear Algebra</div>
                <div className="text-gray-500 text-xs">5 hours • Advanced</div>
              </div>
              <div className="w-1/3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-2/5"></div>
                </div>
              </div>
              <div className="w-1/4 text-right flex justify-end items-center space-x-2">
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-xs">
                  In progress
                </span>
                <span className="text-blue-600">›</span>
              </div>
            </div>
            
            {/* Course 2 */}
            <div className="bg-gray-50 p-4 rounded-lg mb-3 flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-green-600 font-bold text-xs">DA</span>
              </div>
              <div className="flex-1">
                <div className="font-medium">Designing Algorithms</div>
                <div className="text-gray-500 text-xs">16 hours • Advanced</div>
              </div>
              <div className="w-1/3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-3/5"></div>
                </div>
              </div>
              <div className="w-1/4 text-right flex justify-end items-center space-x-2">
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-xs">
                  In progress
                </span>
                <span className="text-blue-600">›</span>
              </div>
            </div>
            
            {/* Course 3 */}
            <div className="bg-gray-50 p-4 rounded-lg flex items-center">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-teal-600 font-bold text-xs">BC</span>
              </div>
              <div className="flex-1">
                <div className="font-medium">Blockchain</div>
                <div className="text-gray-500 text-xs">9 hours • Intermediate</div>
              </div>
              <div className="w-1/3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="w-1/4 text-right flex justify-end items-center space-x-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-xs">
                  Completed
                </span>
                <span className="text-blue-600">›</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;