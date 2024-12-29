export interface Skills {
    id: number;
    value: string;
  }

export interface Author {
    firstName: string;
    lastName: string;
    age: number;
    role: string;
    place: string;
  }

export interface UserCardProps {
    author: Author;
  }

export interface UserSkillsProps {
    skills: Skills[];
  }
