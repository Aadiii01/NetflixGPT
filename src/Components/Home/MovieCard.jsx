import React,{useRef} from 'react'
import dayjs from "dayjs";
import { PosterURl } from '../../Utils/constants'

const MovieCard = ({poster,title,rd}) => {

  const elementRef = useRef(null);

  const handleMouseMove = (e) => {
    const element = elementRef.current;
    const { clientX, clientY } = e;
    const { left, top, width, height } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const angleX = -(clientY - centerY) / height * 10;
    const angleY = (clientX - centerX) / width * 10;

    element.style.transition = 'transform 0.2s ease';
    element.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  };

  const handleMouseLeave = () => {
    const element = elementRef.current;
    element.style.transition = 'transform 0.2s ease';
    element.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };
  return (
    <div className='mt-[8px] ml-[8px] mb-[19px]'>
      <div className='w-[125px] h-[187.5px] sm:w-48 sm:h-[300px] rounded-[4px] overflow-hidden cursor-pointer' ref={elementRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transformStyle: 'preserve-3d' }}>
        <img className='object-cover w-full h-full' src={PosterURl+poster}/>
      </div>
      <div className='flex text-white flex-col mt-[10px] font-NetflixL ml-[2px]'>
        <span className='mr-[10px] leading-6 truncate text-[16px] sm:text-[20px] sm:max-w-[172px] max-w-[102px]'>{title}</span>
        <span className='sm:text-[14px] text-[12px] opacity-50 pt-[4px] sm:pt-[8px]'>{dayjs(rd).format("MMM D, YYYY")}</span>
      </div>

    </div>
  )
}

export default MovieCard