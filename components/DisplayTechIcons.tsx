import React from 'react';
import { getTechLogos } from '@/lib/utils';

type TechIconProps = {
  techstack: string[];
};

// This is a Server Component — only works in Next.js 13+ server components
const DisplayTechIcons = async ({ techstack }: TechIconProps) => {
  const techIcons = await getTechLogos(techstack);

  return (
    <div className='flex flex-row'>
      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div key={index} className='relative group bg-dark-300 rounded-full p-2 flex-center'>
          <span className='tech-tooltip'>{tech}</span>
          <img src={url} alt={tech} className='w-6 h-6' />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;
