"use client"


export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <div className="bg-background">{children}</div>;
}