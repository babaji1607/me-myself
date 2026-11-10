export interface WisdomNote {
  id: string;
  source: string;
  sanskrit?: string;
  title: string;
  aphorism: string;
  reflection: string;
  influence: string;
  category?: string;
  readTime?: string;
  number?: string;
  date?: string;
  content?: string[];
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  ragaOrMood: string;
  spotifyId: string;
  spotifyUrl: string;
  coverImage: string;
  description: string;
}

export interface MemoryItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  location: string;
  caption: string;
  mediaUrl: string;
  posterUrl?: string;
  spanClass: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface WorkArchetype {
  halfFarmer: {
    title: string;
    focus: string;
    ethos: string;
    practices: string[];
    image: string;
  };
  halfX: {
    title: string;
    focus: string;
    ethos: string;
    practices: string[];
    image: string;
    socials: SocialLink[];
  };
}

export interface IdentityData {
  name: string;
  monogram: string;
  title: string;
  role: string;
  location: string;
  timezone: string;
  status: string;
  headline: string;
  subheadline: string;
  marqueeWords: string[];
  work: WorkArchetype;
  wisdom: WisdomNote[];
  music: MusicTrack[];
  memories: MemoryItem[];
  contact: {
    email: string;
    alternateEmail?: string;
    phone: string;
    phoneRaw: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappUrl: string;
    instagram: string;
    instagramUrl: string;
    github: string;
    githubUrl: string;
    linkedin?: string;
    linkedinUrl?: string;
    x?: string;
    xUrl?: string;
    note: string;
    socials: { label: string; href: string }[];
  };
}

export const identity: IdentityData = {
  name: "Mohit Ashliya",
  monogram: "M.A",
  title: "Half Farmer • Half Solution Architect",
  role: "Half Farmer & Half Solution Architect",
  location: "Merta, Rajasthan",
  timezone: "Asia/Kolkata",
  status: "Applying technology to soil & systems",
  headline: "Rooted in Soil. Awakened in Mind.",
  subheadline: "Divided equally between physical earth and strategic discipline. Guided by Advaita Vedanta, Ashtavakra, Gita, Krishnamurti, Jung, and Adler.",
  marqueeWords: [
    "Sakshi Bhava — The Pure Witness",
    "Karmanye Vadhikaraste — Action Without Attachment",
    "Advaita — Non-Duality",
    "Half Farmer • Half Solution Architect",
    "Ashtavakra — Unbounded Freedom",
    "Carl Jung — Individuation & Shadow",
    "J. Krishnamurti — Choiceless Awareness",
    "Alfred Adler — Courage of Self-Determination",
    "Sri Krishna — Cosmic Lila & Duty",
    "Chanakya — Strategic Discernment",
    "Hanuman Ji — Boundless Devotion & Strength"
  ],
  work: {
    halfFarmer: {
      title: "The Land",
      focus: "Natural Farming & Crop Cultivation",
      ethos: "Working directly with the soil. Sowing indigenous crops, tending the field through seasonal heat and rainfall, and managing harvest cycles on the ground.",
      practices: [
        "Soil enrichment & regenerative crops",
        "Indigenous seed preservation",
        "Water conservation & field management",
        "Seasonal sowing and harvest rhythms"
      ],
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop"
    },
    halfX: {
      title: "The Solution Architect",
      focus: "Systems, Infrastructure & Architecture",
      ethos: "Designing resilient digital infrastructure and untangling complex technical workflows into scalable, high-performance solutions.",
      practices: [
        "Enterprise solution architecture",
        "Distributed systems & cloud infrastructure",
        "Data workflows & systems engineering",
        "Performance optimization & reliability"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      socials: [
        { label: "GitHub", href: "https://github.com/babaji1607", icon: "github" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/mohit-ashliya/", icon: "linkedin" },
        { label: "X", href: "https://x.com/tranquil_ketu", icon: "x" },
        { label: "Instagram", href: "https://instagram.com/_many_colors_of_life", icon: "instagram" }
      ]
    }
  },
  wisdom: [
    {
      id: "advaita",
      number: "01",
      category: "Advaita Vedanta",
      readTime: "3 min read",
      date: "November 2026",
      source: "Ashtavakra Gita / Advaita",
      sanskrit: "साक्षात् साक्षी स्वरूपतः",
      title: "The Unattached Witness (Sakshi)",
      aphorism: "You are not the body, nor is the body yours. You are neither the doer nor the reaper. You are eternally free, the witness of all.",
      reflection: "When you rest as the unmoving observer rather than mistaking yourself for the transient storms of the mind, suffering dissolves into silent stillness.",
      influence: "Ashtavakra Rishi",
      content: [
        "In the rush of modern technical discipline—where systems scale, latency is tracked in milliseconds, and crises demand reactive urgency—the mind habitually merges with the tempest. We mistake ourselves for the worker, the code, the fatigue, or the anxiety. Ashtavakra's radical instruction is simple and uncompromising: You are not the body, nor are you the doer. You are the pure witness (Sakshi).",
        "When standing in an open field in Rajasthan at dawn, watching the mist lift from the soil, the observer does not push the mist or hurry the sunrise. Awareness is effortlessly motionless. The same principle applies to complex digital architecture: true clarity does not emerge from hyper-reactivity, but from retreating into that spacious silence where every component is perceived without entanglement.",
        "Resting as the witness does not mean indolence. On the contrary, actions performed from the stillness of Sakshi Bhava carry laser-like precision, unaffected by egoistic pride or paralyzing fear of failure."
      ]
    },
    {
      id: "gita",
      number: "02",
      category: "Karma Yoga",
      readTime: "4 min read",
      date: "October 2026",
      source: "Bhagavad Gita 2.47",
      sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
      title: "Nishkama Karma (Pure Duty)",
      aphorism: "You have a right to action alone, never to its fruits. Do not let the reward be your motive, nor surrender to inaction.",
      reflection: "Pour every atom of sincerity into your duty—whether plowing a furrow in Rajasthan or architecting a distributed system—leaving the fruits entirely to the cosmic order.",
      influence: "Sri Krishna",
      content: [
        "The foundational decree of Bhagavad Gita 2.47—Karmanye Vadhikaraste Ma Phaleshu Kadachana—is often translated simply as 'do your duty without expecting rewards.' But its technical depth is far more profound: it is a manual for psychological unburdening.",
        "When you plant seeds in the ground, you can till the soil, enrich the organic bed, and sow at the optimal seasonal window. Yet rainfall, seasonal heat, and market fluctuations remain beyond your direct jurisdiction. Worrying about the harvest while digging the furrow only ruins the quality of the trench.",
        "In software and solution architecture, the architect designs distributed systems for resilience, writes clean decoupled contracts, and establishes robust telemetry. If you attach your emotional equilibrium to whether praise is sung or whether corporate tides shift, burnout is inevitable. Pouring total reverence into the craftsmanship itself—leaving the outcome to the cosmic order—is the only enduring path to mastery."
      ]
    },
    {
      id: "krishnamurti",
      number: "03",
      category: "Choiceless Inquiry",
      readTime: "3 min read",
      date: "September 2026",
      source: "J. Krishnamurti",
      title: "Choiceless Awareness",
      aphorism: "Freedom is not a reaction; freedom is not a choice. It is seeing things as they actually are without the distorting lens of conditioning.",
      reflection: "To perceive a tree, a person, or a line of code without the burden of past bias is the inception of true intelligence.",
      influence: "J. Krishnamurti",
      content: [
        "Jiddu Krishnamurti frequently reminded us that the observer is the observed. The moment we evaluate our experiences through the filter of past memory, judgment, and dogma, we are no longer looking at reality; we are looking at our conditioning.",
        "Choiceless awareness is the quiet art of looking without the compulsion to label, condemn, or justify. When examining an intractable distributed concurrency bug or surveying dry soil after a harsh summer, any emotional projection clouds the direct perception of what actually is.",
        "When the mind is free of choice, comparison, and psychological time, an extraordinary stillness arises. In that stillness, solutions present themselves with obvious simplicity."
      ]
    },
    {
      id: "jung",
      number: "04",
      category: "Depth Psychology",
      readTime: "5 min read",
      date: "August 2026",
      source: "Carl Gustav Jung",
      title: "Shadow Integration",
      aphorism: "One does not become enlightened by imagining figures of light, but by making the darkness conscious.",
      reflection: "True strength comes from integrating your instincts, acknowledging the shadow, and becoming whole rather than superficially agreeable.",
      influence: "Carl Jung",
      content: [
        "Carl Jung observed that one does not become enlightened by imagining figures of light, but by making the darkness conscious. The shadow contains everything an individual has repressed in pursuit of a polite, socially acceptable persona: raw aggression, fierce instincts, and hidden vitality.",
        "A person who denies their shadow becomes passive-aggressive, easily manipulated, and fragile. The farmer knows that fertilizer comes from decomposing matter; life does not bloom from sterile glass. The earth requires rich compost.",
        "In systems architecture and high-stakes decision making, an engineer who ignores dark edge-cases or avoids uncomfortable confrontations creates brittle platforms. To integrate the shadow is to cultivate the capacity for constructive fierceness, discernment, and wholehearted resilience."
      ]
    },
    {
      id: "adler",
      number: "05",
      category: "Teleology & Will",
      readTime: "4 min read",
      date: "July 2026",
      source: "Alfred Adler",
      title: "The Courage of Self-Determination",
      aphorism: "No experience is a cause of success or failure. We do not suffer from the shock of our experiences, but make out of them what suits our purpose.",
      reflection: "Self-determination begins the moment you cease blaming external circumstances and act with courage in the present.",
      influence: "Alfred Adler",
      content: [
        "Alfred Adler’s teleological psychology cuts cleanly through the fatalism of deterministic trauma. Past experiences do not cause present failures; rather, we choose which memories to prioritize to serve our present lifestyle and convenient excuses.",
        "Neither soil nor technical infrastructure cares about excuses. The seed germinates when given moisture and warmth, regardless of how dry yesterday was. A compiler executes code as written, unconcerned with the programmer's historical grievances.",
        "True courage is the courage to be disliked, the courage to accept personal responsibility for your current stance in life, and the willingness to take resolute action today without demanding external validation."
      ]
    },
    {
      id: "chanakya",
      number: "06",
      category: "Strategic Discernment",
      readTime: "4 min read",
      date: "June 2026",
      source: "Chanakya Niti",
      sanskrit: "यथा चतुर्भिः कनकं परीक्ष्यते",
      title: "Strategic Equanimity",
      aphorism: "Before beginning anything, ask yourself three questions: Why am I doing this? What might the results be? Will I be successful? Proceed only with penetrating clarity.",
      reflection: "Intellect without emotional discipline is fragile. Strategy must be razor-sharp, patient, and anchored in dharma.",
      influence: "Chanakya",
      content: [
        "Chanakya was both a pragmatic ascetic and the master strategist who forged an empire. His treatise teaches that intellect without emotional equanimity is dangerous, while virtue without strategic teeth is helpless.",
        "Before committing resources to any endeavor—be it crop rotation across arid acreage or migrating enterprise workflows to the edge—Chanakya demands three uncompromising interrogations: Why am I doing this? What might the tangible repercussions be? Will this endeavor succeed in alignment with dharma?",
        "Strategy is not cunning; it is patient alignment with reality. When decisions are rooted in dispassionate clarity, every move is economical, disciplined, and enduring."
      ]
    }
  ],
  music: [
    {
      id: "swagatham-krishna",
      title: "Swagatham Krishna",
      artist: "Anirudh Ravichander • Niranjana Ramanan",
      ragaOrMood: "Raga Mohanam • Carnatic Devotion",
      spotifyId: "7DCxUkVjnbER5A8n5OcJHx",
      spotifyUrl: "https://open.spotify.com/track/7DCxUkVjnbER5A8n5OcJHx?si=7fff06fe2a9342a1",
      coverImage: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023c29c8c7da00a34f0e94e271",
      description: "Classical Carnatic prayer invoking deep devotion, peace, and sacred presence."
    },
    {
      id: "roundabout",
      title: "Roundabout",
      artist: "Yes",
      ragaOrMood: "Progressive Resonance • Timeless Craft",
      spotifyId: "0YveezON7jpiaHA8fnUHxN",
      spotifyUrl: "https://open.spotify.com/track/0YveezON7jpiaHA8fnUHxN?si=40ee4c927e994f6d",
      coverImage: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f4174f51268699ef79fbe3da",
      description: "Masterwork of intricate acoustic motifs and dynamic progressive rock architecture."
    },
    {
      id: "shape-of-you-carnatic",
      title: "Shape of You (Carnatic Mix)",
      artist: "IndianRaga • Aditya Rao • Mahesh Raghvan",
      ragaOrMood: "Ragas Abheri & Shudha Dhanyasi • Fusion",
      spotifyId: "0RZS71uyDP1ImrhpxYzpmN",
      spotifyUrl: "https://open.spotify.com/track/0RZS71uyDP1ImrhpxYzpmN?si=6c8f446f403949c5",
      coverImage: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0206fe04aba88b62fbcf5b2653",
      description: "Brilliant harmonic synthesis of ancient South Indian ragas with modern melodic flow."
    }
  ],
  memories: [
    {
      id: "01",
      type: "video",
      title: "Wind in the Wheat Fields",
      location: "Merta Heartland",
      caption: "Golden wheat rippling under the afternoon sun. A continuous visual meditation in organic rhythm.",
      mediaUrl: "/videos/wheat-field.mp4",
      posterUrl: "/videos/wheat-field-poster.jpg",
      spanClass: "col-span-12 md:col-span-8"
    },
    {
      id: "02",
      type: "image",
      title: "Ancient Stone & River",
      location: "Sacred Waters",
      caption: "The river flowing past timeless stone stairs. Civilizations rise and fall, but the witness remains.",
      mediaUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1000&auto=format&fit=crop",
      spanClass: "col-span-12 md:col-span-4"
    },
    {
      id: "03",
      type: "image",
      title: "Solitude & Study",
      location: "Quiet Hermitage",
      caption: "Days spent in solitary contemplation, studying Ashtavakra and observing breath.",
      mediaUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
      spanClass: "col-span-12 md:col-span-4"
    },
    {
      id: "04",
      type: "image",
      title: "The Horizon & Silent Presence",
      location: "Rajasthan Sanctuary",
      caption: "Stillness caught in the frame. The witness resting in quiet awareness between earth and architecture.",
      mediaUrl: "/images/bento-last-grid.webp",
      spanClass: "col-span-12 md:col-span-8"
    }
  ],
  contact: {
    email: "mohit.ashliya@gmail.com",
    alternateEmail: "mohit.ashliya@zohomail.in",
    phone: "+91 80033 21811",
    phoneRaw: "8003321811",
    phoneDisplay: "+91 80033 21811",
    whatsapp: "+91 80033 21811",
    whatsappUrl: "https://wa.me/918003321811",
    instagram: "@_many_colors_of_life",
    instagramUrl: "https://instagram.com/_many_colors_of_life",
    github: "github.com/babaji1607",
    githubUrl: "https://github.com/babaji1607",
    linkedin: "mohit-ashliya",
    linkedinUrl: "https://www.linkedin.com/in/mohit-ashliya/",
    x: "@tranquil_ketu",
    xUrl: "https://x.com/tranquil_ketu",
    note: "Welcoming sincere inquiries on solution architecture, regenerative soil, and quiet strategic systems.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mohit-ashliya/" },
      { label: "X", href: "https://x.com/tranquil_ketu" },
      { label: "GitHub", href: "https://github.com/babaji1607" },
      { label: "Instagram", href: "https://instagram.com/_many_colors_of_life" },
      { label: "The Archetype", href: "/#work" },
      { label: "Wisdom", href: "/#wisdom" }
    ]
  }
};
