export interface WhatsAppOptions {
  phone?: string;
  courseName?: string;
  branchName?: string;
  customMessage?: string;
}

export const CENTRAL_WHATSAPP_NUMBER = "919224657102"; // Verified Wadala helpline

export function getWhatsAppUrl({
  phone = CENTRAL_WHATSAPP_NUMBER,
  courseName,
  branchName,
  customMessage,
}: WhatsAppOptions = {}): string {
  let message = "";

  if (customMessage) {
    message = customMessage;
  } else if (courseName && branchName) {
    message = `Hello Disha Classes, I am interested in learning more about ${courseName} at your ${branchName}. Please share batch timings, syllabus, and admission details.`;
  } else if (courseName) {
    message = `Hello Disha Classes, I am interested in learning more about ${courseName}. Please share the details.`;
  } else if (branchName) {
    message = `Hello Disha Classes, I would like to enquire about course offerings and admissions at the ${branchName}. Please guide me.`;
  } else {
    message = `Hello Disha Classes, I would like to enquire about admission and course details for my child/myself.`;
  }

  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
}

export function openWhatsApp(options: WhatsAppOptions = {}): void {
  const url = getWhatsAppUrl(options);
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
