import React from 'react';

interface AnalyticsHeaderProps {
  title: string;
  description: string;
}

const AnalyticsHeader: React.FC<AnalyticsHeaderProps> = ({ title, description }) => {
  return (
    <div className="px-0">
      <h1 className="text-2xl text-display tracking-tight md:text-3xl">{title}</h1>
      <p className="text-muted-foreground text-body">{description}</p>
    </div>
  );
};

export default AnalyticsHeader;
