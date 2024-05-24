import backImg from '../assets/me_xl_back.png'
import cv from '../assets/CV.pdf'


export default function Banner() {
    return (
        <div className="w-full">

            <div className="mx-auto max-w-6xl p-2 mt-6 flex relative sm:justify-center lg:justify-between items-center gap-12 flex-wrap">
                
                <div className='w-fit'>
                    <p className="text-xl"> Hi there, I'm</p>
                    <p className="text-7xl font-semibold text-red-500 border-b-8 border-b-red-500 inline-block">
                        Albert Fotso
                    </p>
                    <p className="text-xl mt-4">Fullstack & Mobile <span className="text-red-500">Developer</span></p>
                    <div className='flex gap-4 mt-4'>
                        <a href="mailto:legrandpone1@gmail.com" className='mt-4 font-semibold py-2 px-4 ring-red-500 border-2 border-red-500 bg-red-500 cursor-pointer rounded hover:shadow-xl hover:shadow-red-300'>
                            Contact Me
                        </a>
                        <a href={cv} className='mt-4 font-semibold py-2 px-4 ring-red-500 border-2 cursor-pointer border-red-500  rounded hover:bg-red-300'>
                            Download CV
                        </a>
                    </div>

                </div>
                <div className=''>
                    <img src={backImg} width={480} alt="" className='basis-[300px] min-w-[200px]' />
                </div>
            </div>

            <div className='mx-auto max-w-6xl px-2 py-2 mt-2 sm:text-center lg:text-start' id='about'>
                <h2 className='font-bold text-red-500 pb-2'>About me</h2>
                <h3 className='text-2xl font-extrabold'>Who i am</h3>
                <p className='mt-1 text-slate-700 max-w-md text-justify sm:mx-auto lg:mx-0'>Welcome to my personal website! My name is Albert Fotso, and I am a fullstack and mobile developer, as well as a third-year software engineering student. Passionate about technology, I love turning ideas into digital realities.

I design and implement complete web applications, from the user interface to the databases, using a variety of technologies and frameworks. In parallel, I develop intuitive and high-performance mobile applications for iOS and Android.

Thank you for visiting my site! Feel free to browse my projects and contact me for any collaboration or exchange of ideas.</p>
            </div>
        </div>
    );
}
