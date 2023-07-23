import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function App() {
  const [idMenu, setIdMenu] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const scrollHandler = () => {
    if (window.scrollY < 1000) {
      setScrollY(window.scrollY)
    } else {
      setScrollY(0)
    }
    if (window.scrollY >= 550 && window.scrollY <= 1300) {
      setIdMenu(2)
    } else if (window.scrollY <= 400 && window.scrollY >= 10) {
      setIdMenu(1)
    } else if (window.scrollY >= 1100 && window.screenY <= 1500) {
      setIdMenu(3)
    }
    if (window.scrollY >= 2100 && window.scrollY <= 2300) {
      setSkillsID(1)
    }

    console.log(window.scrollY);
  }
  const [skillsID, setSkillsID] = useState(null)
  window.addEventListener('scroll', scrollHandler)
  const menuarr = [
    { id: 1, title: 'Home', href: '#tab-1' },
    { id: 2, title: 'About', href: '#tab-2' },
    { id: 3, title: 'Experience', href: '#tab-3' },
    { id: 4, title: 'Contact', href: '#tab-4' },
  ]
  const skillsArr = [
    { id: 1, title: 'Soft skills', },
    { id: 2, title: 'Technology', },
    { id: 3, title: 'Frameworks', },
  ]

  return (
    <div className='font-roboto scroll-smooth'>
      <header id='tab-1' className='font-lato'>
        <div
          style={{ background: `url(/images/bgheader.jpg)` }}
          className='w-full h-screen bg-center bg-cover overflow-hidden relative'>
          <div className='l w-full absolute  xl:left-10 left-0 z-50 duration-500'
            style={{ top: (scrollY / 2) - 30 }}>
            <img className='w-1/2' src="/images/meheader.png" />
          </div>
          <div
            data-aos-offset="200"
            data-aos-duration="3000"
            data-aos="fade-up"
            className={`r absolute right-10 md:right-16 text-right w-1/2 duration-500`}
            style={{ top: scrollY + 100 }}>
            <h3 className='xl:text-4xl lg:text-3xl md:text2xl text-xl text-mainblue'>Hi there, my name is</h3>
            <h1 className='text-white xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-center tracking-widest bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text'>MOHAMMMAD REZA</h1>
            <h3 className='xl:text-4xl lg:text-3xl md:text2xl text-xl text-white'>I consider <span className='text-mainblue'>effort</span> and <span className='text-mainblue'>perseverance</span> more important than anything in my work and the word <span className='text-mainblue'>"I can't"</span> does not exist in my mind</h3>
          </div>
          <a href='#tab-2' className='absolute text-white bottom-16 right-24 text-8xl animate-bounce cursor-pointer z-50 '>
            <IoIosArrowDown className='cursor-pointer animate-pulse'></IoIosArrowDown>
          </a>
        </div>
      </header>
      {/* start menu */}
      <div className=' sticky left-0 top-0 grid grid-cols-4 gap-px text-header1 md:text-2xl font-lato shadow-lg bg-white overflow-x-hidden z-50'>
        {
          menuarr.map((item) => (
            <a onClick={() => setIdMenu(item.id)} className='py-4 flex justify-center items-center' href={item.href}>{item.title}</a>
          ))
        }
        <div className='absolute w-full h-2 bottom-0'>
          <span className={`xl:w-80 lg:w-72 md:w-60 sm:w-44 w-32 h-full bg-mainblue inline-block absolute duration-1000 ease-in-out rounded-md ${idMenu === 1 ? `translate-x-[0%]` : idMenu === 2 ? 'translate-x-[100%]' : idMenu === 3 ? 'translate-x-[200%]' : idMenu === 4 ? 'translate-x-[300%]' : ''}`}></span>
        </div>
      </div>
      {/* end menu */}
      {/* start about us */}
      <div
        data-aos-offset="200"
        data-aos-duration="3000"
        data-aos="fade-up"
        id='tab-2'
        className='text-center pt-28 px-10'>
        <h2

          className='font-lato text-4xl sm:text-5xl  md:text-6xl text-header1 mb-28 tracking-widest'>About Me</h2>

        <div className='font-roboto text-slate-500 max-w-4xl mx-auto'>
          <p className=''>My name is Mohammad Reza Guderzi. My sports activities include swimming coaching and pool lifeguard certification. I am a parkour coach.</p>
          <p className='mt-5 '>I worked in the field of marketing as a sales manager and sales supervisor, and I have a bachelor's degree in psychology and a master's degree in psychology.</p>
          <p className='mt-5 '>I have been engaged in website design and front-end activities for two years. I have mastered HTML, CSS, JavaScript, React, and CSS frameworks such as Tailwind CSS, Bootstrap, and MEUI.</p>
          <p className='mt-5 '>Complete mastery of NPM, Git, GitHub, and various JS and React libraries</p>
        </div>
        {/* start git and... */}
        <div className='mt-10 md:flex-row md:justify-center md:gap-32 flex flex-col gap-5 items-center'>
          <a className=' group text-center bg-mainblue text-white overflow-hidden rounded-md font-bold' href="https://github.com/spdfalcon">
            <div className='flex items-center relative '>
              <div className='text-5xl z-30'>
                <AiFillGithub></AiFillGithub>
              </div>
              <div className='px-5 z-30'>
                <span>Connect on Github</span>
              </div>
              <span className='w-14 h-full bg-gray-400 absolute left-0 '></span>
              <span className='duration-500  w-14 h-full group-hover:w-full bg-gray-400/60 absolute left-0 '></span>
            </div>
          </a>
          <a className=' group text-center bg-mainblue text-white overflow-hidden rounded-md font-bold' href="https://www.instagram.com/spd.mohammadreza/">
            <div className='flex items-center relative'>
              <div className='text-5xl z-30'>
                <AiOutlineInstagram></AiOutlineInstagram>
              </div>
              <div className='px-5 z-30'>
                <span>Connect on Instagram</span>
              </div>
              <span className='w-14 h-full bg-red-400 absolute left-0 '></span>
              <span className='duration-500  w-14 h-full group-hover:w-full bg-red-400/60 absolute left-0 '></span>
            </div>
          </a>
        </div>
        {/* end git and... */}
      </div>
      {/* end about us */}
      {/* start head */}





      {/* end head */}
      {/* start Experience */}
      <div id='tab-3' className='mt-36 bg-gradient-to-b from-white to-gray-200  overflow-hidden py-32'>
        <div className='text-center'>
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="3000"
            className='font-lato text-4xl sm:text-5xl  md:text-6xl text-header1 tracking-widest'>Experience</h2>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="3000"
          className='mt-20 cursor-pointer'>
          <Swiper

            autoplay={{
              delay: 1000,
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            }}
            className=""
          >
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''>
                <div className='up text-white p-5 flex gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
                  <div className='l'>
                    <div className='bg-red-800 w-10 h-10 rounded-full'></div>
                  </div>
                  <div className='r flex flex-col'>
                    <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                    <h2 className=''>Lorem, ipsum.</h2>
                    <h2>Lorem ipsum dolor sit.</h2>
                  </div>
                </div>
                <div className='down p-5'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo ab praesentium, aut numquam mollitia facilis sunt eaque earum consectetur repudiandae odio id dolores iste aliquam modi ullam quae dolore voluptates ducimus! Commodi sunt illo, labore et cum cupiditate atque quibusdam fuga earum placeat repellat totam eos a! Nam error dolore dolores cupiditate accusamus, aliquid ducimus, tempore facilis distinctio debitis quisquam perferendis quae illum earum officiis quos temporibus praesentium assumenda fugit numquam eligendi, sapiente corrupti! Itaque eveniet laborum, voluptatem eum quam ex. Sunt vel earum officia. Similique vitae corporis sunt perspiciatis incidunt, quis animi aspernatur numquam dignissimos vero excepturi maiores, ipsam dicta molestias. Sunt provident sequi unde nemo consectetur animi doloribus architecto amet esse quo assumenda deleniti sed adipisci alias aliquid nisi quaerat eligendi dicta, voluptatum, et in magni corrupti iusto. Molestiae eveniet esse cupiditate reiciendis voluptatum, iure repudiandae earum, quo nesciunt at corporis! Magnam voluptas alias corrupti facere laudantium?</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''>
                <div className='up text-white p-5 flex gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
                  <div className='l'>
                    <div className='bg-red-800 w-10 h-10 rounded-full'></div>
                  </div>
                  <div className='r flex flex-col'>
                    <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                    <h2 className=''>Lorem, ipsum.</h2>
                    <h2>Lorem ipsum dolor sit.</h2>
                  </div>
                </div>
                <div className='down p-5'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo ab praesentium, aut numquam mollitia facilis sunt eaque earum consectetur repudiandae odio id dolores iste aliquam modi ullam quae dolore voluptates ducimus! Commodi sunt illo, labore et cum cupiditate atque quibusdam fuga earum placeat repellat totam eos a! Nam error dolore dolores cupiditate accusamus, aliquid ducimus, tempore facilis distinctio debitis quisquam perferendis quae illum earum officiis quos temporibus praesentium assumenda fugit numquam eligendi, sapiente corrupti! Itaque eveniet laborum, voluptatem eum quam ex. Sunt vel earum officia. Similique vitae corporis sunt perspiciatis incidunt, quis animi aspernatur numquam dignissimos vero excepturi maiores, ipsam dicta molestias. Sunt provident sequi unde nemo consectetur animi doloribus architecto amet esse quo assumenda deleniti sed adipisci alias aliquid nisi quaerat eligendi dicta, voluptatum, et in magni corrupti iusto. Molestiae eveniet esse cupiditate reiciendis voluptatum, iure repudiandae earum, quo nesciunt at corporis! Magnam voluptas alias corrupti facere laudantium?</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''>
                <div className='up text-white p-5 flex gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
                  <div className='l'>
                    <div className='bg-red-800 w-10 h-10 rounded-full'></div>
                  </div>
                  <div className='r flex flex-col'>
                    <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                    <h2 className=''>Lorem, ipsum.</h2>
                    <h2>Lorem ipsum dolor sit.</h2>
                  </div>
                </div>
                <div className='down p-5'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo ab praesentium, aut numquam mollitia facilis sunt eaque earum consectetur repudiandae odio id dolores iste aliquam modi ullam quae dolore voluptates ducimus! Commodi sunt illo, labore et cum cupiditate atque quibusdam fuga earum placeat repellat totam eos a! Nam error dolore dolores cupiditate accusamus, aliquid ducimus, tempore facilis distinctio debitis quisquam perferendis quae illum earum officiis quos temporibus praesentium assumenda fugit numquam eligendi, sapiente corrupti! Itaque eveniet laborum, voluptatem eum quam ex. Sunt vel earum officia. Similique vitae corporis sunt perspiciatis incidunt, quis animi aspernatur numquam dignissimos vero excepturi maiores, ipsam dicta molestias. Sunt provident sequi unde nemo consectetur animi doloribus architecto amet esse quo assumenda deleniti sed adipisci alias aliquid nisi quaerat eligendi dicta, voluptatum, et in magni corrupti iusto. Molestiae eveniet esse cupiditate reiciendis voluptatum, iure repudiandae earum, quo nesciunt at corporis! Magnam voluptas alias corrupti facere laudantium?</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''>
                <div className='up text-white p-5 flex gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
                  <div className='l'>
                    <div className='bg-red-800 w-10 h-10 rounded-full'></div>
                  </div>
                  <div className='r flex flex-col'>
                    <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                    <h2 className=''>Lorem, ipsum.</h2>
                    <h2>Lorem ipsum dolor sit.</h2>
                  </div>
                </div>
                <div className='down p-5'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo ab praesentium, aut numquam mollitia facilis sunt eaque earum consectetur repudiandae odio id dolores iste aliquam modi ullam quae dolore voluptates ducimus! Commodi sunt illo, labore et cum cupiditate atque quibusdam fuga earum placeat repellat totam eos a! Nam error dolore dolores cupiditate accusamus, aliquid ducimus, tempore facilis distinctio debitis quisquam perferendis quae illum earum officiis quos temporibus praesentium assumenda fugit numquam eligendi, sapiente corrupti! Itaque eveniet laborum, voluptatem eum quam ex. Sunt vel earum officia. Similique vitae corporis sunt perspiciatis incidunt, quis animi aspernatur numquam dignissimos vero excepturi maiores, ipsam dicta molestias. Sunt provident sequi unde nemo consectetur animi doloribus architecto amet esse quo assumenda deleniti sed adipisci alias aliquid nisi quaerat eligendi dicta, voluptatum, et in magni corrupti iusto. Molestiae eveniet esse cupiditate reiciendis voluptatum, iure repudiandae earum, quo nesciunt at corporis! Magnam voluptas alias corrupti facere laudantium?</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''>
                <div className='up text-white p-5 flex gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
                  <div className='l'>
                    <div className='bg-red-800 w-10 h-10 rounded-full'></div>
                  </div>
                  <div className='r flex flex-col'>
                    <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                    <h2 className=''>Lorem, ipsum.</h2>
                    <h2>Lorem ipsum dolor sit.</h2>
                  </div>
                </div>
                <div className='down p-5'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo ab praesentium, aut numquam mollitia facilis sunt eaque earum consectetur repudiandae odio id dolores iste aliquam modi ullam quae dolore voluptates ducimus! Commodi sunt illo, labore et cum cupiditate atque quibusdam fuga earum placeat repellat totam eos a! Nam error dolore dolores cupiditate accusamus, aliquid ducimus, tempore facilis distinctio debitis quisquam perferendis quae illum earum officiis quos temporibus praesentium assumenda fugit numquam eligendi, sapiente corrupti! Itaque eveniet laborum, voluptatem eum quam ex. Sunt vel earum officia. Similique vitae corporis sunt perspiciatis incidunt, quis animi aspernatur numquam dignissimos vero excepturi maiores, ipsam dicta molestias. Sunt provident sequi unde nemo consectetur animi doloribus architecto amet esse quo assumenda deleniti sed adipisci alias aliquid nisi quaerat eligendi dicta, voluptatum, et in magni corrupti iusto. Molestiae eveniet esse cupiditate reiciendis voluptatum, iure repudiandae earum, quo nesciunt at corporis! Magnam voluptas alias corrupti facere laudantium?</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''>
                <div className='up text-white p-5 flex gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
                  <div className='l'>
                    <div className='bg-red-800 w-10 h-10 rounded-full'></div>
                  </div>
                  <div className='r flex flex-col'>
                    <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                    <h2 className=''>Lorem, ipsum.</h2>
                    <h2>Lorem ipsum dolor sit.</h2>
                  </div>
                </div>
                <div className='down p-5'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo ab praesentium, aut numquam mollitia facilis sunt eaque earum consectetur repudiandae odio id dolores iste aliquam modi ullam quae dolore voluptates ducimus! Commodi sunt illo, labore et cum cupiditate atque quibusdam fuga earum placeat repellat totam eos a! Nam error dolore dolores cupiditate accusamus, aliquid ducimus, tempore facilis distinctio debitis quisquam perferendis quae illum earum officiis quos temporibus praesentium assumenda fugit numquam eligendi, sapiente corrupti! Itaque eveniet laborum, voluptatem eum quam ex. Sunt vel earum officia. Similique vitae corporis sunt perspiciatis incidunt, quis animi aspernatur numquam dignissimos vero excepturi maiores, ipsam dicta molestias. Sunt provident sequi unde nemo consectetur animi doloribus architecto amet esse quo assumenda deleniti sed adipisci alias aliquid nisi quaerat eligendi dicta, voluptatum, et in magni corrupti iusto. Molestiae eveniet esse cupiditate reiciendis voluptatum, iure repudiandae earum, quo nesciunt at corporis! Magnam voluptas alias corrupti facere laudantium?</p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
      {/* end Experience */}
      {/* start skills */}

      <div className=''>

        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="3000"
          className='mt-36'>
          <div className='font-lato text-4xl sm:text-5xl  md:text-6xl text-header1 text-center tracking-widest'><h2>Skills</h2></div>
        </div>

        {/* end menu skills */}
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="3000"
          className='relative flex justify-evenly mt-20 py-3 overflow-x-hidden'>
          {
            skillsArr.map((item) => (
              <h3 onClick={() => setSkillsID(item.id)} className={`text-xl px-14 py-2 cursor-pointer`}>{item.title}</h3>
            ))
          }
          <span className={`absolute duration-1000 ease-in-out w-14 h-1 bg-mainblue bottom-0  rounded-md curs ${skillsID === 1 || skillsID === 0 ? 'lg:left-1/3 lg:-translate-x-44 md:left-36 sm:left-24 left-16' : skillsID === 2 ? 'lg:left-2/3 lg:-translate-x-60 md:left-2/4 md:-translate-x-10 sm:left-72 left-64' : skillsID === 3 ? 'lg:left-full lg:-translate-x-60 md:left-2/3 md:translate-x-20 sm:left-3/4 sm:translate-x-5 left-3/4 translate-x-5' : ''}`}></span>
        </div>

        {/* skills */}

        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="3000"
          className='px-20 mt-10'>
          <div>
            <ul className={`flex flex-col gap-5 md:text-lg text-xs text-white relative `}>



              <li className={`relative  ${skillsID === 1 ? 'w-4/5' : skillsID === 2 ? 'w-11/12' : skillsID === 3 ? `w-2/3` : ''} rounded-e-md overflow-hidden py-5`}>
                <span className={`absolute duration-1000 bottom-1/2 translate-y-1/2 ${skillsID === 1 ? 'left-3' : '-left-full'}`}>High expression fan</span>
                <span className={`duration-1000 absolute h-full bg-mainblue bottom-0 left-0 -z-10 ${skillsID === 1 ? 'w-full' : 'w-0'}`}></span>


                <span className={`absolute duration-1000 bottom-1/2 translate-y-1/2 ${skillsID === 2 ? 'left-3' : '-left-full'}`}>HTML & HTML5</span>
                <span className={`duration-1000 absolute h-full bg-mainblue bottom-0 left-0 -z-10 ${skillsID === 2 ? 'w-full' : 'w-0'}`}></span>


                <span className={`absolute duration-1000 bottom-1/2 translate-y-1/2 ${skillsID === 3 ? 'left-3' : '-left-full'}`}>js: React, NextJs & Library</span>
                <span className={`duration-1000 absolute h-full bg-mainblue bottom-0 left-0 -z-10 ${skillsID === 3 ? 'w-full' : 'w-0'}`}></span>
              </li>



              <li className={`relative  ${skillsID === 1 ? 'w-1/2' : skillsID === 2 ? 'w-3/4' : skillsID === 3 ? `w-11/12` : ''} rounded-e-md overflow-hidden py-5`}>
                <span className={`absolute duration-1000 delay-200 bottom-1/2 translate-y-1/2 ${skillsID === 1 ? 'left-3' : '-left-full'}`}>Problem-solving skills</span>
                <span className={`duration-1000 delay-200 absolute h-full bg-mainblue bottom-0 left-0 -z-10 ${skillsID === 1 ? 'w-full' : 'w-0'}`}></span>


                <span className={`absolute duration-1000 delay-200 bottom-1/2 translate-y-1/2 ${skillsID === 2 ? 'left-3' : '-left-full'}`}>CSS & CSS3</span>
                <span className={`duration-1000 delay-200 absolute h-full bg-mainblue bottom-0 left-0 -z-10 ${skillsID === 2 ? 'w-full' : 'w-0'}`}></span>


                <span className={`absolute duration-1000 delay-200 bottom-1/2 translate-y-1/2 ${skillsID === 3 ? 'left-3' : '-left-full'}`}>CSS: Tailwindcss, Bootstrap</span>
                <span className={`duration-1000 delay-200 absolute h-full bg-mainblue bottom-0 left-0 -z-10 ${skillsID === 3 ? 'w-full' : 'w-0'}`}></span>
              </li>



              <li className={`relative  ${skillsID === 1 ? 'w-3/4' : skillsID === 2 ? 'w-2/3' : skillsID === 3 ? `w-3/5` : ''} rounded-e-md overflow-hidden py-5`}>
                <span className={`absolute duration-1000 delay-300 bottom-1/2 translate-y-1/2 ${skillsID === 1 ? 'left-3' : '-left-full'}`}>Emotional intelligence</span>
                <span className={`duration-1000 delay-300 absolute h-full bg-mainblue bottom-0 left-0 -z-10 ${skillsID === 1 ? 'w-full' : 'w-0'}`}></span>


                <span className={`absolute duration-1000 delay-300 bottom-1/2 translate-y-1/2 ${skillsID === 2 ? 'left-3' : '-left-full'}`}>Javascript</span>
                <span className={`duration-1000 delay-300 absolute h-full bg-mainblue bottom-0 left-0 -z-10 ${skillsID === 2 ? 'w-full' : 'w-0'}`}></span>


                <span className={`absolute duration-1000 delay-300 bottom-1/2 translate-y-1/2 ${skillsID === 3 ? 'left-3' : '-left-full'}`}>All Library in react, js</span>
                <span className={`duration-1000 delay-300 absolute h-full bg-mainblue bottom-0 left-0 -z-10 ${skillsID === 3 ? 'w-full' : 'w-0'}`}></span>
              </li>



              <li className={`relative  ${skillsID === 1 ? 'w-11/12' : skillsID === 2 ? 'w-4/5' : skillsID === 3 ? `w-4/6` : ''} rounded-e-md overflow-hidden py-5`}>
                <span className={`absolute duration-1000 delay-500 bottom-1/2 translate-y-1/2 ${skillsID === 1 ? 'left-3' : '-left-full'}`}>Teamwork skills</span>
                <span className={`duration-1000 delay-500 absolute h-full bg-mainblue bottom-0 left-0 -z-10 ${skillsID === 1 ? 'w-full' : 'w-0'}`}></span>


                <span className={`absolute duration-1000 delay-500 bottom-1/2 translate-y-1/2 ${skillsID === 2 ? 'left-3' : '-left-full'}`}>NPM & Git & Github</span>
                <span className={`duration-1000 delay-500 absolute h-full bg-mainblue bottom-0 left-0 -z-10 ${skillsID === 2 ? 'w-full' : 'w-0'}`}></span>


                <span className={`absolute duration-1000 delay-500 bottom-1/2 translate-y-1/2 ${skillsID === 3 ? 'left-3' : '-left-full'}`}>Typrscript,Redux,Regex</span>
                <span className={`duration-1000 delay-500 absolute h-full bg-mainblue bottom-0 left-0 -z-10 ${skillsID === 3 ? 'w-full' : 'w-0'}`}></span>
              </li>
              <div className='absolute -bottom-16 w-16 -left-16 text-black'>
                <span className='absolute bottom-5 right-0 w-px h-72 bg-gray-300'></span>
                <span className='inline-block w-10'>SKILL LEVEL:</span>
              </div>
              <div className='absolute -bottom-16 left-1/4 -translate-x-1/4 text-gray-400'>
                <span className='absolute bottom-5 right-0 w-px h-72 bg-gray-300'></span>
                <span className='inline-block '>The basics</span>
              </div>
              <div className='absolute -bottom-16 left-1/2 -translate-x-1/2 text-gray-400'>
                <span className='absolute bottom-5 right-0 w-px h-72 bg-gray-300'></span>
                <span className='inline-block '>Advanced</span>
              </div>
              <div className='absolute -bottom-16 left-3/4 -translate-x-left-3/4 text-gray-400'>
                <span className='absolute bottom-5 right-0 w-px h-72 bg-gray-300'></span>
                <span className='inline-block '>Seasoned</span>
              </div>


            </ul>
          </div>
        </div>
        {/* skills */}



      </div>
      {/* menu skills */}



      {/* end skills */}

      {/* start Clifton Strengths*/}

      <div className='font-lato mt-36 text-white '>
        <div className='w-full py-24 bg-bgdark flex flex-col '>
          <div className='text-center'>
            <h2
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="3000"
              className='text-4xl sm:text-5xl  md:text-6xl tracking-widest'>Clifton Strengths
            </h2>
          </div>
          <div className=' flex flex-wrap gap-10 px-32 mt-24 justify-center'>
            <div
              data-aos="fade-left"
              data-aos-offset="250"
              data-aos-duration="1000"
              className='bg-gradient-to-br from-red-500 to-red-800 w-64 h-64 rounded-lg flex justify-center items-center text-2xl '>
              <h3>Strategic</h3>
            </div>
            <div
              data-aos="fade-down"
              data-aos-offset="250"
              data-aos-duration="1000"
              className='bg-gradient-to-br from-blue-500 to-blue-800 w-64 h-64 rounded-lg flex justify-center items-center text-2xl '>
              <h3>Individualization</h3>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="250"
              data-aos-duration="1000"
              className='bg-gradient-to-br from-rose-500 to-rose-800 w-64 h-64 rounded-lg flex justify-center items-center text-2xl '>
              <h3>Futuristic</h3>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="250"
              data-aos-duration="1000"
              className='bg-gradient-to-br from-yellow-500 to-yellow-800 w-64 h-64 rounded-lg flex justify-center items-center text-2xl '>
              <h3>Activator</h3>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="250"
              data-aos-duration="1000"
              className='bg-gradient-to-br from-amber-500 to-amber-800 w-64 h-64 rounded-lg flex justify-center items-center text-2xl '>
              <h3>Significance</h3>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="250"
              data-aos-duration="1000"
              className='bg-gradient-to-br from-teal-500 to-teal-800 w-64 h-64 rounded-lg flex justify-center items-center text-2xl '>
              <h3>Ideator</h3>
            </div>
          </div>
        </div>
      </div>

      {/* end Clifton Strengths*/}



      {/* start Experience */}
      <div id='tab-3' className='mt-36 bg-gradient-to-b from-white to-gray-200  overflow-hidden py-32'>
        <div className='text-center'>
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="3000"
            className='font-lato text-4xl sm:text-5xl  md:text-6xl text-header1 tracking-widest'>Recommendations</h2>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="3000"
          className='mt-20 cursor-pointer'>
          <Swiper

            autoplay={{
              delay: 1000,
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            }}
            className=""
          >
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''>
                <div className='up text-white p-5 flex flex-col text-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
                  <div className='l'>
                    <div className='bg-red-800 w-10 h-10 rounded-full'></div>
                  </div>
                  <div className='r flex flex-col'>
                    <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                    <h2 className=''>Lorem, ipsum.</h2>
                    <h2>Lorem ipsum dolor sit.</h2>
                  </div>
                </div>
                <div className='down p-5'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo ab praesentium, aut numquam mollitia facilis sunt eaque earum consectetur repudiandae odio id dolores iste aliquam modi ullam quae dolore voluptates ducimus! Commodi sunt illo, labore et cum cupiditate atque quibusdam fuga earum placeat repellat totam eos a! Nam error dolore dolores cupiditate accusamus, aliquid ducimus, tempore facilis distinctio debitis quisquam perferendis quae illum earum officiis quos temporibus praesentium assumenda fugit numquam eligendi, sapiente corrupti! Itaque eveniet laborum, voluptatem eum quam ex. Sunt vel earum officia. Similique vitae corporis sunt perspiciatis incidunt, quis animi aspernatur numquam dignissimos vero excepturi maiores, ipsam dicta molestias. Sunt provident sequi unde nemo consectetur animi doloribus architecto amet esse quo assumenda deleniti sed adipisci alias aliquid nisi quaerat eligendi dicta, voluptatum, et in magni corrupti iusto. Molestiae eveniet esse cupiditate reiciendis voluptatum, iure repudiandae earum, quo nesciunt at corporis! Magnam voluptas alias corrupti facere laudantium?</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''>
                <div className='up text-white p-5 flex flex-col text-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
                  <div className='l'>
                    <div className='bg-red-800 w-10 h-10 rounded-full'></div>
                  </div>
                  <div className='r flex flex-col'>
                    <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                    <h2 className=''>Lorem, ipsum.</h2>
                    <h2>Lorem ipsum dolor sit.</h2>
                  </div>
                </div>
                <div className='down p-5'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo ab praesentium, aut numquam mollitia facilis sunt eaque earum consectetur repudiandae odio id dolores iste aliquam modi ullam quae dolore voluptates ducimus! Commodi sunt illo, labore et cum cupiditate atque quibusdam fuga earum placeat repellat totam eos a! Nam error dolore dolores cupiditate accusamus, aliquid ducimus, tempore facilis distinctio debitis quisquam perferendis quae illum earum officiis quos temporibus praesentium assumenda fugit numquam eligendi, sapiente corrupti! Itaque eveniet laborum, voluptatem eum quam ex. Sunt vel earum officia. Similique vitae corporis sunt perspiciatis incidunt, quis animi aspernatur numquam dignissimos vero excepturi maiores, ipsam dicta molestias. Sunt provident sequi unde nemo consectetur animi doloribus architecto amet esse quo assumenda deleniti sed adipisci alias aliquid nisi quaerat eligendi dicta, voluptatum, et in magni corrupti iusto. Molestiae eveniet esse cupiditate reiciendis voluptatum, iure repudiandae earum, quo nesciunt at corporis! Magnam voluptas alias corrupti facere laudantium?</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''>
                <div className='up text-white p-5 flex flex-col text-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
                  <div className='l'>
                    <div className='bg-red-800 w-10 h-10 rounded-full'></div>
                  </div>
                  <div className='r flex flex-col'>
                    <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                    <h2 className=''>Lorem, ipsum.</h2>
                    <h2>Lorem ipsum dolor sit.</h2>
                  </div>
                </div>
                <div className='down p-5'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo ab praesentium, aut numquam mollitia facilis sunt eaque earum consectetur repudiandae odio id dolores iste aliquam modi ullam quae dolore voluptates ducimus! Commodi sunt illo, labore et cum cupiditate atque quibusdam fuga earum placeat repellat totam eos a! Nam error dolore dolores cupiditate accusamus, aliquid ducimus, tempore facilis distinctio debitis quisquam perferendis quae illum earum officiis quos temporibus praesentium assumenda fugit numquam eligendi, sapiente corrupti! Itaque eveniet laborum, voluptatem eum quam ex. Sunt vel earum officia. Similique vitae corporis sunt perspiciatis incidunt, quis animi aspernatur numquam dignissimos vero excepturi maiores, ipsam dicta molestias. Sunt provident sequi unde nemo consectetur animi doloribus architecto amet esse quo assumenda deleniti sed adipisci alias aliquid nisi quaerat eligendi dicta, voluptatum, et in magni corrupti iusto. Molestiae eveniet esse cupiditate reiciendis voluptatum, iure repudiandae earum, quo nesciunt at corporis! Magnam voluptas alias corrupti facere laudantium?</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''>
                <div className='up text-white p-5 flex flex-col text-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
                  <div className='l'>
                    <div className='bg-red-800 w-10 h-10 rounded-full'></div>
                  </div>
                  <div className='r flex flex-col'>
                    <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                    <h2 className=''>Lorem, ipsum.</h2>
                    <h2>Lorem ipsum dolor sit.</h2>
                  </div>
                </div>
                <div className='down p-5'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo ab praesentium, aut numquam mollitia facilis sunt eaque earum consectetur repudiandae odio id dolores iste aliquam modi ullam quae dolore voluptates ducimus! Commodi sunt illo, labore et cum cupiditate atque quibusdam fuga earum placeat repellat totam eos a! Nam error dolore dolores cupiditate accusamus, aliquid ducimus, tempore facilis distinctio debitis quisquam perferendis quae illum earum officiis quos temporibus praesentium assumenda fugit numquam eligendi, sapiente corrupti! Itaque eveniet laborum, voluptatem eum quam ex. Sunt vel earum officia. Similique vitae corporis sunt perspiciatis incidunt, quis animi aspernatur numquam dignissimos vero excepturi maiores, ipsam dicta molestias. Sunt provident sequi unde nemo consectetur animi doloribus architecto amet esse quo assumenda deleniti sed adipisci alias aliquid nisi quaerat eligendi dicta, voluptatum, et in magni corrupti iusto. Molestiae eveniet esse cupiditate reiciendis voluptatum, iure repudiandae earum, quo nesciunt at corporis! Magnam voluptas alias corrupti facere laudantium?</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''>
                <div className='up text-white p-5 flex flex-col text-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
                  <div className='l'>
                    <div className='bg-red-800 w-10 h-10 rounded-full'></div>
                  </div>
                  <div className='r flex flex-col'>
                    <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                    <h2 className=''>Lorem, ipsum.</h2>
                    <h2>Lorem ipsum dolor sit.</h2>
                  </div>
                </div>
                <div className='down p-5'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo ab praesentium, aut numquam mollitia facilis sunt eaque earum consectetur repudiandae odio id dolores iste aliquam modi ullam quae dolore voluptates ducimus! Commodi sunt illo, labore et cum cupiditate atque quibusdam fuga earum placeat repellat totam eos a! Nam error dolore dolores cupiditate accusamus, aliquid ducimus, tempore facilis distinctio debitis quisquam perferendis quae illum earum officiis quos temporibus praesentium assumenda fugit numquam eligendi, sapiente corrupti! Itaque eveniet laborum, voluptatem eum quam ex. Sunt vel earum officia. Similique vitae corporis sunt perspiciatis incidunt, quis animi aspernatur numquam dignissimos vero excepturi maiores, ipsam dicta molestias. Sunt provident sequi unde nemo consectetur animi doloribus architecto amet esse quo assumenda deleniti sed adipisci alias aliquid nisi quaerat eligendi dicta, voluptatum, et in magni corrupti iusto. Molestiae eveniet esse cupiditate reiciendis voluptatum, iure repudiandae earum, quo nesciunt at corporis! Magnam voluptas alias corrupti facere laudantium?</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''>
                <div className='up text-white p-5 flex flex-col text-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 items-center'>
                  <div className='l'>
                    <div className='bg-red-800 w-10 h-10 rounded-full'></div>
                  </div>
                  <div className='r flex flex-col'>
                    <h3 className='font-bold text-2xl'>Lorem ipsum dolor sit amet.</h3>
                    <h2 className=''>Lorem, ipsum.</h2>
                    <h2>Lorem ipsum dolor sit.</h2>
                  </div>
                </div>
                <div className='down p-5'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo ab praesentium, aut numquam mollitia facilis sunt eaque earum consectetur repudiandae odio id dolores iste aliquam modi ullam quae dolore voluptates ducimus! Commodi sunt illo, labore et cum cupiditate atque quibusdam fuga earum placeat repellat totam eos a! Nam error dolore dolores cupiditate accusamus, aliquid ducimus, tempore facilis distinctio debitis quisquam perferendis quae illum earum officiis quos temporibus praesentium assumenda fugit numquam eligendi, sapiente corrupti! Itaque eveniet laborum, voluptatem eum quam ex. Sunt vel earum officia. Similique vitae corporis sunt perspiciatis incidunt, quis animi aspernatur numquam dignissimos vero excepturi maiores, ipsam dicta molestias. Sunt provident sequi unde nemo consectetur animi doloribus architecto amet esse quo assumenda deleniti sed adipisci alias aliquid nisi quaerat eligendi dicta, voluptatum, et in magni corrupti iusto. Molestiae eveniet esse cupiditate reiciendis voluptatum, iure repudiandae earum, quo nesciunt at corporis! Magnam voluptas alias corrupti facere laudantium?</p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
      {/* end Experience */}



      {/* start Portfolio */}


      <div id='tab-3' className='mt-36 bg-gradient-to-b from-white to-gray-200  overflow-hidden py-32 text-center'>
        <div className='text-center'>
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="3000"
            className='font-lato text-4xl sm:text-5xl  md:text-6xl text-header1 tracking-widest'>Portfolio</h2>
        </div>
        <div className='flex justify-center mt-10 text-gray-500'><p className='max-w-xl'>Though actually doing web and graphic design is not my main area of focus anymore, it sure is fun to do! Here are a handful of items from my portfolio over the last 13 years.</p></div>
        <div className='tracking-widest text-3xl mt-10 text-header1'><h4>Web & App Development</h4></div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="3000"
          className='mt-20 cursor-pointer'>
          <Swiper

            autoplay={{
              delay: 1000,
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            }}
            className=""
          >
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="http://mohammad70.ir/"><img src="/images/mohammad70.ir.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/GRXgaPq"><img src="/images/codepengradient.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/vYQamOp"><img src="/images/converter c to f.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/WNYKjQm"><img src="/images/AskeyCode.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/VwVBbeM"><img src="/images/TodoApp1.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/wvQxdWR"><img src="/images/changeColor.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/MWzBmbw"><img src="/images/clock.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/RwqBVKy"><img src="/images/wederApp.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/zYMLwwo"><img src="/images/browser.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/bGQjWRJ"><img src="/images/hamderMenu.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/NWEBjaZ"><img src="/images/searchText.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/jOQpaMV"><img src="/images/ofsetMenu.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/vYQaWXM"><img src="/images/DETECTINGTABCHANGE.png" alt="" /></a></div>
            </SwiperSlide>
            <SwiperSlide  className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div><a target='_blank' href="https://codepen.io/Spd-falcon/pen/ZEmjaeX"><img src="/images/dictionary.png" alt="" /></a></div>
            </SwiperSlide>
            
            

          </Swiper>
        </div>
      </div>


      {/* end Portfolio */}


      {/* start brand */}

      <div id='tab-3' className='mt-20 bg-gradient-to-b from-white to-gray-200  overflow-hidden py-32 text-center'>
        <div className='text-center'>
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="3000"
            className='font-lato text-4xl sm:text-5xl  md:text-6xl text-header1 tracking-widest'>Brand Design</h2>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="3000"
          className='mt-20 cursor-pointer'>
          <Swiper

            autoplay={{
              delay: 1000,
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className=""
          >
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''><img className='' src="/images/brand1.png" alt="" /></div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''><img className='' src="/images/brand2.png" alt="" /></div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''><img className='' src="/images/brand1.png" alt="" /></div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''><img className='' src="/images/brand2.png" alt="" /></div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''><img className='' src="/images/brand1.png" alt="" /></div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''><img className='' src="/images/brand2.png" alt="" /></div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''><img className='' src="/images/brand1.png" alt="" /></div>
            </SwiperSlide>
            <SwiperSlide className=' bg-white shadow-lg rounded-xl overflow-hidden' >
              <div className=''><img className='' src="/images/brand2.png" alt="" /></div>
            </SwiperSlide>
            
            

          </Swiper>
        </div>
      </div>



      {/* end brand */}
      <div className='h-screen'></div>
    </div>
  );
}

export default App;
