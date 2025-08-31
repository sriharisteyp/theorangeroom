
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  audience: string;
  registrationRequired: boolean;
  posterImage?: string;
  googleFormLink?: string;
  fullDescription?: string;
  contactPerson?: string;
  contactPhone?: string;
  contactEmail?: string;
  prerequisites?: string;
  materialsProvided?: string[];
  cost?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Stress Management Workshop",
    description: "Learn practical techniques to manage academic and personal stress",
    date: "January 15, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "The Orange Room, Vazhuthacaud, Trivandrum, Kerala",
    audience: "Students aged 16-25",
    registrationRequired: true,
    posterImage: "/placeholder.svg",
    googleFormLink: "https://forms.google.com/stress-workshop",
    fullDescription: `This comprehensive workshop will teach you evidence-based stress management techniques specifically designed for students and young adults. 

What You'll Learn:
• Identifying personal stress triggers and warning signs
• Deep breathing and progressive muscle relaxation techniques
• Time management and organization strategies
• Mindfulness and meditation practices for daily use
• Building healthy coping mechanisms
• Creating a personal stress management plan

Workshop Features:
• Interactive group activities and discussions
• Take-home resource materials
• Follow-up support group invitation
• Certificate of participation
• Light refreshments provided

Our experienced facilitators will guide you through practical exercises that you can immediately implement in your daily life. This workshop is perfect for students preparing for exams, dealing with academic pressure, or managing life transitions.`,
    contactPerson: "Priya Nair",
    contactPhone: "+91 9876543210",
    contactEmail: "workshops@ymhkerala.org",
    prerequisites: "None - open to all experience levels",
    materialsProvided: ["Workbook", "Stress management toolkit", "Relaxation audio guide"],
    cost: "Free for students"
  },
  {
    id: 2,
    title: "Mental Health Awareness Drive",
    description: "Community outreach program at local schools",
    date: "January 22, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Government Higher Secondary School, Pattom, Trivandrum",
    audience: "Students and teachers",
    registrationRequired: false,
    posterImage: "/placeholder.svg",
    fullDescription: `Join us for a comprehensive community-wide mental health awareness program designed to break stigma and promote understanding of mental health issues among students and educators.

Program Schedule:
9:00 AM - 10:00 AM: Opening ceremony and keynote address
10:00 AM - 11:00 AM: Interactive presentations on mental health basics
11:00 AM - 11:15 AM: Tea break
11:15 AM - 12:15 PM: Workshop sessions (separate for students and teachers)
12:15 PM - 1:00 PM: Panel discussion with mental health professionals
1:00 PM - 2:00 PM: Resource distribution and Q&A session

Activities Include:
• Mental health myth-busting sessions
• Interactive games and activities
• Distribution of educational materials
• One-on-one consultation opportunities
• Resource booth with local mental health services
• Art therapy demonstration

Free Resources:
• Mental health information pamphlets in Malayalam and English
• Crisis helpline contact cards
• Self-care activity sheets
• Referral directory for local services`,
    contactPerson: "Dr. Rajesh Kumar",
    contactPhone: "+91 9876543211",
    contactEmail: "outreach@ymhkerala.org",
    prerequisites: "None",
    materialsProvided: ["Information packets", "Activity worksheets", "Contact directory"],
    cost: "Completely free"
  },
  {
    id: 3,
    title: "Parents Support Group",
    description: "Understanding and supporting your child's mental health journey",
    date: "January 28, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "The Orange Room, Vazhuthacaud, Trivandrum, Kerala",
    audience: "Parents and guardians",
    registrationRequired: true,
    posterImage: "/placeholder.svg",
    googleFormLink: "https://forms.google.com/parents-support",
    fullDescription: `A supportive environment for parents and guardians to learn about adolescent mental health, share experiences, and develop skills to better support their children's emotional well-being.

Session Topics:
• Understanding teenage brain development and behavior
• Recognizing signs of mental health concerns
• Communication strategies for difficult conversations
• When and how to seek professional help
• Supporting recovery and building resilience
• Self-care for parents and caregivers

Group Format:
• Facilitated discussion circles
• Educational presentations by child psychologists
• Peer support and experience sharing
• Resource sharing and networking
• Action planning for home implementation

What Makes This Special:
This isn't just an information session - it's a community of parents coming together to learn and support each other. Many participants form lasting connections and continue meeting informally.

Ongoing Support:
• Monthly follow-up sessions
• WhatsApp support group
• Access to parenting resources library
• Priority booking for future workshops
• Referral to family therapy services if needed

Child Care:
Limited childcare available for younger children (ages 5-12) with advance notice.`,
    contactPerson: "Meera Thomas",
    contactPhone: "+91 9876543212",
    contactEmail: "parents@ymhkerala.org",
    prerequisites: "Parents/guardians of children aged 10-25",
    materialsProvided: ["Parent guidance handbook", "Communication cards", "Resource directory"],
    cost: "₹200 (includes materials and refreshments)"
  }
];

export interface PastEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  fullDescription?: string;
  gallery?: string[];
  location?: string;
  attendance?: number;
  outcomes?: string[];
  testimonials?: string[];
}

export const pastEvents: PastEvent[] = [
  {
    id: 1,
    title: "World Mental Health Day 2024",
    description: "Community awareness event with over 200 participants",
    date: "October 10, 2024",
    image: "/placeholder.svg",
    location: "Central Stadium Ground, Trivandrum",
    attendance: 250,
    fullDescription: `Our biggest event of 2024, bringing together the community for mental health awareness and celebration of recovery stories. This day-long event featured multiple activities, expert talks, and community engagement initiatives.

Event Highlights:
• Keynote address by renowned psychiatrist Dr. Sunitha Menon
• 15 interactive booths showcasing different aspects of mental health
• Cultural performances by local artists and recovery champions
• Free mental health screenings by qualified professionals
• Art therapy workshops for all age groups
• Panel discussion on "Mental Health in Digital Age"
• Awards ceremony recognizing mental health advocates

Special Features:
• Mobile counseling units for immediate support
• Multilingual resources in Malayalam, Tamil, and English
• Special focus on elderly mental health
• Youth-led initiatives showcase
• Family support corner
• Meditation and mindfulness corner

Media Coverage:
The event was covered by major local news channels and newspapers, helping spread awareness about mental health issues and available resources in Kerala.`,
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    outcomes: [
      "250+ people reached with mental health information",
      "50+ individuals connected to ongoing support services",
      "25+ families enrolled in family therapy programs",
      "100+ mental health resource kits distributed",
      "15+ referrals made to specialized services"
    ],
    testimonials: [
      "This event opened my eyes to the importance of mental health. I finally understood that seeking help is a sign of strength, not weakness. - Anitha, 34",
      "The youth programs here are amazing. My teenage daughter has been so much more confident since joining their peer support group. - Ravi Kumar, Parent"
    ]
  },
  {
    id: 2,
    title: "Youth Emotional Resilience Workshop",
    description: "Interactive session on building emotional strength",
    date: "September 15, 2024",
    image: "/placeholder.svg",
    location: "Christ College Auditorium, Irinjalakuda",
    attendance: 85,
    fullDescription: `An intensive workshop focused on helping young people aged 16-25 build emotional resilience and develop healthy coping mechanisms for life's challenges.

Workshop Components:
• Understanding emotional resilience and its importance
• Identifying personal strengths and protective factors
• Building emotional regulation skills
• Developing healthy coping strategies
• Creating support networks and communication skills
• Planning for future challenges and setbacks

Interactive Activities:
• Resilience assessment and goal setting
• Group problem-solving exercises
• Role-playing scenarios for difficult situations
• Mindfulness and stress reduction techniques
• Peer mentoring circle formation
• Action planning and commitment ceremonies

Expert Facilitators:
Led by certified counselors and peer mentors who shared their own recovery journeys, making the content relatable and inspiring for participants.

Follow-up Support:
All participants were invited to join ongoing monthly support meetings and given access to online resources and crisis support contacts.`,
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    outcomes: [
      "85 young people trained in resilience building",
      "3 peer support groups formed",
      "15 participants became peer mentors",
      "100% reported increased confidence in managing emotions",
      "Monthly follow-up support group established"
    ],
    testimonials: [
      "I learned that I'm not alone in my struggles. The techniques I learned here have helped me manage my anxiety so much better. - Arun, 19",
      "This workshop changed my perspective on mental health completely. I now help my friends when they're going through tough times. - Preethi, 22"
    ]
  },
  {
    id: 3,
    title: "Teacher Training Program",
    description: "Equipping educators with mental health awareness tools",
    date: "August 20, 2024",
    image: "/placeholder.svg",
    location: "Kerala Education Department Training Center, Thiruvananthapuram",
    attendance: 120,
    fullDescription: `A comprehensive professional development program designed to equip teachers and school counselors with the knowledge and skills needed to support student mental health in educational settings.

Training Modules:
• Recognizing early warning signs of mental health issues
• Classroom strategies for supporting struggling students
• Crisis intervention and referral protocols
• Creating inclusive and supportive classroom environments
• Understanding trauma-informed teaching practices
• Building resilience in educational settings

Practical Components:
• Case study analysis and discussion
• Role-playing difficult conversations with students
• Resource development for school counseling programs
• Creating mental health policies for schools
• Developing parent communication strategies
• Establishing peer support programs

Certification:
Participants received certification in "Mental Health First Aid in Educational Settings" recognized by the Kerala Department of Education.

Long-term Impact:
This program has led to the implementation of mental health support programs in 25+ schools across Kerala, directly benefiting thousands of students.`,
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    outcomes: [
      "120 educators trained across 45 schools",
      "25 schools implemented new mental health support programs",
      "Mental health first aid certification for all participants",
      "500+ students indirectly benefited through improved support",
      "Quarterly follow-up training sessions established"
    ],
    testimonials: [
      "This training has made me a more empathetic and effective teacher. I now feel confident supporting students who are struggling. - Lakshmi Teacher, Government High School",
      "The practical tools and strategies we learned are making a real difference in our school environment. - Principal, St. Mary's School"
    ]
  }
];
