export const INSTITUTE_CONFIG = {
  brandName: "DISHA CLASSES",
  hindiBrandName: "दिशा क्लासेज",
  tagline: "Your Future. Your Direction. Your Disha.",
  heroHeadline: {
    line1: "YOUR DREAMS.",
    line2: "YOUR DIRECTION.",
    line3: "YOUR DISHA.",
  },
  heroSubheadline:
    "Building strong foundations, developing confident minds, and guiding students towards the future they deserve in Mumbai.",
  philosophyHeadline:
    "EDUCATION IS NOT JUST ABOUT MARKS. IT'S ABOUT DIRECTION.",
  philosophySubtext:
    "At Disha Classes, we believe true academic transformation happens when disciplined mentorship meets personalized guidance. Every student has unique potential—we provide the clarity, methodology, and direction to realize it.",
  
  principles: [
    {
      number: "01",
      title: "Strong Foundations",
      description:
        "Deep conceptual understanding before problem solving. We eliminate rote learning and build intuitive mastery.",
    },
    {
      number: "02",
      title: "Personal Guidance",
      description:
        "Small batch sizes, one-on-one doubt clarification, and individualized academic roadmaps for every student.",
    },
    {
      number: "03",
      title: "Consistent Growth",
      description:
        "Continuous performance tracking, adaptive test series, and milestone feedback that turns ambition into top results.",
    },
  ],

  // Core verified branches
  branches: {
    wadala: {
      id: "wadala",
      name: "Wadala Center (Main Branch)",
      badge: "Verified Branch",
      address:
        "Shop Number 469, 7/40, Sir Pochkhan Wala Road, Bhaiya Saheb Nagar, Panchashila Nagar, Wadala, Mumbai, Maharashtra 400037",
      phone: "+919224657102",
      displayPhone: "+91 92246 57102",
      whatsappNumber: "919224657102",
      timings: "Monday – Saturday: 9:00 AM – 8:30 PM | Sunday: 9:00 AM – 2:00 PM",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=Shop+Number+469+Sir+Pochkhan+Wala+Road+Wadala+Mumbai+400037",
      isVerifiedAddress: true,
      notes: "Walk-in counseling and admissions desk open daily.",
    },
    matunga: {
      id: "matunga",
      name: "Matunga Center",
      badge: "Admissions & Counseling Desk",
      address:
        "Matunga Central Location, Mumbai (Contact administrative office for exact classroom wing & counseling session schedule)",
      phone: "+919224657102", // routed via central administrative office to prevent fabricated numbers
      displayPhone: "+91 92246 57102 (Central Helpline)",
      whatsappNumber: "919224657102",
      timings: "By Appointment / Scheduled Batches",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=Matunga+Mumbai",
      isVerifiedAddress: false, // kept clearly configurable per prompt rules
      notes:
        "Matunga branch counseling sessions scheduled via the central helpline. Batch timings and classroom batch wings are confirmed upon admission verification.",
    },
  },

  socials: {
    instagram: "https://instagram.com/dishaclasses", // Official account verification in progress
    facebook: "https://facebook.com/dishaclasses",
    whatsapp: "https://wa.me/919224657102",
  },
};
