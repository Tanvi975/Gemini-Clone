import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY })

export async function askGemini(userMessage, imageBase64, imageMimeType) {
    if (imageBase64) {
        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: [{
                    inlineData: {
                        mimeType: imageMimeType,
                        data: imageBase64
                    }
                },
                { text: userMessage || "Describe this image." }
            ]
        })
        return response.text
    }

    const response = await ai.interactions.create({
        model: "gemini-3.6-flash",
        input: userMessage
    })

    return response.output_text
}