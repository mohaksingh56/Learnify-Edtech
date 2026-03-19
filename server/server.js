// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");
// const path = require("path");
// const ScrapeContent = require("./scripts/scrapefromweb");
// const summarizeContent = require("./scripts/geminiApi");
// const axios = require("axios"); // Add this for HTTP requests

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Welcome to my server!");
// });

// // Existing endpoints...

// app.post("/summarize-course", async (req, res) => {
//   const courseText = req.body.courseText;

//   if (!courseText) {
//     return res
//       .status(400)
//       .json({ error: "Course text is required in request body." });
//   }

//   try {
//     // Extract course name
//     const courseNameMatch = courseText.match(/(?:Course Name|Title):\s*(.+)/i);
//     const rawCourseName = courseNameMatch
//       ? courseNameMatch[1].trim()
//       : "unnamed_course";
//     const safeCourseName = rawCourseName
//       .replace(/[^a-z0-9]/gi, "_")
//       .toLowerCase();

//     const courseDir = path.join(
//       __dirname,
//       "..",
//       "Global Storage",
//       "course_content",
//       safeCourseName
//     );

//     // ✅ Check if course has already been processed
//     if (fs.existsSync(courseDir)) {
//       return res.status(200).json({
//         message: `Course "${rawCourseName}" already exists and was previously processed.`,
//         courseDirectory: courseDir,
//       });
//     }

//     const savedFiles = [];

//     // Parse chapters and topics
//     const chapterRegex =
//       /Chapter\s(\d+):\s(.+?)\n([\s\S]+?)(?=(?:Chapter\s\d+:)|$)/g;
//     let match;

//     while ((match = chapterRegex.exec(courseText)) !== null) {
//       const chapterNum = match[1];
//       const chapterTitle = match[2].trim();
//       const topicsBlock = match[3];

//       const topicRegex = /-\sTopic\s(\d+):\s(.+)/g;
//       let topicMatch;

//       while ((topicMatch = topicRegex.exec(topicsBlock)) !== null) {
//         const topicNum = topicMatch[1];
//         const topicName = topicMatch[2].trim();

//         console.log(`\n🔍 Processing: ${topicName}`);
//         try {
//           const content = await ScrapeContent(topicName);
//           if (!content) throw new Error("Scrape failed");

//           const summary = await summarizeContent(content);

//           const safeTopicName = topicName
//             .replace(/[^a-z0-9]/gi, "_")
//             .toLowerCase();
//           const outputDir = path.join(
//             courseDir,
//             `chapter${chapterNum}`,
//             safeTopicName
//           );

//           fs.mkdirSync(outputDir, { recursive: true });

//           const filePath = path.join(outputDir, `${safeTopicName}.txt`);
//           fs.writeFileSync(filePath, summary, "utf-8");

//           savedFiles.push(filePath);
//           console.log(`✅ Saved: ${filePath}`);
//         } catch (err) {
//           console.error(`❌ Failed for "${topicName}":`, err.message);
//         }
//       }
//     }

//     res.json({
//       message: `Course "${rawCourseName}" processed and saved.`,
//       savedFiles,
//     });
//   } catch (error) {
//     console.error("❌ Error in processing course:", error);
//     res.status(500).json({ error: "Failed to process the course content." });
//   }
// });

// app.get("/api/file-content", (req, res) => {
//   const { courseName, chapterNumber, topicName } = req.query;

//   if (!courseName || !chapterNumber || !topicName) {
//     return res.status(400).json({
//       error:
//         "Missing required parameters: courseName, chapterNumber, or topicName",
//     });
//   }

//   // Format the parameters to match your file structure
//   const safeCourseName = courseName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
//   const safeTopicName = topicName.replace(/[^a-z0-9]/gi, "_").toLowerCase();

//   const filePath = path.join(
//     __dirname,
//     "..",
//     "Global Storage",
//     "course_content",
//     safeCourseName,
//     `chapter${chapterNumber}`,
//     safeTopicName,
//     `${safeTopicName}.txt`
//   );

//   // Check if file exists
//   fs.access(filePath, fs.constants.F_OK, (err) => {
//     if (err) {
//       console.error(`File not found: ${filePath}`, err);
//       return res.status(404).json({ error: "File not found" });
//     }

//     // Read and send file content
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) {
//         console.error(`Error reading file: ${filePath}`, err);
//         return res.status(500).json({ error: "Failed to read file" });
//       }

//       res.json({ content: data });
//     });
//   });
// });

// // New endpoint to handle video file requests
// app.get("/api/video-content", async (req, res) => {
//   const { courseName, chapterNumber, topicName } = req.query;

//   if (!courseName || !chapterNumber || !topicName) {
//     return res.status(400).json({
//       error:
//         "Missing required parameters: courseName, chapterNumber, or topicName",
//     });
//   }

//   // Format the parameters to match your file structure
//   const safeCourseName = courseName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
//   const safeTopicName = topicName.replace(/[^a-z0-9]/gi, "_").toLowerCase();

//   // Define video file path
//   const videoDir = path.join(
//     __dirname,
//     "..",
//     "Global Storage",
//     "course_content",
//     safeCourseName,
//     `chapter${chapterNumber}`,
//     safeTopicName
//   );

//   // Check if directory exists, create if not
//   if (!fs.existsSync(videoDir)) {
//     fs.mkdirSync(videoDir, { recursive: true });
//   }

//   // Check for video files with common extensions
//   const videoExtensions = [".mp4", ".webm", ".avi", ".mov"];
//   let videoFile = null;

//   for (const ext of videoExtensions) {
//     const potentialVideoPath = path.join(videoDir, `${safeTopicName}${ext}`);
//     if (fs.existsSync(potentialVideoPath)) {
//       videoFile = potentialVideoPath;
//       break;
//     }
//   }

//   // If video exists, return the path
//   if (videoFile) {
//     res.json({
//       videoExists: true,
//       videoPath: `/video-stream?path=${encodeURIComponent(videoFile)}`,
//     });
//   } else {
//     // Video doesn't exist, try to generate it
//     try {
//       console.log(`🎬 Generating video for: ${topicName}`);

//       const generateResponse = await axios.post(
//         "http://127.0.0.1:5005/generate_lecture",
//         {
//           courseName: safeCourseName,
//           chapterNumber: chapterNumber,
//           topic: safeTopicName,
//         }
//       );

//       if (generateResponse.status === 200) {
//         // Assuming the service returns the path or filename of the generated video
//         const generatedVideoPath =
//           generateResponse.data.videoPath ||
//           path.join(videoDir, `${safeTopicName}.mp4`);

//         // Check if video was actually created
//         if (fs.existsSync(generatedVideoPath)) {
//           res.json({
//             videoExists: true,
//             videoPath: `/video-stream?path=${encodeURIComponent(
//               generatedVideoPath
//             )}`,
//             generated: true,
//           });
//         } else {
//           throw new Error(
//             "Video generation claimed success but file wasn't created"
//           );
//         }
//       } else {
//         throw new Error(
//           `Video generation failed with status: ${generateResponse.status}`
//         );
//       }
//     } catch (error) {
//       console.error("❌ Error generating video:", error);
//       res.status(500).json({
//         videoExists: false,
//         error: `Failed to generate video: ${error.message}`,
//       });
//     }
//   }
// });

// // Add endpoint to stream video files
// app.get("/video-stream", (req, res) => {
//   const filePath = req.query.path;

//   if (!filePath) {
//     return res.status(400).send("Video path is required");
//   }

//   // Security check to prevent path traversal attacks
//   const normalizedPath = path.normalize(filePath);
//   const basePath = path.join(__dirname, "..", "Global Storage");

//   if (!normalizedPath.startsWith(basePath)) {
//     return res.status(403).send("Access denied");
//   }

//   // Check if file exists
//   fs.access(normalizedPath, fs.constants.F_OK, (err) => {
//     if (err) {
//       return res.status(404).send("Video not found");
//     }

//     // Get file stats
//     const stat = fs.statSync(normalizedPath);
//     const fileSize = stat.size;
//     const range = req.headers.range;

//     if (range) {
//       // Handle range requests for video streaming
//       const parts = range.replace(/bytes=/, "").split("-");
//       const start = parseInt(parts[0], 10);
//       const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
//       const chunksize = end - start + 1;
//       const file = fs.createReadStream(normalizedPath, { start, end });

//       res.writeHead(206, {
//         "Content-Range": `bytes ${start}-${end}/${fileSize}`,
//         "Accept-Ranges": "bytes",
//         "Content-Length": chunksize,
//         "Content-Type": "video/mp4", // Adjust content type as needed
//       });

//       file.pipe(res);
//     } else {
//       // Send entire file
//       res.writeHead(200, {
//         "Content-Length": fileSize,
//         "Content-Type": "video/mp4", // Adjust content type as needed
//       });

//       fs.createReadStream(normalizedPath).pipe(res);
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`🚀 Server is running on port ${port}`);
// });

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const ScrapeContent = require("./scripts/scrapefromweb");
const summarizeContent = require("./scripts/geminiApi");
const axios = require("axios"); // Add this for HTTP requests

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

// Existing endpoints...

app.post("/summarize-course", async (req, res) => {
  const courseText = req.body.courseText;

  if (!courseText) {
    return res
      .status(400)
      .json({ error: "Course text is required in request body." });
  }

  try {
    // Extract course name
    const courseNameMatch = courseText.match(/(?:Course Name|Title):\s*(.+)/i);
    const rawCourseName = courseNameMatch
      ? courseNameMatch[1].trim()
      : "unnamed_course";
    const safeCourseName = rawCourseName
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase();

    const courseDir = path.join(
      __dirname,
      "..",
      "Global Storage",
      "course_content",
      safeCourseName
    );

    // ✅ Check if course has already been processed
    if (fs.existsSync(courseDir)) {
      return res.status(200).json({
        message: `Course "${rawCourseName}" already exists and was previously processed.`,
        courseDirectory: courseDir,
      });
    }

    const savedFiles = [];

    // Parse chapters and topics
    const chapterRegex =
      /Chapter\s(\d+):\s(.+?)\n([\s\S]+?)(?=(?:Chapter\s\d+:)|$)/g;
    let match;

    while ((match = chapterRegex.exec(courseText)) !== null) {
      const chapterNum = match[1];
      const chapterTitle = match[2].trim();
      const topicsBlock = match[3];

      const topicRegex = /-\sTopic\s(\d+):\s(.+)/g;
      let topicMatch;

      while ((topicMatch = topicRegex.exec(topicsBlock)) !== null) {
        const topicNum = topicMatch[1];
        const topicName = topicMatch[2].trim();

        console.log(`\n🔍 Processing: ${topicName}`);
        try {
          const content = await ScrapeContent(topicName);
          if (!content) throw new Error("Scrape failed");

          const summary = await summarizeContent(content);

          const safeTopicName = topicName
            .replace(/[^a-z0-9]/gi, "_")
            .toLowerCase();
          const outputDir = path.join(
            courseDir,
            `chapter${chapterNum}`,
            safeTopicName
          );

          fs.mkdirSync(outputDir, { recursive: true });

          const filePath = path.join(outputDir, `${safeTopicName}.txt`);
          fs.writeFileSync(filePath, summary, "utf-8");

          savedFiles.push(filePath);
          console.log(`✅ Saved: ${filePath}`);
        } catch (err) {
          console.error(`❌ Failed for "${topicName}":`, err.message);
        }
      }
    }

    res.json({
      message: `Course "${rawCourseName}" processed and saved.`,
      savedFiles,
    });
  } catch (error) {
    console.error("❌ Error in processing course:", error);
    res.status(500).json({ error: "Failed to process the course content." });
  }
});

app.get("/api/file-content", (req, res) => {
  const { courseName, chapterNumber, topicName } = req.query;

  if (!courseName || !chapterNumber || !topicName) {
    return res.status(400).json({
      error:
        "Missing required parameters: courseName, chapterNumber, or topicName",
    });
  }

  // Format the parameters to match your file structure
  const safeCourseName = courseName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  const safeTopicName = topicName.replace(/[^a-z0-9]/gi, "_").toLowerCase();

  const filePath = path.join(
    __dirname,
    "..",
    "Global Storage",
    "course_content",
    safeCourseName,
    `chapter${chapterNumber}`,
    safeTopicName,
    `${safeTopicName}.txt`
  );

  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`File not found: ${filePath}`, err);
      return res.status(404).json({ error: "File not found" });
    }

    // Read and send file content
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(`Error reading file: ${filePath}`, err);
        return res.status(500).json({ error: "Failed to read file" });
      }

      res.json({ content: data });
    });
  });
});

// New endpoint to generate quiz using Gemini API
// New endpoint to generate quiz using Gemini API
app.post("/api/generate-quiz", async (req, res) => {
  try {
    const { content, questionCount = 5 } = req.body;

    if (!content) {
      return res
        .status(400)
        .json({ error: "Content is required to generate quiz" });
    }

    console.log("🧠 Generating quiz with Gemini API...");

    // Import the Google Generative AI library
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    // Initialize the API with the key
    const GEMINI_API_KEY =
      process.env.GEMINI_API_KEY || "";
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    // Get the model - using the same version as in your summarization code
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `
      Generate a quiz based on the following educational content. 
      Return ONLY a JSON object with the following structure:
      {
        "questions": [
          {
            "question": "Question text here",
            "options": ["Option A", "Option B", "Option C", "Option D"],
            "correctAnswer": 0  // Index of correct answer (0-3)
          }
        ]
      }
      
      Create exactly ${questionCount} multiple choice questions with 4 options each.
      Make sure the questions test understanding of key concepts from the content.
      Ensure the JSON is valid and properly formatted.
      
      Content to base the quiz on:
      ${content}
    `;

    // Generate content using the model
    const response = await model.generateContent([prompt]);
    const textResponse = response.response.text();

    // Process the response to ensure we have valid JSON
    let quizData;

    try {
      // Check if the response is wrapped in code blocks and extract just the JSON
      const jsonMatch = textResponse.match(/```json\n([\s\S]*?)\n```/) ||
        textResponse.match(/```\n([\s\S]*?)\n```/) || [null, textResponse];

      // Clean up the text and parse JSON
      const cleanedJson = jsonMatch[1] || textResponse;
      quizData = JSON.parse(cleanedJson);

      // Validate the structure
      if (!quizData.questions || !Array.isArray(quizData.questions)) {
        throw new Error("Invalid quiz data structure");
      }
    } catch (parseError) {
      console.error("Error parsing Gemini response:", parseError);
      console.log("Raw response:", textResponse);
      return res
        .status(500)
        .json({ error: "Failed to parse quiz data from API response" });
    }

    console.log("✅ Quiz generated successfully");
    res.json(quizData);
  } catch (error) {
    console.error("❌ Error generating quiz:", error);
    res.status(500).json({
      error: "Failed to generate quiz",
      details: error.message,
    });
  }
});

// New endpoint to handle video file requests
app.get("/api/video-content", async (req, res) => {
  const { courseName, chapterNumber, topicName } = req.query;

  if (!courseName || !chapterNumber || !topicName) {
    return res.status(400).json({
      error:
        "Missing required parameters: courseName, chapterNumber, or topicName",
    });
  }

  // Format the parameters to match your file structure
  const safeCourseName = courseName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  const safeTopicName = topicName.replace(/[^a-z0-9]/gi, "_").toLowerCase();

  // Define video file path
  const videoDir = path.join(
    __dirname,
    "..",
    "Global Storage",
    "course_content",
    safeCourseName,
    `chapter${chapterNumber}`,
    safeTopicName
  );

  // Check if directory exists, create if not
  if (!fs.existsSync(videoDir)) {
    fs.mkdirSync(videoDir, { recursive: true });
  }

  // Check for video files with common extensions
  const videoExtensions = [".mp4", ".webm", ".avi", ".mov"];
  let videoFile = null;

  for (const ext of videoExtensions) {
    const potentialVideoPath = path.join(videoDir, `${safeTopicName}${ext}`);
    if (fs.existsSync(potentialVideoPath)) {
      videoFile = potentialVideoPath;
      break;
    }
  }

  // If video exists, return the path
  if (videoFile) {
    res.json({
      videoExists: true,
      videoPath: `/video-stream?path=${encodeURIComponent(videoFile)}`,
    });
  } else {
    // Video doesn't exist, try to generate it
    try {
      console.log(`🎬 Generating video for: ${topicName}`);

      const generateResponse = await axios.post(
        "http://127.0.0.1:5005/generate_lecture",
        {
          courseName: safeCourseName,
          chapterNumber: chapterNumber,
          topic: safeTopicName,
        }
      );

      if (generateResponse.status === 200) {
        // Assuming the service returns the path or filename of the generated video
        const generatedVideoPath =
          generateResponse.data.videoPath ||
          path.join(videoDir, `${safeTopicName}.mp4`);

        // Check if video was actually created
        if (fs.existsSync(generatedVideoPath)) {
          res.json({
            videoExists: true,
            videoPath: `/video-stream?path=${encodeURIComponent(
              generatedVideoPath
            )}`,
            generated: true,
          });
        } else {
          throw new Error(
            "Video generation claimed success but file wasn't created"
          );
        }
      } else {
        throw new Error(
          `Video generation failed with status: ${generateResponse.status}`
        );
      }
    } catch (error) {
      console.error("❌ Error generating video:", error);
      res.status(500).json({
        videoExists: false,
        error: `Failed to generate video: ${error.message}`,
      });
    }
  }
});

// Add endpoint to stream video files
app.get("/video-stream", (req, res) => {
  const filePath = req.query.path;

  if (!filePath) {
    return res.status(400).send("Video path is required");
  }

  // Security check to prevent path traversal attacks
  const normalizedPath = path.normalize(filePath);
  const basePath = path.join(__dirname, "..", "Global Storage");

  if (!normalizedPath.startsWith(basePath)) {
    return res.status(403).send("Access denied");
  }

  // Check if file exists
  fs.access(normalizedPath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send("Video not found");
    }

    // Get file stats
    const stat = fs.statSync(normalizedPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      // Handle range requests for video streaming
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = end - start + 1;
      const file = fs.createReadStream(normalizedPath, { start, end });

      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": "video/mp4", // Adjust content type as needed
      });

      file.pipe(res);
    } else {
      // Send entire file
      res.writeHead(200, {
        "Content-Length": fileSize,
        "Content-Type": "video/mp4", // Adjust content type as needed
      });

      fs.createReadStream(normalizedPath).pipe(res);
    }
  });
});

app.post("/api/save-quiz-data", async (req, res) => {
  const {
    courseName,
    chapterNumber,
    topicName,
    questions,
    userAnswers,
    score,
  } = req.body;

  const safeCourseName = courseName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  const safeTopicName = topicName.replace(/[^a-z0-9]/gi, "_").toLowerCase();

  const dirPath = path.join(
    __dirname,
    "..",
    "Global Storage",
    "course_content",
    safeCourseName,
    `chapter${chapterNumber}`,
    safeTopicName
  );

  const filePath = path.join(dirPath, "quiz_data.json");

  try {
    fs.mkdirSync(dirPath, { recursive: true });

    const dataToSave = {
      timestamp: new Date().toISOString(),
      questions,
      userAnswers,
      score,
    };

    fs.writeFileSync(filePath, JSON.stringify(dataToSave, null, 2));
    res.json({ message: "Quiz data saved successfully" });
  } catch (err) {
    console.error("Error saving quiz data:", err);
    res.status(500).json({ error: "Failed to save quiz data" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
