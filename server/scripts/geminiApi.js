const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const GEMINI_API_KEY = "";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const summarizeContent = async (textContent) => {
  try {
    console.log("Sending content to Gemini for summarization...");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `
    you will get a raw text which has a ton of useless data which are not required
your task is to remove that data and then summarize the data in the following format

there should be headdings in <h1/> the paragarphs should b in <p/>tags and write the necessary code with tailwind for the code snippets. additionally you can use <li/> and <ul/> tags where ever necessary
Summarize the following content in a clear and concise manner. 
Make sure to preserve key points and important details:
Explain each and every topic in a very consise and clear manner. dive deep into each topic and write near 4000-5000 words of content.

NOTE - if the textcontent is ""Failed to generate summary"" then generate the summary accordingly and do not use the textcontent in the summary.

${textContent}

[NOTE: Do not add extra narration. if some data is not found in the textcontent then generate that data accordingly]
    `;

    const response = await model.generateContent([prompt]);
    const result = response.response.text();

    console.log("Summarized content received:", result);
    return result;
  } catch (error) {
    console.error("Error summarizing content:", error);
    return "Failed to generate summary.";
  }
};

module.exports = summarizeContent;
