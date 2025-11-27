import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Initialize Gemini client safely. If no key, we will handle it in the UI.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateBuildAdvice = async (query: string): Promise<string> => {
  if (!ai) {
    return "Error: No API Key provided in environment variables.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model,
      contents: query,
      config: {
        systemInstruction: "You are a world-class Smite 2 coach and analyst. Provide concise, strategic advice on god builds, counters, and playstyles. Focus on Smite 2 mechanics (like Strength vs Intelligence scaling). Keep answers under 150 words.",
        maxOutputTokens: 300,
      }
    });

    return response.text || "The Oracle is silent right now. Try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Oracle is clouded (API Error).";
  }
};
