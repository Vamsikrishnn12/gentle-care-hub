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
  image: string;
  imageAlt: string;
  longDescription: string[];
  bestFor: string[];
  includedDetails: string[];
  outcomes: string[];
  prepare: string[];
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
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Doctor consulting a patient during a home healthcare visit",
    longDescription: [
      "When a hospital visit is difficult, stressful or unnecessary, our doctor visit service brings medical attention directly to the patient. A qualified physician evaluates symptoms, reviews previous reports, checks vitals and explains the next steps in a way the family can act on with confidence.",
      "This is especially useful for senior citizens, bedridden patients, post-discharge reviews, fever, weakness, chronic illness follow-ups and cases where the family needs clear medical guidance before deciding whether hospital admission is required.",
    ],
    bestFor: ["Elderly patients who cannot travel comfortably", "Fever, weakness, infection symptoms and routine illness", "Post-hospital discharge review and medication correction", "Families who need a doctor's opinion at home"],
    includedDetails: ["Clinical examination and vitals check", "Prescription and medicine guidance", "Report review and follow-up advice", "Referral support if hospital care is needed"],
    outcomes: ["Faster medical decisions without waiting rooms", "Less travel strain for weak or bedridden patients", "Clear instructions for family members and caregivers"],
    prepare: ["Recent prescriptions and discharge summaries", "Current medicines and allergy details", "Any blood test, scan or X-ray reports"],
    highlights: ["General physicians and specialists on call", "Prescription and follow-up care", "Ideal for elderly, bedridden or post-op patients", "Same-day appointments available"],
    process: [
      { step: "Book a visit", detail: "Call or message us with the patient's condition and address." },
      { step: "Doctor arrives", detail: "A qualified doctor visits with required examination equipment." },
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
    image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Physiotherapist helping a patient with guided exercise at home",
    longDescription: [
      "Our home physiotherapy helps patients rebuild strength, movement and balance without the burden of travelling to a clinic. The therapist studies the condition, pain level, mobility limits and recovery goals before creating a practical plan that fits the patient's home environment.",
      "Sessions focus on safe movement, pain reduction, muscle strengthening and confidence. Families also receive simple exercise guidance so progress continues between visits.",
    ],
    bestFor: ["Stroke and paralysis recovery", "Post-fracture and post-surgery rehabilitation", "Back pain, knee pain, shoulder pain and arthritis", "Elderly patients with balance or walking difficulty"],
    includedDetails: ["Mobility and pain assessment", "Hands-on therapy and guided exercises", "Gait training, posture correction and balance work", "Home exercise plan with progress review"],
    outcomes: ["Improved movement and independence", "Reduced pain and stiffness", "Lower risk of falls and repeat injury"],
    prepare: ["Doctor's advice or physiotherapy prescription", "Comfortable clothing for exercise", "A small open space for movement practice"],
    highlights: ["Post-surgery and stroke rehabilitation", "Joint pain, back pain and posture correction", "Geriatric mobility support", "Custom session plans by certified physios"],
    process: [
      { step: "Assessment", detail: "Initial evaluation of mobility, pain and goals." },
      { step: "Therapy plan", detail: "Tailored plan with frequency and duration." },
      { step: "Sessions at home", detail: "Guided sessions and home exercises." },
    ],
    faqs: [
      { q: "How many sessions are needed?", a: "Depends on condition - typically 6-20 sessions over a few weeks." },
      { q: "Do you bring equipment?", a: "Yes, portable physio equipment is brought as needed." },
    ],
  },
  {
    slug: "lab-service-at-home",
    icon: FlaskConical,
    title: "Lab Service @ Home",
    description: "Sample collection and accurate lab tests delivered to your doorstep.",
    tagline: "Skip the queue. Tests done from home.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Healthcare professional preparing lab sample collection",
    longDescription: [
      "With lab service at home, routine and prescribed investigations can be completed without making the patient travel. A trained sample collection professional visits at the chosen time, follows hygiene protocols and coordinates testing through trusted diagnostic partners.",
      "Digital reports are shared quickly so the doctor and family can continue treatment decisions without delay.",
    ],
    bestFor: ["Routine health checkups", "Diabetes, thyroid, kidney and liver monitoring", "Fever profiles and infection screening", "Bedridden or elderly patients who need sample collection at home"],
    includedDetails: ["Blood, urine and routine pathology sample collection", "Safe labelling and transport of samples", "Digital report delivery", "Package guidance based on doctor's prescription"],
    outcomes: ["No waiting at diagnostic centers", "Timely reports for faster treatment decisions", "Comfortable testing for seniors and weak patients"],
    prepare: ["Doctor's test prescription", "Fasting status if required", "Patient ID and correct contact details for reports"],
    highlights: ["Blood, urine and routine pathology", "Trained phlebotomists", "NABL-partnered labs", "Digital reports via WhatsApp/email"],
    process: [
      { step: "Schedule", detail: "Book preferred time slot for collection." },
      { step: "Sample collection", detail: "Hygienic collection at home." },
      { step: "Reports", detail: "Reports delivered digitally within hours." },
    ],
    faqs: [
      { q: "Are reports accepted by hospitals?", a: "Yes, we partner with accredited diagnostic labs." },
      { q: "Is fasting required?", a: "Depends on the test - we'll advise during booking." },
    ],
  },
  {
    slug: "nursing-care",
    icon: HeartPulse,
    title: "Nursing Care",
    description: "Trained nurses for short-term and long-term care, around the clock.",
    tagline: "Bedside nursing, 24/7.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nurse providing attentive bedside care to a patient",
    longDescription: [
      "Professional nursing at home gives patients skilled bedside support while keeping them close to family. Our nurses help with medical tasks, daily monitoring, hygiene, medication schedules and recovery routines based on the patient's condition.",
      "Care can be arranged for a few hours, 12-hour shifts or 24-hour support. A coordinator follows up so families are not left alone to manage complex care.",
    ],
    bestFor: ["Bedridden patients needing daily medical support", "Post-surgery and post-ICU recovery", "IV, catheter, feeding tube or tracheostomy care", "Long-term chronic illness and palliative support"],
    includedDetails: ["Vitals monitoring and medicine administration", "IV line, catheter and tube care as advised", "Hygiene, positioning and bedsore prevention", "Shift handover and family updates"],
    outcomes: ["Hospital-like observation in a familiar home setting", "Reduced caregiver stress for family members", "Better continuity after discharge"],
    prepare: ["Doctor's orders and medication chart", "Patient bed space with basic hygiene supplies", "Emergency contact and hospital details"],
    highlights: ["12-hour and 24-hour shifts", "GNM and BSc trained nurses", "IV, catheter, tracheostomy care", "Regular vitals monitoring"],
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
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nurse preparing sterile clinical supplies for tube care",
    longDescription: [
      "Feeding tubes need careful handling because comfort, hygiene and correct placement all matter. Our trained professionals manage Ryle's tube and PEG tube care using sterile technique and patient-friendly communication.",
      "We also guide families on feeding position, flushing, warning signs and when to call for medical help, helping prevent avoidable discomfort and complications.",
    ],
    bestFor: ["Patients on Ryle's tube or PEG feeding", "Stroke, neurological or swallowing difficulty cases", "Bedridden patients needing scheduled tube change", "Families needing safe feeding guidance"],
    includedDetails: ["Tube change or insertion as appropriate", "Site cleaning and dressing guidance", "Feeding and flushing instructions", "Red-flag symptom advice"],
    outcomes: ["Safer feeding support at home", "Reduced infection and blockage risk", "More confidence for family caregivers"],
    prepare: ["Doctor's advice and tube size details", "Feeding tube and prescribed supplies if available", "Recent feeding schedule and any discomfort history"],
    highlights: ["Ryle's tube (NG) insertion and change", "PEG tube care and dressing", "Performed by experienced nurses", "Strict aseptic technique"],
    process: [
      { step: "Pre-check", detail: "Verify patient stability and supplies." },
      { step: "Procedure", detail: "Sterile change with patient comfort in mind." },
      { step: "Aftercare", detail: "Feeding instructions and follow-up schedule." },
    ],
    faqs: [
      { q: "How often should the tube be changed?", a: "Typically every 2-4 weeks based on type and condition." },
      { q: "Will it hurt?", a: "Mild discomfort only; our nurses are trained to minimise it." },
    ],
  },
  {
    slug: "ambulance-service",
    icon: Ambulance,
    title: "Ambulance Service",
    description: "24/7 ambulance support for emergencies and patient transfers.",
    tagline: "Fast, equipped, and always on call.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Ambulance ready for emergency patient transport",
    longDescription: [
      "In emergencies and planned transfers, every minute and every detail matters. Our ambulance service supports safe movement from home to hospital, hospital to hospital or hospital to home with trained staff and essential equipment.",
      "The coordinator collects location, patient condition and destination details so the right ambulance support can be arranged quickly and the receiving side can be informed when needed.",
    ],
    bestFor: ["Emergency hospital transport", "Inter-hospital transfer", "Discharge transport to home", "Patients needing oxygen or monitored movement"],
    includedDetails: ["Basic and advanced ambulance options", "Paramedic support during transport", "Oxygen and emergency support equipment", "Door-to-door transfer coordination"],
    outcomes: ["Faster response during urgent situations", "Safer movement for weak or critical patients", "Less confusion for families during transfer"],
    prepare: ["Exact pickup and destination address", "Patient condition and oxygen requirement", "Hospital contact or admission details"],
    highlights: ["Basic and advanced life support", "Trained paramedics on board", "Oxygen, suction, monitor equipped", "Inter-hospital transfers"],
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
    image: "https://images.unsplash.com/photo-1576765608866-5b51046452be?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Caregiver supporting an elderly person with warmth and respect",
    longDescription: [
      "Elder care is not only about tasks; it is about safety, routine, dignity and companionship. We build care around the senior's habits, health condition, mobility, food preferences and family expectations.",
      "From daily living support to medication reminders and gentle companionship, our caregivers help elders feel secure at home while families stay informed.",
    ],
    bestFor: ["Seniors living alone or needing daily assistance", "Elders with mobility limitations", "Dementia or Alzheimer's supervision", "Families who need dependable daytime or overnight support"],
    includedDetails: ["Bathing, grooming, feeding and mobility assistance", "Medication reminders and routine supervision", "Companionship and mental engagement", "Family updates and care plan review"],
    outcomes: ["More independence with safer daily routines", "Reduced loneliness and fall risk", "Peace of mind for children and relatives"],
    prepare: ["Daily routine, diet and medicine list", "Known behavior patterns or memory concerns", "Family contact and emergency instructions"],
    highlights: ["Daily living assistance", "Medication reminders", "Companionship and mobility support", "Dementia and Alzheimer's care"],
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
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Caretaker helping a patient with daily support at home",
    longDescription: [
      "A caretaker helps the patient move through the day with comfort, cleanliness and safety. This service is ideal when the family needs reliable hands for personal care and daily assistance, while medical decisions remain guided by doctors and nurses.",
      "We match male or female attendants based on patient comfort, schedule and task needs, with coordinator support for feedback and replacements.",
    ],
    bestFor: ["Patients needing help with bathing, feeding and movement", "Elderly people requiring daily supervision", "Post-discharge patients needing non-medical support", "Families needing dependable day or night attendants"],
    includedDetails: ["Personal hygiene and grooming support", "Bed-to-chair transfer and walking assistance", "Feeding support and patient area cleanliness", "Routine observation and family updates"],
    outcomes: ["Cleaner, safer and more comfortable daily care", "Less physical strain on family members", "Consistent support from a verified attendant"],
    prepare: ["Patient routine and preferred schedule", "Gender preference if any", "Basic supplies for hygiene and meals"],
    highlights: ["Bathing, grooming and feeding support", "Mobility and transfer assistance", "Light housekeeping for patient area", "Background-verified attendants"],
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
    description: "Recovery support after surgery - wound care, mobility and monitoring.",
    tagline: "Heal at home with expert support.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nurse supporting a patient during recovery after surgery",
    longDescription: [
      "The days after surgery decide how smoothly recovery moves. Our postoperative care supports the patient after discharge with wound care, medication reminders, vitals monitoring, mobility support and coordination with the surgeon's advice.",
      "Families receive clear guidance on what is normal, what needs attention and how to keep the recovery environment safe.",
    ],
    bestFor: ["Patients returning home after surgery", "Orthopaedic, abdominal, cardiac or general surgery recovery", "Patients needing dressing, injections or catheter care", "Families managing discharge instructions at home"],
    includedDetails: ["Wound dressing and infection watch", "Vitals monitoring and medication schedule support", "Mobility assistance and physiotherapy coordination", "Doctor instruction follow-up"],
    outcomes: ["Smoother recovery after discharge", "Lower risk of missed medicines or wound neglect", "Early identification of warning signs"],
    prepare: ["Discharge summary and surgeon instructions", "Medicine list and dressing materials", "Follow-up appointment details"],
    highlights: ["Wound and dressing care", "Vitals and recovery monitoring", "Pain management coordination", "Mobility and physio support"],
    process: [
      { step: "Discharge planning", detail: "We coordinate with the hospital before discharge." },
      { step: "Home setup", detail: "Set up safe recovery environment." },
      { step: "Recovery care", detail: "Daily nursing visits or full-time support." },
    ],
    faqs: [
      { q: "How long is post-op care needed?", a: "Typically 1-4 weeks depending on the surgery." },
      { q: "Do you coordinate with surgeons?", a: "Yes, we follow the surgeon's instructions closely." },
    ],
  },
  {
    slug: "injections",
    icon: Syringe,
    title: "Injections",
    description: "IV, IM and subcutaneous injections administered safely at home.",
    tagline: "Safe injections without a hospital visit.",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nurse preparing a safe injection for home administration",
    longDescription: [
      "Injections should be given by trained hands with the right dose, route and sterile practice. Our nurses administer prescribed IV, IM and subcutaneous injections at home after checking the prescription and patient condition.",
      "This helps patients continue treatment without repeated clinic visits, especially for antibiotics, vitamins, insulin, hormone injections and post-discharge medication plans.",
    ],
    bestFor: ["Patients prescribed IV, IM or SC injections", "Diabetic patients needing insulin support", "Post-discharge antibiotic or pain injection schedules", "Elderly patients who cannot visit clinics repeatedly"],
    includedDetails: ["Prescription and dose verification", "Sterile injection administration", "Brief observation after injection", "Medicine arrangement guidance if needed"],
    outcomes: ["Safe treatment continuation at home", "Less travel for repeated doses", "Reduced anxiety with calm, trained support"],
    prepare: ["Doctor's prescription", "Medicine or injection vial if already purchased", "Any allergy or previous reaction history"],
    highlights: ["IV, IM and SC injections", "Insulin and hormone shots", "Sterile, single-use supplies", "Trained nurses"],
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
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sterile dressing supplies arranged for wound care",
    longDescription: [
      "Proper dressing protects the wound, supports healing and reduces infection risk. Our trained professionals assess the wound type, follow sterile technique and use suitable dressing methods based on the doctor's advice.",
      "We care for surgical wounds, diabetic ulcers, pressure sores and burns, while helping families understand positioning, hygiene and warning signs.",
    ],
    bestFor: ["Surgical wounds needing regular dressing", "Diabetic foot and chronic ulcers", "Pressure sores and bedsore prevention", "Burn dressing and wound observation"],
    includedDetails: ["Wound assessment and sterile cleaning", "Dressing change with suitable materials", "Bedsore prevention and positioning advice", "Healing progress updates"],
    outcomes: ["Cleaner wound care at home", "Better healing discipline", "Early attention to infection signs"],
    prepare: ["Doctor's dressing instructions", "Dressing materials if prescribed", "Previous wound photos or notes if available"],
    highlights: ["Surgical wound dressing", "Diabetic and pressure ulcer care", "Burn dressing", "Strict aseptic technique"],
    process: [
      { step: "Wound assessment", detail: "Evaluate wound type and stage." },
      { step: "Dressing", detail: "Use of right materials and technique." },
      { step: "Schedule", detail: "Repeat visits as advised." },
    ],
    faqs: [
      { q: "How often is dressing changed?", a: "Usually every 1-3 days depending on wound type." },
      { q: "Do you treat bedsores?", a: "Yes, including prevention and stage-wise care." },
    ],
  },
  {
    slug: "x-ray-at-home",
    icon: Scan,
    title: "X-ray @ Home",
    description: "Portable X-ray imaging at your home with quick reporting.",
    tagline: "Imaging at home - no movement, no stress.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Medical imaging equipment used for diagnostic support",
    longDescription: [
      "For bedridden, elderly or injured patients, even a short trip for imaging can be painful. Portable X-ray service brings the scan to the patient, reducing movement and stress while still supporting timely diagnosis.",
      "A trained technician performs the imaging at home and reports are shared digitally after radiology review.",
    ],
    bestFor: ["Bedridden patients needing chest or limb X-rays", "Suspected fracture or injury follow-up", "Postoperative imaging where travel is difficult", "Elderly patients who cannot stand in diagnostic queues"],
    includedDetails: ["Portable digital X-ray at home", "Technician visit and positioning assistance", "Radiologist-reported image review", "Digital report sharing"],
    outcomes: ["Less pain and movement for fragile patients", "Faster imaging access from home", "Reports that support doctor follow-up"],
    prepare: ["Doctor's X-ray prescription", "Patient location with space near the bed", "Previous imaging reports if any"],
    highlights: ["Portable digital X-ray", "Ideal for bedridden patients", "Radiologist-reported images", "Quick turnaround"],
    process: [
      { step: "Booking", detail: "Share doctor's prescription and address." },
      { step: "Imaging", detail: "Technician performs X-ray at home." },
      { step: "Report", detail: "Reports shared digitally with you and doctor." },
    ],
    faqs: [
      { q: "Is it safe at home?", a: "Yes, portable units use minimal radiation with safety protocols." },
      { q: "How long does it take?", a: "Imaging takes about 20-30 minutes; reports within hours." },
    ],
  },
  {
    slug: "nri-medical-tourism",
    icon: Globe2,
    title: "NRI Medical Tourism",
    description: "End-to-end medical tourism support for NRIs - hospital tie-ups, appointments, stay, transport and post-treatment home care.",
    tagline: "World-class treatment in India, organised end-to-end.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hospital coordinator supporting international medical care planning",
    longDescription: [
      "For NRIs and international families, treatment in India can be excellent but coordination can feel overwhelming. We simplify the journey by helping with hospital appointments, estimates, stay, local transport, admission support and recovery care.",
      "A dedicated coordinator keeps the patient and family guided from enquiry to treatment and post-treatment follow-up, so the focus stays on health instead of logistics.",
    ],
    bestFor: ["NRIs planning treatment in India", "Families comparing hospitals, doctors and costs", "Patients needing local admission and stay support", "Post-treatment recovery with nursing or physiotherapy"],
    includedDetails: ["Hospital and specialist appointment coordination", "Medical estimate and treatment timeline support", "Airport pickup, stay and transport assistance", "Home care and follow-up after discharge"],
    outcomes: ["Less confusion across hospitals and paperwork", "A smoother experience for patients arriving from abroad", "Continuity from treatment to recovery"],
    prepare: ["Medical reports and current diagnosis", "Passport, visa and insurance documents", "Preferred travel dates and attendant details"],
    highlights: ["Hospital and specialist appointment booking", "Airport pickup, accommodation and local transport", "Translator and coordinator support", "Pre-treatment and post-treatment home care", "Insurance and document assistance", "Wellness and recovery stays"],
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
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Air travel arranged for medically supervised patient transfer",
    longDescription: [
      "Long-distance patient movement needs planning, medical judgement and calm execution. We coordinate train escorts, commercial flight medical escorts and air ambulance support based on the patient's condition and travel fitness.",
      "The service covers medical review, tickets or stretcher arrangements, equipment planning, ambulance at both ends and a trained escort who stays with the patient through the journey.",
    ],
    bestFor: ["Patients travelling to another city for treatment", "Discharge transfer back to hometown", "Non-emergency but medically supervised train or flight travel", "Families needing door-to-door transfer coordination"],
    includedDetails: ["Fit-to-travel review coordination", "Train, flight or air ambulance planning", "Medical escort with oxygen or monitoring support as needed", "Pickup and destination ambulance coordination"],
    outcomes: ["Reduced travel risk for sick patients", "One coordinated plan across multiple transport points", "Family support before, during and after transfer"],
    prepare: ["Medical summary and treating doctor's opinion", "Patient ID, attendant ID and travel documents", "Oxygen, stretcher or equipment requirements"],
    highlights: ["Train escort with nurse / paramedic", "Commercial flight medical escort service", "Air ambulance coordination", "Oxygen, suction and monitoring equipment", "Stretcher booking on trains and flights", "Door-to-door coordination"],
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
