import React from "react";
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiEnvelope,
  BiSolidDownload,
} from "react-icons/bi";

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/benmcclusky",
    icon: BiLogoGithub,
    status: "social",
  },
  {
    id: 2,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/ben-mcclusky-ba7b12171/",
    icon: BiLogoLinkedinSquare,
    status: "social",
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:ben.mcclusky@outlook.com",
    icon: BiEnvelope,
    status: "social",
  },
];
