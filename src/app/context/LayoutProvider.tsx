"use client"

import { QuizProgressProvider } from './QuizProgressContext';

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  return <QuizProgressProvider>{children}</QuizProgressProvider>;
}
