export interface Education {
  school: string;
  major: string;
  status: string;
  gpa: string;
  languages: { name: string; score: string }[];
  certs: string[];
}

export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  bulletPoints: string[];
  problemSolving?: {
    title: string;
    description: string;
    pdca: {
      plan: string;
      do: string;
      check: string;
      act: string;
    };
  };
  bgColor?: string;
  badge?: string;
}

export interface CompetencyItem {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  details: string[];
  icon: string;
}
