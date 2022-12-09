import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai';
import myPhoto from './MyPhoto.png';
import logo from './logo.svg';

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
          <div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <img src={logo} width={100} height={100} alt='placeholder'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>React Apps</h3>
              <p className='py-2'>
                i sometimes create React applications. Change this to something more meaningful.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools i use</h4>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>MongoDB</p>
              <p className='text-gray-800 py-1'>Node</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
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

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
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
          <div>
            <div>
              <img src={logo} alt='placeholder'/>
            </div>
            <div>
              <img src={logo} alt='placeholder'/>
            </div>
            <div>
              <img src={logo} alt='placeholder'/>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
