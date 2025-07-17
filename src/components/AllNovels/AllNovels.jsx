import React from 'react';
import { allNovelsContent } from '../../data/allNovelsContent';
import LinkIcon from '../icons/LinkIcon';

const AllNovels = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allNovelsContent.map((novel) => (
          <div key={novel.id} className="bg-white rounded-2xl p-8 flex flex-col items-start gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-stone-100 flex-shrink-0">
              <img src={novel.imageUrl} alt={novel.title} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold">{novel.title}</h2>
            <p className="text-stone-500 text-lg">{novel.description}</p>
            <a href={novel.link} className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors">
              <LinkIcon className="w-5 h-5" />
              <span>{novel.linkText}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNovels;