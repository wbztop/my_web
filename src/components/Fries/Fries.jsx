import React from 'react';
import { Link } from 'react-router-dom';
import { friesContent } from '../../data/friesContent';

const Fries = () => {
  return (
    <section className='py-32'>
      <div className='min-h-screen flex flex-col justify-center items-center text-center mb-12'>
        <h2 className='text-4xl font-bold mb-8'>{friesContent.title}</h2>
        <img
          src={friesContent.image2}
          alt='Seagull Fries'
          className='rounded-lg shadow-lg mx-auto max-w-full sm:max-w-md'
        />
      </div>
      <div className='max-w-5xl mx-auto text-center mb-80'>
        <h3 className='text-3xl font-bold mb-6'>{friesContent.additionalTitle}</h3>
        <div className='text-lg text-stone-600 space-y-6'>
          {friesContent.additionalParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
        <div className='flex justify-center gap-4 mt-8'>
          <Link to="/app" className='bg-stone-800 text-white py-2 px-6 rounded-lg hover:bg-stone-700 transition-colors'>APP</Link>
          <Link to="/web-novel" className='bg-stone-800 text-white py-2 px-6 rounded-lg hover:bg-stone-700 transition-colors'>网络小说</Link>
          <Link to="/anime" className='bg-stone-800 text-white py-2 px-6 rounded-lg hover:bg-stone-700 transition-colors'>动漫</Link>
        </div>
      </div>
      <div className='max-w-5xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <img
              src={friesContent.image}
              alt='Fries'
              className='rounded-lg shadow-lg mx-auto max-w-full sm:max-w-md'
            />
          </div>
          <div className='relative pt-10'>
            <h3 className='absolute -top-4 left-20 text-4xl font-bold'>薯条</h3>
            <div className='text-lg text-stone-600 space-y-6'>
              {friesContent.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fries;