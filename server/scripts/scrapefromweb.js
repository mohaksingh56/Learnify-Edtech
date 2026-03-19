const puppeteer = require("puppeteer");
const path = require("path");

async function searchTopLinks(keyword) {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(
      `${keyword} (tutorial OR guide OR article OR study material OR research OR PDF OR syllabus)`
    )}&cc=US&setlang=en-US`;

    await page.goto(searchUrl, { waitUntil: "networkidle2" });
    await page.waitForSelector("h2 > a", { timeout: 100000 });

    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("h2 > a"))
        .map((a) => a.href)
        .filter(
          (href) =>
            href.startsWith("http") &&
            !href.includes("bing.com/videos") && // Exclude Bing Videos
            !href.includes("bing.com/news") &&
            !href.includes("coursera") &&
            !href.includes("udemy") &&
            !href.includes("edx") &&
            !href.includes("course") &&
            !href.includes("skillshare") &&
            !href.includes("khanacademy") &&
            !href.includes("freshworks") &&
            !href.includes("mitsloan")
        )
        .slice(0, 1);
    });

    await browser.close();
    return links;
  } catch (error) {
    console.error("Error fetching links:", error);
    return [];
  }
}

async function scrapeArticleContent(url) {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2", timeout: 100000 });

    const content = await page.evaluate(() => {
      let text = "";

      document.querySelectorAll("h1, h2, h3, ul > li").forEach((el) => {
        text += el.innerText.trim() + "\n\n";
      });

      return text.trim();
    });

    await browser.close();
    return content;
  } catch (error) {
    console.error(`❌ Error scraping ${url}:`, error);
    return "Failed to scrape content.";
  }
}

async function ScrapeContent(keyword) {
  console.log(`\n🔍 Searching for: ${keyword}`);

  const topLinks = await searchTopLinks(keyword);
  if (topLinks.length === 0) {
    console.log("No search results found.");
    return "No search results found.";
  }

  let combinedContent = `Search results for "${keyword}":\n\n`;

  for (const link of topLinks) {
    combinedContent += `URL: ${link}\n\n`;
    console.log(`Scraping content from: ${link}`);
    const content = await scrapeArticleContent(link);
    combinedContent +=
      content + "\n\n============================================\n\n";
  }

  return combinedContent;
}

module.exports = ScrapeContent;

// (async () => {
//   const keyword = "LLMs";
//   const content = await ScrapeContent(keyword);

//   console.log("\n📄 Final Scraped Content:\n");
//   console.log(content);
// })();
