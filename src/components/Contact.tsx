import emailImg from '../assets/email.png'
import extImg from '../assets/arrow.png'
import winImg from '../assets/google-docs.png'
import cv from '../assets/CV.pdf'

export default function Contact(){

    return (
        <div className="w-full px-2" id="contact">
            <div className="mx-auto max-w-lg p-4 text-center mt-16 border-2 border-red-500 rounded-xl">
                <h2 className='font-bold text-red-500 mb-1 mx-auto'>Contact ME</h2>
                <h3 className='text-2xl font-extrabold mx-auto border-b-2 border-b-red-500 w-fit'>Let's Talk !</h3>
                <div className='flex justify-between mt-8 gap-4 mb-8 flex-wrap'>
                    <div className='flex gap-2 items-center'>
                        <figure className='rounded-full p-2 bg-red-500 w-fit'>
                            <img src={emailImg}  width={20}/>
                        </figure>
                        <div className='flex flex-col items-start'>
                            <h3 className='font-bold'>E-mail</h3>
                            <a href='mailto:legrandpone1@gmail.com' className='text-slate-500'>legrandpone1@gmail.com</a>
                        </div>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <figure className='rounded-full p-2 bg-red-500 w-fit'>
                            <img src={winImg}  width={20}/>
                        </figure>
                        <div className='flex flex-col items-start'>
                            <h3 className='font-bold'>My Résumé</h3>
                            <a className='text-slate-500' href={cv}>View here <img src={extImg} width={16} className='inline opacity-60'/> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

