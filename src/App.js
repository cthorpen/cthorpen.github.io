import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai';
import myPhoto from './MyPhoto.png';

const App = () => {
  return (
    <div >
      <header>
        <title>Cole Thorpen Portfolio</title>
      </header>

      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-3xl font-allianty'>Cole Thorpen</h1> 
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-blue-400 to-purple-600 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-purple-600 font-medium'>Cole Thorpen</h2>
            <h3 className='text-2xl py-2'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              I am a freelance developer looking to break into the industry. Here is my showcase of work. Add more here ...
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillInstagram/>
            <AiFillGithub/>
          </div>
          <div className='relative mx-auto rounded-full w-80 h-80 mt-20'>
            <img className='rounded-full' src={myPhoto} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
