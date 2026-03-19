import React, { useState } from 'react';

const QnA = () => {
  const [questionNumber, setQuestionNumber] = useState('');
  const [markingSchemeFile, setMarkingSchemeFile] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentAnswerFile, setStudentAnswerFile] = useState(null);

  const [uploadMessage, setUploadMessage] = useState('');
  const [answerMessage, setAnswerMessage] = useState('');
  const [gradingResults, setGradingResults] = useState([]);
  const [gradingMessage, setGradingMessage] = useState('');

  const API_BASE = 'http://localhost:8000/api';

  const handleUploadScheme = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', markingSchemeFile);
    formData.append('question_number', questionNumber);

    try {
      const res = await fetch(`${API_BASE}/upload-marking-scheme/`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setUploadMessage('✅ Marking scheme uploaded successfully.');
      } else {
        setUploadMessage('❌ Failed to upload marking scheme.');
      }
    } catch {
      setUploadMessage('❌ Network error during upload.');
    }
  };

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', studentAnswerFile);
    formData.append('student_name', studentName);
    formData.append('student_id', studentId);
    formData.append('question_number', questionNumber);

    try {
      const res = await fetch(`${API_BASE}/upload-student-answer/`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        setAnswerMessage('❌ Failed to submit answer.');
        return;
      }

      setAnswerMessage('⏳ Answer submitted. Grading in progress...');

      const gradeRes = await fetch(`${API_BASE}/start-grading/`, {
        method: 'POST'
      });

      if (!gradeRes.ok) {
        setAnswerMessage('❌ Grading failed.');
        return;
      }

      const data = await gradeRes.json();
      setGradingResults(data.graded_answers || []);
      setGradingMessage(data.message || '');
      setAnswerMessage('✅ Grading completed!');
    } catch {
      setAnswerMessage('❌ Network error during grading.');
    }
  };

  return (
    <div className="min-h-screen bg-[#fffff] text-white py-12 px-4 md:px-10 space-y-12 font-[Poppins]">
      
      {/* Section 1: Upload Marking Scheme */}
      <form onSubmit={handleUploadScheme} className="bg-white text-[#2C3E50] rounded-2xl shadow-lg p-8 space-y-4">
        <h2 className="text-3xl font-bold text-[#2C3E50]">1. Upload Marking Scheme</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <input
            type="text"
            value={questionNumber}
            onChange={(e) => setQuestionNumber(e.target.value)}
            placeholder="Question #"
            className="border border-gray-300 rounded-xl px-4 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-[#FFE08A]"
            required
          />
          <input
            type="file"
            onChange={(e) => setMarkingSchemeFile(e.target.files[0])}
            className="bg-[#FFE08A] text-[#2C3E50] px-3 py-2 rounded-xl cursor-pointer"
            required
          />
          <button
            type="submit"
            className="bg-[#FFE08A] hover:bg-yellow-300 text-[#2C3E50] font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-md"
          >
            Upload Scheme
          </button>
        </div>
        {uploadMessage && <p className="text-green-700 font-medium">{uploadMessage}</p>}
      </form>

      {/* Section 2: Submit Answer & Grade */}
      <form onSubmit={handleSubmitAnswer} className="bg-white text-[#2C3E50] rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-[#2C3E50]">2. Submit Answer & Grade</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Student Name"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFE08A]"
            required
          />
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Student ID"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFE08A]"
            required
          />
          <input
            type="text"
            value={questionNumber}
            onChange={(e) => setQuestionNumber(e.target.value)}
            placeholder="Question #"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFE08A]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#2C3E50] mb-1">Upload Answer File</label>
          <input
            type="file"
            onChange={(e) => setStudentAnswerFile(e.target.files[0])}
            className="bg-[#FFE08A] text-[#2C3E50] px-3 py-2 rounded-xl cursor-pointer"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FFE08A] hover:bg-yellow-300 text-[#2C3E50] font-semibold py-3 rounded-xl transition-all duration-300 shadow-md"
        >
          Submit & Grade
        </button>

        {answerMessage && <p className="text-green-700 font-medium mt-3">{answerMessage}</p>}
      </form>

      {/* Grading Message */}
      {gradingMessage && (
        <div className="text-xl font-semibold text-[#FFE08A] text-center">
          {gradingMessage}
        </div>
      )}

      {/* Results Table */}
      {gradingResults.length > 0 && (
        <div className="bg-white text-[#2C3E50] rounded-2xl shadow-lg p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">📊 Grading Results</h2>
          <table className="table-auto w-full border-collapse">
            <thead className="bg-[#FFE08A] text-[#2C3E50]">
              <tr>
                <th className="px-4 py-2 text-left">Student Name</th>
                <th className="px-4 py-2 text-left">Student ID</th>
                <th className="px-4 py-2 text-left">Question #</th>
                <th className="px-4 py-2 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {gradingResults.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 border-t">{row.student_name}</td>
                  <td className="px-4 py-2 border-t">{row.student_id}</td>
                  <td className="px-4 py-2 border-t">{row.question_number}</td>
                  <td className="px-4 py-2 border-t">{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default QnA;
