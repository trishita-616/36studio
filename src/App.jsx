import  { useEffect } from 'react'
import Canvas from './Canvas';
import './index.css';
import data from './data';
import LocomotiveScroll from 'locomotive-scroll';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const App = () => {
  const [showCanvas, setShowCanvas] = useState(true);
  const textRef = useRef(null);
  const growingRef = useRef(null);
 
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useGSAP(() => {
    textRef.current.addEventListener('click', (e) => {
      gsap.set(growingRef.current, {
        top: e.clientY,
        left: e.clientX,
      });
      gsap.to(growingRef.current, {
        scale: 1000,
        duration: 1,
        ease: 'power2.inOut',
      });
      setShowCanvas(!showCanvas);
      
    });
  });
    

  
  return (
    <>
    <span ref={growingRef} className='growing rounded-full block fixed top-0 left-0 w-5 h-5'></span>
    <div className="w-full relative min-h-screen bg-black text-white font-['helvetica_now_display']">
                {showCanvas && data[0].map((canvasdets, i) => (
                  <Canvas key={i} details={canvasdets} />
                ))}
                <div className='w-full h-screen flex flex-col justify-between '>
                    <nav className="px-4 py-2 z-50 flex justify-between items-center border-b border-black">
                      <div className='brand text-2xl font-bold'>thirtysixstudios</div>
                      <ul className="flex gap-8 justify-end">
                        {["What we do", "Who we are", "How we give back", "Talk to us"].map((link, i) => (
                          <li key={i}>
                            <a href={`#${link.toLowerCase()}`} className="text-blackhover:text-gray-300 text-2xl transition-colors">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className='w-full relative'>
                    <div className="text w-[21%] relative left-90">
                  <h3 className='text-4xl leading-[1.1] tracking-[-0.06em] font-medium'>At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.
                  </h3>                    
                    </div>
                    <div className='relative w-[24%] mt-8 left-90 z-50'>
                      <h3 className='text-xl leading-[1.2] tracking-[-0.06em] font-medium'> We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
                      </h3>
                      <p className='text-xl leading-[1.2] mt-5 tracking-[-0.06em] font-medium'>Scroll</p>
                      </div>
                    </div>
                    <div className='w-full relative z-50 leading-none text-[13.6rem] tracking-tight'> 
                      <h1 ref={textRef}>Thirtysixstudios</h1>
                    </div>
              </div> 
                     
    </div>
    <div className='w-full min-h-screen bg-black relative text-white p-20'>
    {data[1].map((canvasdets, i) => (
                  <Canvas key={i} details={canvasdets} />
                ))}
                <div className='w-full flex flex-col gap-10'>
                  <h1 className='text-5xl leading-[0.2]  font-medium'>Our brands</h1>
                  <div className='flex'>
                    <div className='w-full items-center'>
                      <div className='w-[50%]'>
                      <p className='text-2xl leading-[1.2] tracking-[-0.06em] font-medium z-1'>We partner with forward-thinking brands to create compelling digital experiences. Through thoughtful design, animation and technology, we help brands tell their stories in innovative ways that resonate with modern audiences.
                      </p>
                      </div>
                      
                      <img
          className="w-[80%] mt-10 relative" 
          src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
          alt=""/>
         {data[2].map((canvasdets, i) => (
                  <Canvas key={i} details={canvasdets} />
                ))}
                    </div>
                    
                  </div>
                </div>

    </div>
    
    </>
  )
}

export default App