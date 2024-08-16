export interface Coursework {
  id?: string;
  title: string;
  subject: string;
  timeToRead: string;
  words: string;
  rating: string;
  language: string;
  courseworkType?: string;
  score: { score: number; category: string };
}
