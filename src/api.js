import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY })

export async function askGemini(userMessage) {
    const response = await ai.interactions.create({
        model: "gemini-3.6-flash",
        input: userMessage
    })

    return response.output_text
}