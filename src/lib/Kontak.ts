import { ContactFormData } from "@/types/Contact";
import api from "./api-be";

export async function postContactInfo(body: ContactFormData) {
  try {
    const res = await api.post("", body, {
      baseURL: process.env.NEXT_PUBLIC_SCRIPT_GOOGLE_URL,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });
    return res;
  } catch (error) {
    console.error(error);
    throw new Error("Error Fetching Data");
  }
}
