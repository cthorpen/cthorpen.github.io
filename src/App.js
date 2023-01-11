import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai';

import myPhoto from './assets/MyPhoto.png';
import react from './assets/React.png';
import xcode from './assets/XCode.png';
import androidstudio from './assets/AndroidStudio.png';
import mernstack from './assets/MERN.png';
import python from './assets/Python.png';

import { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const socials = {
    twitter: 'https://www.twitter.com/colettrain',
    linkedin: 'https://www.linkedin.com/in/colethorpen/',
    instagram: 'https://www.instagram.com/cole.thorpen/',
    github: 'https://github.com/cthorpen'
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <header>
        <title>Cole Thorpen Portfolio</title>
      </header>

      {/* navbar */}
      <main className='bg-white px-10 md:px-20 lg:px-30 dark:bg-gray-700'>
        <section className='min-h-screen pb-10'>
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-3xl font-texastangbold'>Cole Thorpen's Portfolio</h1> 
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-blue-400 to-purple-600 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>

          {/* name and intro */}
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-purple-600 font-texastangbold md:text-6xl'>Cole Thorpen</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
              I am a freelance developer looking to break into the industry. Here is my showcase of work. Add more here ...
            </p>
          </div>

          {/* social links */}
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href={socials.twitter} target='_blank' rel="noreferrer">
              <AiFillTwitterCircle className='cursor-pointer' />
            </a>
            <a href={socials.linkedin} target='_blank' rel="noreferrer">
              <AiFillLinkedin className='cursor-pointer' />
            </a>
            <a href={socials.instagram} target='_blank' rel="noreferrer">
              <AiFillInstagram className='cursor-pointer' />
            </a>
            <a href={socials.github} target='_blank' rel="noreferrer">
              <AiFillGithub className='cursor-pointer'/>
            </a>
          </div>

          {/* photo */}
          <div className='relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <img className='rounded-full' src={myPhoto} alt='placeholder'/>
          </div>
        </section>

        {/* software dev areas of interests */}
        <section>
          <div>
            <h3 className='text-3xl py-1 font-texastangbold'>Areas of Personal Interest</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              These are some areas of software development that I enjoy working with the most. 
              I have a passion for creating exciting programs that users can interact with in fun and informative ways.
              I have spent the majority of my software development career creating projects in these fields. 
              The possible creativity within these areas allow me to create applications for users to not only
              have fun, but to also learn valuable information using these technologies.
              <br/>
              <br/>
              Some of my favorite fields of software development include mobile development, web development, and data science/machine learning.
            </p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-blue-50 dark:bg-gray-100 imgContainer'>
              <div className='imgContainer'>
                {/* two images */}
                <img src={xcode} width={100} height={100} alt='placeholder'/>
              </div>
              <div>
                <img src={androidstudio} width={100} height={100} alt='placeholder'/>
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Mobile Development</h3>
              <p className='py-2'>
                Creating native iOS and Android applications.
              </p>
              <h4 className='py-4 text-teal-600 font-bold'>Design Tools & Practices</h4>
              <p className='text-gray-800 py-1'>iOS - Swift</p>
              <p className='text-gray-800 py-1'>Android - Java & Kotlin</p>
              <p className='text-gray-800 py-1'>Native SQLite Databases</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-blue-50 dark:bg-gray-100'>
              <img src={mernstack} width={100} height={100}alt='placeholder'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Web Development</h3>
              <p className='py-2'>
                Using the MERN Stack to create complete applications.
              </p>
              <h4 className='py-4 text-teal-600 font-bold'>Design Tools & Practices</h4>
              <p className='text-gray-800 py-1'>MongoDB - Database</p>
              <p className='text-gray-800 py-1'>React - Frontend Library</p>
              <p className='text-gray-800 py-1'>Node & Express - Middleware</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-blue-50 dark:bg-gray-100'>
              <img src={python} width={100} height={100} alt='placeholder' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Data Science</h3>
              <p className='py-2'>
                Creating ML algorithms & analyzing data.
              </p>
              <h4 className='py-4 text-teal-600 font-bold'>Design Tools & Practices</h4>
              <p className='text-gray-800 py-1'>Python - Preferred Language</p>
              <p className='text-gray-800 py-1'>SciKit Learn - Emulated Library</p>
              <p className='text-gray-800 py-1'>Jupyter Notebook - Visualizing Data</p>
            </div>
          </div>
        </section>

        {/* notable projects */}
        <section>
          <div>
            <h3 className='text-3xl py-1 font-texastangbold'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Use github api to display public repos here
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <img className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={react} alt='placeholder'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <img className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={react} alt='placeholder'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <img className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={react} alt='placeholder'/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
