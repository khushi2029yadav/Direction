import { Branch } from "@/types";

export const BRANCHES_DATA: Branch[] = [
  {
    id: "wadala",
    name: "Wadala Branch (Head Center)",
    badge: "Verified Center",
    address:
      "Shop Number 469, 7/40, Sir Pochkhan Wala Road, Bhaiya Saheb Nagar, Panchashila Nagar, Wadala, Mumbai, Maharashtra 400037",
    phone: "+919224657102",
    displayPhone: "+91 92246 57102",
    whatsappNumber: "919224657102",
    email: "admissions.wadala@dishaclasses.in",
    timings: "Mon – Sat: 9:00 AM – 8:30 PM | Sun: 9:00 AM – 2:00 PM",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Shop+Number+469+7+40+Sir+Pochkhan+Wala+Road+Panchashila+Nagar+Wadala+Mumbai+400037",
    isVerifiedAddress: true,
    notes:
      "Equipped with spacious interactive classrooms, individual doubt consultation rooms, and a dedicated student study library.",
  },
  {
    id: "matunga",
    name: "Matunga Branch",
    badge: "Admissions & Counseling Wing",
    address:
      "Matunga Central Location, Mumbai (Exact classroom wing & scheduled batch timings confirmed via Central Office)",
    phone: "+919224657102",
    displayPhone: "+91 92246 57102",
    whatsappNumber: "919224657102",
    email: "admissions.matunga@dishaclasses.in",
    timings: "Scheduled Counseling Sessions & Batches (By Appointment)",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Matunga+Mumbai",
    isVerifiedAddress: false, // Explicitly marked configurable
    notes:
      "Serving students from Matunga, Dadar, and surrounding Central Mumbai areas. Contact our admissions counselor for batch allocation and visiting schedule.",
  },
];
