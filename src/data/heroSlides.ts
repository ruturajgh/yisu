import { HeroSlide } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Young India Skills University",
    subtitle: "Government of Telangana Initiative",
    description: "Practical courses, real-world projects, and certifications that open doors to new opportunities.",
    badge: "Industry-Aligned",
    ctaText: "Explore Programs",
    ctaLink: "#programs",
    stats: [
      { value: "40,680+", label: "Learners", icon: "👥" },
      { value: "9", label: "Schools", icon: "🎓" },
      { value: "20+", label: "Partners", icon: "🤝" },
      { value: "17+", label: "Courses", icon: "📚" }
    ],
    color: "navy",
    image: "/images/auro-bindo-course.webp"
  },
  {
    id: 2,
    title: "Industry Partnerships",
    subtitle: "Learn from Industry Leaders",
    description: "Partnered with top companies like Microsoft, Tech Mahindra, Swiggy, and more for real-world exposure.",
    badge: "Career-Focused",
    ctaText: "View Partners",
    ctaLink: "#partners",
    stats: [
      { value: "20+", label: "Industry Partners", icon: "🏢" },
      { value: "100%", label: "Placement Rate", icon: "✅" },
      { value: "₹12L+", label: "Avg Package", icon: "💰" },
      { value: "5", label: "Schools Active", icon: "🎯" }
    ],
    color: "blue",
    image: "/images/auro-bindo-course.webp"
  },
  {
    id: 3,
    title: "Career Outcomes",
    subtitle: "Job-Ready from Day One",
    description: "Hands-on training, internships, and certifications that prepare you for immediate employment.",
    badge: "Practical Learning",
    ctaText: "Apply Now",
    ctaLink: "#apply",
    stats: [
      { value: "95%", label: "Employability", icon: "🚀" },
      { value: "50+", label: "Hiring Partners", icon: "💼" },
      { value: "6mo", label: "Avg Duration", icon: "⏱️" },
      { value: "3mo", label: "Internship", icon: "🔧" }
    ],
    color: "gold",
    image:  "/images/auro-bindo-course.webp"
  }
];
