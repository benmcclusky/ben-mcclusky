import React from "react";
import {
  SiPython,
  SiMysql,
  SiJavascript,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiGit,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

// Define the type for a skill item
interface Skill {
  id: number;
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  status: string;
}

// Define the props for the SkillsSection component
interface SkillsSectionProps {
  title: string;
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => (
  <div className="mb-12">
    <h3 className="font-incognito text-2xl mb-4 font-semibold">{title}</h3>
    <div className="flex flex-wrap justify-left gap-6">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="flex items-center gap-x-3 p-4 rounded-lg dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200"
        >
          {skill.icon && (
            <skill.icon className="text-2xl dark:text-primary-color text-secondary-color" />
          )}
          <span className="text-base font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const technicalLinks: Skill[] = [
  {
    id: 1,
    name: "Python",
    icon: SiPython,
    status: "language",
  },
  {
    id: 2,
    name: "SQL",
    icon: SiMysql,
    status: "language",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: SiJavascript,
    status: "language",
  },
  {
    id: 4,
    name: "PyTorch",
    icon: SiPytorch,
    status: "module",
  },
  {
    id: 5,
    name: "NumPy",
    icon: SiNumpy,
    status: "module",
  },
  {
    id: 6,
    name: "Pandas",
    icon: SiPandas,
    status: "module",
  },
  {
    id: 7,
    name: "Git",
    icon: SiGit,
    status: "developer",
  },
  {
    id: 8,
    name: "Docker",
    icon: SiDocker,
    status: "developer",
  },
  {
    id: 9,
    name: "Kubernetes",
    icon: SiKubernetes,
    status: "developer",
  },
];

// expertiseLinks without icons
const expertiseLinks: Skill[] = [
  {
    id: 1,
    name: "Deep Learning",
    status: "expertise",
  },
  {
    id: 2,
    name: "Reinforcement Learning",
    status: "expertise",
  },
  {
    id: 3,
    name: "Computer Vision",
    status: "expertise",
  },
  {
    id: 4,
    name: "Natural Language Processing",
    status: "expertise",
  },
];

// coreSkillsLinks without icons
const coreSkillsLinks: Skill[] = [
  {
    id: 1,
    name: "Problem Solving",
    status: "core-skill",
  },
  {
    id: 2,
    name: "Determination",
    status: "core-skill",
  },
  {
    id: 3,
    name: "Communication",
    status: "core-skill",
  },
  {
    id: 4,
    name: "Teamwork",
    status: "core-skill",
  },
  {
    id: 5,
    name: "Fun",
    status: "core-skill",
  },
];

const Skills: React.FC = () => {
  // Combine technical skills into one array
  const technicalSkills = [
    ...technicalLinks.filter((skill) => skill.status === "language"),
    ...technicalLinks.filter((skill) => skill.status === "module"),
    ...technicalLinks.filter((skill) => skill.status === "developer"),
  ];

  return (
    <section className="mt-20 w-full">
      <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
        Skills
      </h2>
      <div className="mt-10">
        <SkillsSection title="Expertise" skills={expertiseLinks} />
        <SkillsSection title="Technical Skills" skills={technicalSkills} />
        <SkillsSection title="Core Skills" skills={coreSkillsLinks} />
      </div>
    </section>
  );
};

export default Skills;
