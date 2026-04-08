export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Kumar",
    role: "Property Owner",
    company: "Nellore Residency",
    content: "Bharath Services transformed our space with incredible attention to detail. Their professional approach to interior design is unmatched in Andhra Pradesh.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t2",
    name: "Ananya Reddy",
    role: "Project Manager",
    company: "VPR Constructions",
    content: "Working with them on our large-scale commercial project was a breeze. They delivered high-quality results ahead of schedule. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t3",
    name: "Suresh Babu",
    role: "Homeowner",
    company: "Private Villa",
    content: "The level of transparency and technical skill they bring to the table is rare. They didn't just build a house; they built our dream home.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t4",
    name: "Rajesh Kumar",
    role: "Property Owner",
    company: "Nellore Residency",
    content: "Bharath Services transformed our space with incredible attention to detail. Their professional approach to interior design is unmatched in Andhra Pradesh.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t5",
    name: "Ananya Reddy",
    role: "Project Manager",
    company: "VPR Constructions",
    content: "Working with them on our large-scale commercial project was a breeze. They delivered high-quality results ahead of schedule. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t6",
    name: "Suresh Babu",
    role: "Homeowner",
    company: "Private Villa",
    content: "The level of transparency and technical skill they bring to the table is rare. They didn't just build a house; they built our dream home.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5
  }
];