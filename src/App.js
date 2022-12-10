import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai';
import myPhoto from './MyPhoto.png';
import logo from './logo.svg';
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

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-700'>
        <section className='min-h-screen'>
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-3xl font-allianty'>Cole Thorpen</h1> 
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-blue-400 to-purple-600 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-purple-600 font-medium md:text-6xl'>Cole Thorpen</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
              I am a freelance developer looking to break into the industry. Here is my showcase of work. Add more here ...
            </p>
          </div>

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

          <div className='relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <img className='rounded-full' src={myPhoto} alt='placeholder'/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I Offer, or something similar...</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Add some more 
              <span className='text-teal-600'> information </span> 
              here about myself...
            </p>
            <p className='text-md leading-8 text-gray-800'>
              Add some more stuff here or something...
            </p>
          </div>

          <div className='lg:flex gap-10'>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-100'>
              <img src={logo} width={100} height={100} alt='placeholder'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>React Apps</h3>
              <p className='py-2'>
                i sometimes create React applications
              </p>
              <h4 className='py-4 text-teal-600'>Design tools i use</h4>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>MongoDB</p>
              <p className='text-gray-800 py-1'>Node</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-100'>
              <img src={logo} width={100} height={100}alt='placeholder'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Something else here...</h3>
              <p className='py-2'>
                Fill this with another thing i do...
              </p>
              <h4 className='py-4 text-teal-600'>Design tools i use</h4>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>MongoDB</p>
              <p className='text-gray-800 py-1'>Node</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-100'>
              <img src={logo} width={100} height={100} alt='placeholder' />
              <h3 className='text-lg font-medium pt-8 pb-2'>something else here again</h3>
              <p className='py-2'>
                fill this out again 
              </p>
              <h4 className='py-4 text-teal-600'>Design tools i use</h4>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>MongoDB</p>
              <p className='text-gray-800 py-1'>Node</p>
            </div>

          </div>
        </section>

        <section>

          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Add some more 
              <span className='text-teal-600'> information </span> 
              here about myself...
            </p>
            <p className='text-md leading-8 text-gray-800'>
              Add some more stuff here or something...
            </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <img className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={logo} alt='placeholder'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <img className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={logo} alt='placeholder'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <img className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={logo} alt='placeholder'/>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}

export default App;
