import type { LucideIcon } from "lucide-react";

export type SkillLink = { label: string; href: string; note?: string };

export type SubArea = {
  label: string;
  icon: LucideIcon;
  description?: string;
};

export type Skill = {
  label: string;
  icon: LucideIcon;
  role: string;
  summary: string;
  highlights: string[];
  tools: string[];
  subAreas?: SubArea[];
  links?: SkillLink[];
};

export type Page = "home" | "about" | "projects" | "blog";
