import {
  Stethoscope, HeartPulse, FlaskConical, Syringe, Bandage,
  Activity, Ambulance, Scan, UserRound, Users, Pill, HandHeart,
} from "lucide-react";

export const services = [
  { icon: Stethoscope, title: "Doctor Visit @ Home", description: "Qualified doctors visit you at home for consultation, diagnosis and follow-ups." },
  { icon: Activity, title: "Physiotherapy @ Home", description: "Personalized physiotherapy sessions for recovery, mobility and pain relief." },
  { icon: FlaskConical, title: "Lab Service @ Home", description: "Sample collection and accurate lab tests delivered to your doorstep." },
  { icon: HeartPulse, title: "Nursing Care", description: "Trained nurses for short-term and long-term care, around the clock." },
  { icon: Pill, title: "Feeding Tube Change", description: "Safe and hygienic Ryle's tube and PEG tube changes by experts." },
  { icon: Ambulance, title: "Ambulance Service", description: "24/7 ambulance support for emergencies and patient transfers." },
  { icon: UserRound, title: "Elder Care", description: "Compassionate care plans tailored to seniors' daily needs and dignity." },
  { icon: Users, title: "Care Taker", description: "Reliable male and female caretakers for daily living assistance." },
  { icon: HandHeart, title: "Postoperative Care", description: "Recovery support after surgery — wound care, mobility and monitoring." },
  { icon: Syringe, title: "Injections", description: "IV, IM and subcutaneous injections administered safely at home." },
  { icon: Bandage, title: "Dressing Care", description: "Sterile wound dressing and ulcer care by trained professionals." },
  { icon: Scan, title: "X-ray @ Home", description: "Portable X-ray imaging at your home with quick reporting." },
] as const;
