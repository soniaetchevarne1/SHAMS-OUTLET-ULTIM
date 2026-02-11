
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_PROMPT = `Eres "Shams AI Stylist", un asistente de moda de alta gama y futurista para Shams Outlet en Rosario. 
Vendemos primeras marcas con precios imbatibles. 
Nuestra curaduría incluye: Perramus, Hunter, Nautica, Armesto, Blaque, Las Oreiro, Allo Martinez, Victoria Tucci, Vitamina, Uma, Besha, Swim Days y más.
Tu objetivo es recomendar outfits basados en el humor, eventos o preferencias del usuario. 
Manten un tono elegante, moderno e inspirador. Usa terminología de moda. 
Recuerda que somos un outlet exclusivo con descuentos que no se encuentran en otro lugar.
Responde siempre en ESPAÑOL. Sé conciso pero con estilo.`;

export async function getStylistResponse(history: Message[], userInput: string): Promise<string> {
  try {
    const chat = ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.8,
      }
    });

    const response = await chat;
    return response.text || "Mis disculpas, mis circuitos de estilo están recalibrando. ¿Cómo puedo ayudarte hoy?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "El futuro está un poco nublado ahora mismo. Por favor, intenta de nuevo en un momento.";
  }
}
