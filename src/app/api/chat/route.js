export async function POST(req) {
  const { question } = await req.json();

  // Normalize function
  const normalize = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .trim();

  const normalizedQuestion = normalize(question);

  // Your knowledge base
  const knowledgeBase = {
    "who is the ceo of codermat": "Shakil Ahmed is the CEO of CoderMat.",
    "who are the founders of codermat":
      "CoderMat was founded by Shakil Ahmed (CEO) and Nayeem Islam (Co-founder & Head of Development).",
    "who is nayeem islam":
      "Nayeem Islam is the Co-founder and Head of Development at CoderMat, overseeing all technical projects and development teams.",
    "who is sojib mallik":
      "Sojib Mallik is the Head of Marketing at CoderMat, leading our digital marketing, SEO, and client outreach strategies.",
    "what is codermat's pricing": `
      CoderMat's pricing is flexible and depends on the complexity and duration of the project. 
      - Basic Website: $300 - $800
      - Web Application: $1000 - $5000
      - UI/UX Design: $100 - $500 per screen
      - SEO Package: $200/month and up
      - API Integration: $100 - $1000 depending on complexity
      For accurate pricing, please contact us directly.
    `,
    "what services does codermat provide": `
      CoderMat provides:
      1. Custom Web Development
      2. Web Application Development
      3. UI/UX Design
      4. Web Maintenance & Support
      5. Digital Marketing
      6. SEO Services
      7. API Integration
      8. E-commerce Solutions
    `,
    "tell me about codermat":
      "CoderMat is a custom web development company specializing in creating tailored web solutions for businesses of all sizes.",
    "how can i contact codermat":
      "You can contact us at:\nEmail: contact@codermat.com\nPhone: +8801910882903\nAvailable Sunday–Thursday, 9AM–6PM (GMT+6)",
    "does codermat have a portfolio":
      "Yes! We've built e-commerce platforms, web apps, and dashboards. Contact us for industry-specific examples.",
    "where is codermat located":
      "Our headquarters is in Dhaka, Bangladesh, and we serve clients worldwide.",
    "can codermat build an ecommerce website":
      "Yes! We specialize in complete e-commerce solutions including catalogs, payment gateways, and SEO.",
    "does codermat offer seo":
      "Yes, we offer keyword research, on-page SEO, technical optimization, and more—starting at $200/month.",
    "what technologies does codermat use":
      "Frontend: React, Next.js, Tailwind CSS\nBackend: Node.js, Express\nDatabases: MongoDB, PostgreSQL",
    "how experienced is codermat's team":
      "Team members have 3–5+ years experience. We've delivered 50+ successful projects.",
    "what is codermat's development timeline":
      "Basic sites: 1–2 weeks\nWeb apps: 3–8 weeks\nE-commerce: 4–12 weeks depending on complexity.",
    "does codermat provide ongoing support":
      "Yes! Maintenance plans start at $100/month including updates, security, backups, and monitoring.",
    "who is the developer head":
      "Nayeem Islam is the Co-founder and Head of Development at CoderMat.",
    "who is head of development":
      "Nayeem Islam leads the development team at CoderMat.",
    "who is nayeem":
      "Nayeem Islam is the Co-founder and Head of Development at CoderMat.",
    "who is sojib mollik": "Sojib Mallik is the Head of Marketing at CoderMat.",
    "who is marketing head":
      "Sojib Mallik manages marketing and SEO at CoderMat.",
    "tell me about pricing": `
      CoderMat offers competitive pricing:
      - Websites: $300–$800
      - Web Apps: $1000–$5000
      - SEO: From $200/month
      Contact us for a custom quote.
    `,
    "what are your rates":
      "Rates vary: Websites from $300, Apps from $1000, SEO from $200/month. Custom quotes available.",
    "how much does it cost":
      "It depends on the project. Basic websites start at $300. Apps can go up to $5000+.",
    "pricing details":
      "Provide project type and features for exact pricing. Typical ranges: Websites $300+, Apps $1000+, SEO $200+/mo.",
    // Extra keyword entries
    sojib:
      "Are you asking about Sojib Mallik? He is our Head of Marketing at CoderMat.",
    nayeem:
      "Are you asking about Nayeem Islam? He is our Co-founder and Head of Development.",
    pricing:
      "Pricing starts at $300 for websites and $200/month for SEO. Let us know your requirements for a quote.",
  };

  // Matching logic
  function findMatchingAnswer(input, kb) {
    const keys = Object.keys(kb);
    for (let key of keys) {
      const normalizedKey = normalize(key);

      // Exact match
      if (input === normalizedKey) return kb[key];

      // Partial match
      if (input.includes(normalizedKey) || normalizedKey.includes(input)) {
        return kb[key];
      }

      // Word overlap match (at least 2 common words)
      const inputWords = input.split(" ");
      const keyWords = normalizedKey.split(" ");
      const common = keyWords.filter((word) => inputWords.includes(word));
      if (common.length >= 2) {
        return kb[key];
      }
    }
    return null;
  }

  const predefinedAnswer = findMatchingAnswer(
    normalizedQuestion,
    knowledgeBase
  );

  if (predefinedAnswer) {
    return Response.json({ answer: predefinedAnswer });
  }

  // Fallback: AI
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer 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",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000/",
        "X-Title": "CoderMat Chatbot",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant who answers only CoderMat-specific questions. CoderMat is led by Shakil Ahmed. The current services include custom web development, web application development, UI/UX design, SEO, digital marketing, API integration, e-commerce solutions, and web maintenance. Please respond accurately with these details and direct all unrelated questions to the user for more specific assistance.",
          },
          {
            role: "user",
            content: question,
          },
        ],
      }),
    }
  );

  const data = await response.json();
  const message = data?.choices?.[0]?.message;
  const answer = message?.content || "Sorry, I couldn't find an answer.";

  return Response.json({ answer });
}
