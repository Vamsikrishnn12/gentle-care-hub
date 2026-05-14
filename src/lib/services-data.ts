import {
  Stethoscope, HeartPulse, FlaskConical, Syringe, Bandage,
  Activity, Ambulance, Scan, UserRound, Users, Pill, HandHeart,
  Plane, Globe2, type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tagline: string;
  highlights: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "doctor-visit-at-home",
    icon: Stethoscope,
    title: "Doctor Visit @ Home",
    description: "Qualified doctors visit you at home for consultation, diagnosis and follow-ups.",
    tagline: "Hospital-quality consultation, in your living room.",
    highlights: [
      "General physicians and specialists on call",
      "Prescription and follow-up care",
      "Ideal for elderly, bedridden or post-op patients",
      "Same-day appointments available",
    ],
    process: [
      { step: "Book a visit", detail: "Call or message us with the patient's condition and address." },
      { step: "Doctor arrives", detail: "A qualified doctor visits with required equipment." },
      { step: "Care plan", detail: "Receive diagnosis, prescription and a follow-up plan." },
    ],
    faqs: [
      { q: "Which doctors are available?", a: "General physicians, geriatricians and specialists based on your need." },
      { q: "Do you carry medicines?", a: "Doctors carry essential supplies; pharmacy delivery can be arranged." },
    ],
  },
  {
    slug: "physiotherapy-at-home",
    icon: Activity,
    title: "Physiotherapy @ Home",
    description: "Personalized physiotherapy sessions for recovery, mobility and pain relief.",
    tagline: "Recover faster in familiar surroundings.",
    highlights: [
      "Post-surgery and stroke rehabilitation",
      "Joint pain, back pain and posture correction",
      "Geriatric mobility support",
      "Custom session plans by certified physios",
    ],
    process: [
      { step: "Assessment", detail: "Initial evaluation of mobility, pain and goals." },
      { step: "Therapy plan", detail: "Tailored plan with frequency and duration." },
      { step: "Sessions at home", detail: "Guided sessions and home exercises." },
    ],
    faqs: [
      { q: "How many sessions are needed?", a: "Depends on condition — typically 6–20 sessions over a few weeks." },
      { q: "Do you bring equipment?", a: "Yes, portable physio equipment is brought as needed." },
    ],
  },
  {
    slug: "lab-service-at-home",
    icon: FlaskConical,
    title: "Lab Service @ Home",
    description: "Sample collection and accurate lab tests delivered to your doorstep.",
    tagline: "Skip the queue. Tests done from home.",
    highlights: [
      "Blood, urine and routine pathology",
      "Trained phlebotomists",
      "NABL-partnered labs",
      "Digital reports via WhatsApp/email",
    ],
    process: [
      { step: "Schedule", detail: "Book preferred time slot for collection." },
      { step: "Sample collection", detail: "Hygienic collection at home." },
      { step: "Reports", detail: "Reports delivered digitally within hours." },
    ],
    faqs: [
      { q: "Are reports accepted by hospitals?", a: "Yes, we partner with accredited diagnostic labs." },
      { q: "Is fasting required?", a: "Depends on the test — we'll advise during booking." },
    ],
  },
  {
    slug: "nursing-care",
    icon: HeartPulse,
    title: "Nursing Care",
    description: "Trained nurses for short-term and long-term care, around the clock.",
    tagline: "Bedside nursing, 24/7.",
    highlights: [
      "12-hour and 24-hour shifts",
      "GNM and BSc trained nurses",
      "IV, catheter, tracheostomy care",
      "Regular vitals monitoring",
    ],
    process: [
      { step: "Care assessment", detail: "We understand the patient's medical and personal needs." },
      { step: "Nurse assignment", detail: "Matched nurse based on case complexity." },
      { step: "Ongoing supervision", detail: "Coordinator follow-up and shift handover." },
    ],
    faqs: [
      { q: "Can we choose male/female nurse?", a: "Yes, we accommodate preferences subject to availability." },
      { q: "What about night shifts?", a: "We provide round-the-clock shift-based nursing." },
    ],
  },
  {
    slug: "feeding-tube-change",
    icon: Pill,
    title: "Feeding Tube Change",
    description: "Safe and hygienic Ryle's tube and PEG tube changes by experts.",
    tagline: "Sterile, painless tube management.",
    highlights: [
      "Ryle's tube (NG) insertion and change",
      "PEG tube care and dressing",
      "Performed by experienced nurses",
      "Strict aseptic technique",
    ],
    process: [
      { step: "Pre-check", detail: "Verify patient stability and supplies." },
      { step: "Procedure", detail: "Sterile change with patient comfort in mind." },
      { step: "Aftercare", detail: "Feeding instructions and follow-up schedule." },
    ],
    faqs: [
      { q: "How often should the tube be changed?", a: "Typically every 2–4 weeks based on type and condition." },
      { q: "Will it hurt?", a: "Mild discomfort only; our nurses are trained to minimise it." },
    ],
  },
  {
    slug: "ambulance-service",
    icon: Ambulance,
    title: "Ambulance Service",
    description: "24/7 ambulance support for emergencies and patient transfers.",
    tagline: "Fast, equipped, and always on call.",
    highlights: [
      "Basic and advanced life support",
      "Trained paramedics on board",
      "Oxygen, suction, monitor equipped",
      "Inter-hospital transfers",
    ],
    process: [
      { step: "Call us", detail: "Share location and patient condition." },
      { step: "Dispatch", detail: "Nearest ambulance dispatched immediately." },
      { step: "Safe transfer", detail: "Stabilised transport to destination." },
    ],
    faqs: [
      { q: "Is the ambulance available 24/7?", a: "Yes, day and night, throughout the year." },
      { q: "Do paramedics travel with patient?", a: "Yes, trained paramedics are always on board." },
    ],
  },
  {
    slug: "elder-care",
    icon: UserRound,
    title: "Elder Care",
    description: "Compassionate care plans tailored to seniors' daily needs and dignity.",
    tagline: "Dignified care for our elders.",
    highlights: [
      "Daily living assistance",
      "Medication reminders",
      "Companionship and mobility support",
      "Dementia and Alzheimer's care",
    ],
    process: [
      { step: "Family consultation", detail: "Understand routines, preferences and health." },
      { step: "Care plan", detail: "Customised plan and caregiver match." },
      { step: "Continuous review", detail: "Regular check-ins with the family." },
    ],
    faqs: [
      { q: "Can caregivers stay overnight?", a: "Yes, live-in and 24-hour caregivers are available." },
      { q: "Are caregivers trained for dementia?", a: "Yes, specialised caregivers are available on request." },
    ],
  },
  {
    slug: "care-taker",
    icon: Users,
    title: "Care Taker",
    description: "Reliable male and female caretakers for daily living assistance.",
    tagline: "A trusted helping hand, every day.",
    highlights: [
      "Bathing, grooming and feeding support",
      "Mobility and transfer assistance",
      "Light housekeeping for patient area",
      "Background-verified attendants",
    ],
    process: [
      { step: "Requirement", detail: "Share schedule, gender preference and tasks." },
      { step: "Match", detail: "Verified caretaker assigned." },
      { step: "Support", detail: "Coordinator stays in touch for feedback." },
    ],
    faqs: [
      { q: "Do you provide replacements?", a: "Yes, immediate replacements on leave or mismatch." },
      { q: "Is verification done?", a: "All caretakers go through ID and background checks." },
    ],
  },
  {
    slug: "postoperative-care",
    icon: HandHeart,
    title: "Postoperative Care",
    description: "Recovery support after surgery — wound care, mobility and monitoring.",
    tagline: "Heal at home with expert support.",
    highlights: [
      "Wound and dressing care",
      "Vitals and recovery monitoring",
      "Pain management coordination",
      "Mobility and physio support",
    ],
    process: [
      { step: "Discharge planning", detail: "We coordinate with the hospital before discharge." },
      { step: "Home setup", detail: "Set up safe recovery environment." },
      { step: "Recovery care", detail: "Daily nursing visits or full-time support." },
    ],
    faqs: [
      { q: "How long is post-op care needed?", a: "Typically 1–4 weeks depending on the surgery." },
      { q: "Do you coordinate with surgeons?", a: "Yes, we follow the surgeon's instructions closely." },
    ],
  },
  {
    slug: "injections",
    icon: Syringe,
    title: "Injections",
    description: "IV, IM and subcutaneous injections administered safely at home.",
    tagline: "Safe injections without a hospital visit.",
    highlights: [
      "IV, IM and SC injections",
      "Insulin and hormone shots",
      "Sterile, single-use supplies",
      "Trained nurses",
    ],
    process: [
      { step: "Prescription check", detail: "We verify the prescription and dose." },
      { step: "Administration", detail: "Sterile, painless administration at home." },
      { step: "Observation", detail: "Brief monitoring for any reactions." },
    ],
    faqs: [
      { q: "Do you bring the medicine?", a: "We can arrange or you may provide it." },
      { q: "Are nurses trained for IV?", a: "Yes, all nurses are IV-certified." },
    ],
  },
  {
    slug: "dressing-care",
    icon: Bandage,
    title: "Dressing Care",
    description: "Sterile wound dressing and ulcer care by trained professionals.",
    tagline: "Faster healing, fewer infections.",
    highlights: [
      "Surgical wound dressing",
      "Diabetic and pressure ulcer care",
      "Burn dressing",
      "Strict aseptic technique",
    ],
    process: [
      { step: "Wound assessment", detail: "Evaluate wound type and stage." },
      { step: "Dressing", detail: "Use of right materials and technique." },
      { step: "Schedule", detail: "Repeat visits as advised." },
    ],
    faqs: [
      { q: "How often is dressing changed?", a: "Usually every 1–3 days depending on wound type." },
      { q: "Do you treat bedsores?", a: "Yes, including prevention and stage-wise care." },
    ],
  },
  {
    slug: "x-ray-at-home",
    icon: Scan,
    title: "X-ray @ Home",
    description: "Portable X-ray imaging at your home with quick reporting.",
    tagline: "Imaging at home — no movement, no stress.",
    highlights: [
      "Portable digital X-ray",
      "Ideal for bedridden patients",
      "Radiologist-reported images",
      "Quick turnaround",
    ],
    process: [
      { step: "Booking", detail: "Share doctor's prescription and address." },
      { step: "Imaging", detail: "Technician performs X-ray at home." },
      { step: "Report", detail: "Reports shared digitally with you and doctor." },
    ],
    faqs: [
      { q: "Is it safe at home?", a: "Yes, portable units use minimal radiation with safety protocols." },
      { q: "How long does it take?", a: "Imaging takes about 20–30 minutes; reports within hours." },
    ],
  },
  {
    slug: "nri-medical-tourism",
    icon: Globe2,
    title: "NRI Medical Tourism",
    description: "End-to-end medical tourism support for NRIs — hospital tie-ups, appointments, stay, transport and post-treatment home care.",
    tagline: "World-class treatment in India, organised end-to-end.",
    highlights: [
      "Hospital and specialist appointment booking",
      "Airport pickup, accommodation and local transport",
      "Translator and coordinator support",
      "Pre-treatment and post-treatment home care",
      "Insurance and document assistance",
      "Wellness and recovery stays",
    ],
    process: [
      { step: "Enquiry", detail: "Share medical reports and preferred treatment plan." },
      { step: "Treatment plan", detail: "We coordinate hospital options, estimates and timelines." },
      { step: "Travel & stay", detail: "Visa support, airport pickup, accommodation arranged." },
      { step: "Treatment", detail: "On-ground coordinator with you through admission and procedure." },
      { step: "Recovery", detail: "Home nursing, physiotherapy and follow-ups before you fly back." },
    ],
    faqs: [
      { q: "Which treatments do you support?", a: "Cardiac, orthopaedic, oncology, transplants, IVF, cosmetic and wellness." },
      { q: "Do you help with visa and insurance?", a: "Yes, we assist with medical visa invitation letters and insurance coordination." },
      { q: "Will family be accommodated?", a: "Yes, accommodation and local support are arranged for accompanying family." },
    ],
  },
  {
    slug: "patient-transfer-train-air",
    icon: Plane,
    title: "Patient Transfer (Train / Air)",
    description: "Safe long-distance transfer of sick patients via train or airways with trained medical escorts and equipment.",
    tagline: "Safe long-distance transfers, by rail or sky.",
    highlights: [
      "Train escort with nurse / paramedic",
      "Commercial flight medical escort service",
      "Air ambulance coordination",
      "Oxygen, suction and monitoring equipment",
      "Stretcher booking on trains and flights",
      "Door-to-door coordination",
    ],
    process: [
      { step: "Case review", detail: "Doctor's fit-to-fly / fit-to-travel assessment." },
      { step: "Mode selection", detail: "Train escort, commercial flight escort, or air ambulance." },
      { step: "Bookings", detail: "Tickets, stretcher, oxygen and ambulance at both ends." },
      { step: "Transfer", detail: "Trained escort accompanies patient throughout the journey." },
      { step: "Handover", detail: "Patient handed over safely at destination hospital or home." },
    ],
    faqs: [
      { q: "Do you arrange air ambulance?", a: "Yes, we coordinate domestic and international air ambulances." },
      { q: "Can the patient travel by regular train?", a: "Yes, with a stretcher booking and a trained medical escort." },
      { q: "Is oxygen provided in flight?", a: "Yes, we arrange airline-approved oxygen with prior clearance." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
