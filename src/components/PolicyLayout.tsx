// src/components/PolicyLayout.tsx
import React from 'react'

interface PolicyLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PolicyLayout: React.FC<PolicyLayoutProps> = ({ title, children }) => {
  return (
    <div className="container mx-auto px-4 py-16"> {/* Added mt-20 for top margin */}
      <h1 className="text-3xl font-bold mb-8">{title}</h1> {/* Increased mb-6 to mb-8 */}
      <div className="prose max-w-none">{children}</div>
    </div>
  )
}

export default PolicyLayout