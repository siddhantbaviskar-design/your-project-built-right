/**
 * Single content source for the GOAL Pediatrics site.
 * Entries marked `placeholder: true` are structural stand-ins to be replaced
 * with the practice's real data — no clinical claims, names, testimonials,
 * prices or coverage details are invented here.
 */

export const brand = {
  name: "GOAL Pediatrics",
  tagline: "Pediatric orthotics, built around your child.",
  description:
    "GOAL Pediatrics is a pediatric orthotics practice. We design, fit and follow up on custom braces and supports for growing children — with families involved at every step.",
  phone: "(000) 000-0000",
  fax: "(000) 000-0000",
  email: "hello@goalpediatrics.com",
};

export type NavItem = { label: string; to: string; description?: string };

export const primaryNav: NavItem[] = [
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Locations", to: "/locations" },
];

export const serviceNav: NavItem[] = [
  { label: "AFOs", to: "/services/afos", description: "Ankle-foot orthoses" },
  { label: "SMOs", to: "/services/smos", description: "Supramalleolar orthoses" },
  { label: "Cranial Helmets", to: "/services/cranial-helmets", description: "Cranial remolding" },
  { label: "Scoliosis Bracing", to: "/services/scoliosis-bracing", description: "Spinal support" },
];

export const resourceNav: NavItem[] = [
  { label: "Blog", to: "/blog", description: "Guides for parents" },
  { label: "Shoes", to: "/shoes", description: "Brace-friendly footwear" },
  { label: "Forms & Documents", to: "/forms", description: "Paperwork in one place" },
];

export const trustPoints = [
  {
    id: "expertise",
    title: "Pediatric Expertise",
    body: "We work with children every day, so devices are designed for growing bodies and real childhood activity.",
    icon: "child" as const,
  },
  {
    id: "family",
    title: "Family-Centered Care",
    body: "Care plans are built around your child, your routine and the questions you actually have.",
    icon: "family" as const,
  },
  {
    id: "convenient",
    title: "Convenient Care",
    body: "Visits are arranged around your family's schedule across our available care locations.",
    icon: "home" as const,
  },
  {
    id: "team",
    title: "Team-Based Care",
    body: "We coordinate with your child's physicians and therapists so everyone is working from the same plan.",
    icon: "team" as const,
  },
];

export type Service = {
  slug: string;
  name: string;
  fullName: string;
  code: string;
  short: string;
  intro: string;
  parentsShouldKnow: string[];
  faqs: { q: string; a: string }[];
  placeholder?: boolean;
};

export const services: Service[] = [
  {
    slug: "afos",
    name: "AFOs",
    fullName: "Ankle-Foot Orthoses",
    code: "SVC—01",
    short: "Custom ankle and lower-leg support for stability, alignment and confident walking.",
    intro:
      "An AFO supports the foot and ankle to help a child stand and walk with better alignment. Each device is made from your child's own measurements or scan and adjusted as they grow.",
    parentsShouldKnow: [
      "Wearing time is built up gradually so your child stays comfortable.",
      "Shoes may need to be sized up or opened wider to fit over the device.",
      "Skin should be checked after each wear while your child adjusts.",
      "Devices are reviewed regularly and replaced as your child grows.",
    ],
    faqs: [
      {
        q: "How long does it take to receive an AFO?",
        a: "Timelines depend on your child's evaluation and prescription. Your clinician will give you a specific timeframe at the fitting appointment.",
      },
      {
        q: "Will my child wear it all day?",
        a: "Wear schedules are individual and set by your child's care team, usually starting short and increasing over time.",
      },
    ],
  },
  {
    slug: "smos",
    name: "SMOs",
    fullName: "Supramalleolar Orthoses",
    code: "SVC—02",
    short: "Lower-profile support that guides foot position while allowing natural ankle motion.",
    intro:
      "SMOs sit just above the ankle bones. They help control side-to-side foot position for children who need stability without full ankle restriction.",
    parentsShouldKnow: [
      "SMOs are lower profile than AFOs and fit into many standard shoes.",
      "Socks worn under the device should be smooth and seam-free.",
      "Fit is reviewed as your child grows or changes shoe size.",
    ],
    faqs: [
      {
        q: "What is the difference between an SMO and an AFO?",
        a: "An SMO stops below the calf and allows more ankle movement; an AFO extends higher for greater control. Your clinician will recommend what fits your child's needs.",
      },
    ],
  },
  {
    slug: "cranial-helmets",
    name: "Cranial Helmets",
    fullName: "Cranial Remolding Orthoses",
    code: "SVC—03",
    short: "Lightweight cranial remolding helmets, scanned and shaped to your infant's head.",
    intro:
      "A cranial remolding helmet gently guides head shape during a period of rapid infant growth. Fit is monitored closely and adjusted throughout treatment.",
    parentsShouldKnow: [
      "Treatment is time-sensitive and tied to your baby's growth stage.",
      "Helmets are checked and adjusted at regular follow-up visits.",
      "Cleaning and skin-check routines are reviewed with you at delivery.",
    ],
    faqs: [
      {
        q: "Is scanning uncomfortable for my baby?",
        a: "Scanning is contact-free and takes only moments. Babies are held by a caregiver throughout.",
      },
    ],
  },
  {
    slug: "scoliosis-bracing",
    name: "Scoliosis Bracing",
    fullName: "Spinal Orthoses",
    code: "SVC—04",
    short: "Spinal bracing designed with your child's growth, comfort and daily life in mind.",
    intro:
      "Spinal orthoses are prescribed as part of a broader treatment plan. We design each brace for wearability so your child can keep up with school and activity.",
    parentsShouldKnow: [
      "Wear schedules are prescribed by your child's physician.",
      "Clothing layers under the brace help comfort and skin protection.",
      "Follow-up visits track fit against your child's growth.",
    ],
    faqs: [
      {
        q: "Can my child stay active in a brace?",
        a: "Activity guidance comes from your child's physician and care team and is reviewed at fitting.",
      },
    ],
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Start Your Intake",
    body: "Share your child's information and what you're noticing. You do not need to know which device you need.",
  },
  {
    n: "02",
    title: "Understand Your Child's Needs",
    body: "We review the referral or prescription with you, confirm insurance details and answer early questions.",
  },
  {
    n: "03",
    title: "Evaluation & Measurement",
    body: "A clinician evaluates your child and captures measurements, casting or a digital scan for a custom fit.",
  },
  {
    n: "04",
    title: "Fabrication",
    body: "The device is fabricated to your child's specifications and checked before the fitting appointment.",
  },
  {
    n: "05",
    title: "Fitting",
    body: "We fit the device with your child present, adjust on the spot and walk through wear and care together.",
  },
  {
    n: "06",
    title: "Follow-Up & Support",
    body: "We keep checking fit as your child grows and stay reachable between visits.",
  },
];

export const expertiseBlocks = [
  {
    n: "01",
    title: "Pediatric-Focused Practice",
    body: "Children are not small adults. Every measurement, material choice and adjustment accounts for growth, activity and comfort.",
  },
  {
    n: "02",
    title: "Custom Fitting",
    body: "Casting or digital scanning captures your child's exact shape, so the device fits the body it was made for.",
  },
  {
    n: "03",
    title: "Ongoing Support",
    body: "Fit is reviewed over time. Growth, wear patterns and daily feedback shape what happens next.",
  },
];

export const careSettings = [
  { id: "home", label: "Home", body: "Care in the setting your child is most comfortable in." },
  { id: "school", label: "School", body: "Visits coordinated around the school day where supported." },
  { id: "clinic", label: "Clinic", body: "Full evaluation, fitting and adjustment in our clinic space." },
];

export type Location = {
  state: string;
  abbr: string;
  cities: string[];
  phone: string;
  fax: string;
  email: string;
  note: string;
  placeholder: boolean;
};

export const locations: Location[] = [
  {
    state: "Arizona",
    abbr: "AZ",
    cities: ["Phoenix metro", "Tucson"],
    phone: brand.phone,
    fax: brand.fax,
    email: brand.email,
    note: "Clinic and community-based visits.",
    placeholder: true,
  },
  {
    state: "Texas",
    abbr: "TX",
    cities: ["Dallas–Fort Worth", "Houston"],
    phone: brand.phone,
    fax: brand.fax,
    email: brand.email,
    note: "Clinic and community-based visits.",
    placeholder: true,
  },
  {
    state: "Utah",
    abbr: "UT",
    cities: ["Salt Lake Valley"],
    phone: brand.phone,
    fax: brand.fax,
    email: brand.email,
    note: "Clinic and community-based visits.",
    placeholder: true,
  },
];

export type TeamMember = {
  id: string;
  role: string;
  credentials: string;
  location: string;
  bio?: string;
  placeholder: boolean;
};

export const team: TeamMember[] = [
  {
    id: "orthotist-az",
    role: "Pediatric Orthotist",
    credentials: "Credentials to be confirmed",
    location: "Arizona",
    placeholder: true,
  },
  {
    id: "orthotist-tx",
    role: "Pediatric Orthotist",
    credentials: "Credentials to be confirmed",
    location: "Texas",
    placeholder: true,
  },
  {
    id: "fitter-ut",
    role: "Orthotic Fitter",
    credentials: "Credentials to be confirmed",
    location: "Utah",
    placeholder: true,
  },
  {
    id: "care-coordinator",
    role: "Care Coordinator",
    credentials: "Credentials to be confirmed",
    location: "All locations",
    placeholder: true,
  },
];

export type Article = {
  slug: string;
  title: string;
  category: "Getting Started" | "Wear & Care" | "Everyday Life" | "Insurance";
  excerpt: string;
  readingTime: string;
  date: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "what-to-expect-at-your-first-visit",
    title: "What to expect at your first visit",
    category: "Getting Started",
    excerpt:
      "A walkthrough of the first appointment — what we look at, what we ask, and what you can bring.",
    readingTime: "4 min read",
    date: "2026-05-12",
    body: [
      "The first visit is mostly a conversation. We want to understand what you're noticing at home, what your child's physician has recommended, and what a typical day looks like.",
      "Bring any prescription or referral paperwork, your insurance card, and the shoes your child wears most often. If your child has a favorite toy or book, bring that too — comfort makes evaluation easier.",
      "You will leave the visit knowing the next step, the expected timeline, and who to contact with questions.",
    ],
  },
  {
    slug: "helping-your-child-adjust-to-a-new-brace",
    title: "Helping your child adjust to a new brace",
    category: "Wear & Care",
    excerpt: "Break-in routines, skin checks and small habits that make the first weeks easier.",
    readingTime: "5 min read",
    date: "2026-04-28",
    body: [
      "Most wear schedules start short and build up. Following the schedule your clinician gives you matters more than pushing through long days early on.",
      "Check skin after every wear while your child adjusts. Redness that fades within about twenty minutes is expected; marks that stay are worth a call.",
      "Let your child help — choosing socks, fastening straps, naming the device. Participation lowers resistance quickly.",
    ],
  },
  {
    slug: "finding-shoes-that-fit-over-braces",
    title: "Finding shoes that fit over braces",
    category: "Everyday Life",
    excerpt: "What to look for in brace-friendly footwear, and what usually does not work.",
    readingTime: "3 min read",
    date: "2026-04-02",
    body: [
      "Look for a wide opening, a removable insole and a fastening that opens all the way down the front.",
      "Sizing up in length alone rarely helps — depth and width matter more than length.",
      "Bring the device with you when shoe shopping, or use our brace-friendly shoe guide as a starting point.",
    ],
  },
  {
    slug: "questions-to-ask-about-insurance",
    title: "Questions to ask about insurance coverage",
    category: "Insurance",
    excerpt: "A short list of questions that saves families time before treatment begins.",
    readingTime: "4 min read",
    date: "2026-03-18",
    body: [
      "Coverage varies by plan. Confirming details early prevents surprises later in treatment.",
      "Ask about prior authorization requirements, in-network status, replacement intervals as your child grows, and documentation your physician needs to provide.",
      "Our care coordinator can walk through this with you during intake.",
    ],
  },
];

export type DocumentItem = {
  id: string;
  name: string;
  description: string;
  group: "Before Your Visit" | "During Treatment" | "Feedback & Administration";
  action: "Fill Out" | "Download";
};

export const documents: DocumentItem[] = [
  {
    id: "intake",
    name: "New Patient Intake Form",
    description: "Child, caregiver and referral details to start care.",
    group: "Before Your Visit",
    action: "Fill Out",
  },
  {
    id: "insurance",
    name: "Insurance Information Form",
    description: "Plan and policy details for benefit verification.",
    group: "Before Your Visit",
    action: "Fill Out",
  },
  {
    id: "consent",
    name: "Consent to Treat",
    description: "Caregiver consent required before evaluation.",
    group: "Before Your Visit",
    action: "Download",
  },
  {
    id: "wear-schedule",
    name: "Wear & Care Guide",
    description: "Break-in schedule, skin checks and cleaning instructions.",
    group: "During Treatment",
    action: "Download",
  },
  {
    id: "growth-check",
    name: "Follow-Up Request",
    description: "Request a fit check between scheduled appointments.",
    group: "During Treatment",
    action: "Fill Out",
  },
  {
    id: "records",
    name: "Release of Records",
    description: "Authorize sharing records with another provider.",
    group: "Feedback & Administration",
    action: "Download",
  },
  {
    id: "feedback",
    name: "Family Feedback Form",
    description: "Tell us how your child's care experience went.",
    group: "Feedback & Administration",
    action: "Fill Out",
  },
];

export type Shoe = {
  id: string;
  name: string;
  brandNote: string;
  sizes: string;
  price: string;
  description: string;
  tags: string[];
  placeholder: boolean;
};

export const shoes: Shoe[] = [
  {
    id: "wide-open-sneaker",
    name: "Wide-Opening Sneaker",
    brandNote: "Brand and model to be confirmed",
    sizes: "Toddler – Youth",
    price: "Price to be confirmed",
    description: "Full-length opening and removable insole for depth over AFOs and SMOs.",
    tags: ["AFO friendly", "Removable insole", "Hook & loop"],
    placeholder: true,
  },
  {
    id: "extra-depth-trainer",
    name: "Extra-Depth Trainer",
    brandNote: "Brand and model to be confirmed",
    sizes: "Youth",
    price: "Price to be confirmed",
    description: "Extra internal depth for larger devices without sizing up in length.",
    tags: ["AFO friendly", "Extra depth"],
    placeholder: true,
  },
  {
    id: "everyday-smo-shoe",
    name: "Everyday SMO Shoe",
    brandNote: "Brand and model to be confirmed",
    sizes: "Infant – Toddler",
    price: "Price to be confirmed",
    description: "Lower-volume fit suited to SMOs and lower-profile supports.",
    tags: ["SMO friendly", "Lightweight"],
    placeholder: true,
  },
  {
    id: "school-shoe",
    name: "School-Ready Shoe",
    brandNote: "Brand and model to be confirmed",
    sizes: "Youth",
    price: "Price to be confirmed",
    description: "Neutral styling that meets most school dress requirements.",
    tags: ["AFO friendly", "School dress code"],
    placeholder: true,
  },
];

export const affiliateDisclosure =
  "Footwear listings are provided as a starting point for families. Availability, sizing and pricing are set by the retailer. Confirm fit with your clinician before purchasing.";

export const contentNotice =
  "Content placeholder: replace with the practice's verified information before publishing.";
