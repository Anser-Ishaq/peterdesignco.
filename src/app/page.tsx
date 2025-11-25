'use client'

import Image from "next/image";
import CustomButton from "./components/ui/customButton/customButton";
import ModelViewer from "./components/sections/modelViewer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CustomInput from "./components/ui/customInput/customInput";
import CustomTextarea from "./components/ui/customTextarea/customTextarea";
import Accordion from "./components/shared/accordion";
const Home = () => {

  const latestPRojectArr = [
    { id: 1, src: '/p1.svg', rowSpan: '' },
    { id: 2, src: '/p2.svg', rowSpan: 'row-span-2' },
    { id: 3, src: '/p3.svg', rowSpan: '' },
    { id: 4, src: '/p3.svg', rowSpan: 'row-span-2' },
    { id: 5, src: '/p4.svg', rowSpan: 'row-span-2' },
    { id: 6, src: '/p1.svg', rowSpan: '' },
  ];

  const servicesArr = [
    { id: 1, src: '/serviceIcon1.svg', title: 'Material Selection' },
    { id: 2, src: '/serviceIcon2.svg', title: 'space planning' },
    { id: 3, src: '/serviceIcon3.svg', title: '3D renderings' },
    { id: 4, src: '/serviceIcon4.svg', title: 'project management' },
  ]

  const testimonialsArr = [
    {
      id: 1,
      imgSrc: '/testimonial-1.svg',
      review: 'Peter Design Co. transformed our office into a modern and functional space. Their attention to detail and professionalism were outstanding.',
      name: 'John Doe',
      position: 'CEO, Company A',
      stars: 5
    },
    {
      id: 2,
      imgSrc: '/testimonial-1.svg',
      review: 'Peter Design Co. transformed our office into a modern and functional space. Their attention to detail and professionalism were outstanding.',
      name: 'John Doe',
      position: 'CEO, Company A',
      stars: 5
    },
    {
      id: 3,
      imgSrc: '/testimonial-1.svg',
      review: 'Peter Design Co. transformed our office into a modern and functional space. Their attention to detail and professionalism were outstanding.',
      name: 'John Doe',
      position: 'CEO, Company A',
      stars: 5
    },
    {
      id: 4,
      imgSrc: '/testimonial-1.svg',
      review: 'Peter Design Co. transformed our office into a modern and functional space. Their attention to detail and professionalism were outstanding.',
      name: 'John Doe',
      position: 'CEO, Company A',
      stars: 5
    },
    {
      id: 5,
      imgSrc: '/testimonial-1.svg',
      review: 'Peter Design Co. transformed our office into a modern and functional space. Their attention to detail and professionalism were outstanding.',
      name: 'John Doe',
      position: 'CEO, Company A',
      stars: 5
    },
    {
      id: 6,
      imgSrc: '/testimonial-1.svg',
      review: 'Peter Design Co. transformed our office into a modern and functional space. Their attention to detail and professionalism were outstanding.',
      name: 'John Doe',
      position: 'CEO, Company A',
      stars: 5
    },
  ]
  return (
    <>
      {/* hero section */}
      <div className="relative w-full h-screen">
        <Image
          src="/home-bg.svg"
          alt="Home Image"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-[-40px] w-full flex justify-center items-center">
          <Image
            src="/main.svg"
            alt="Home Image"
            height={33}
            width={555}
            className="object-cover px-3.5"
          />
        </div>
      </div>

      {/* about section */}
      <div className="container mx-auto px-4 pt-[140px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-27">
        <div className="h-full">
          <Image
            src="/decor.svg"
            alt="Home Image"
            height={100}
            width={555}
            className="object-cover border-8 lg:border-12 border-gold w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-base font-medium text-black mb-5">About us</p>
          <p className="text-xl sm:text-5xl font-bold text-black mb-10">About Peter Design Co.</p>
          <p className="text-base font-normal mb-10 w-full lg:max-w-[80%]">We are a leading turnkey interior design and fit-out company in Pakistan, specializing in turnkey projects. We provide the best turnkey interior design and fit-out services in Pakistan, with extensive experience working on various types of premise.</p>
          <CustomButton text="Read More" icon="/arrow-forward.svg" animation="slide"/>
        </div>
      </div>
      {/* model section */}
      <div className="mt-[140px] bg-[url('/model-bg.svg')] bg-cover bg-center w-full bg-accent">
        <div className="container mx-auto px-4 py-20 h-full grid grid-cols-1 md:grid-cols-6">
          <div className="flex flex-row flex-wrap items-center md:items-start md:flex-col gap-11">
            <Image src='/360.svg' width={82} height={82} alt="360 degree" />
            <div>
              <p className="font-bold">Main Door</p>
              <p className="font-medium">Metal Gate</p>
            </div>
            <div>
              <p className="font-bold">windows:</p>
              <p className="font-medium">metal and fiber glass</p>
            </div>
            <div>
              <p className="font-bold">interrior:</p>
              <p className="font-medium">wooden furnished</p>
            </div>
            <div>
              <p className="font-bold">electricity:</p>
              <p className="font-medium">main and generator</p>
            </div>
            <div>
              <p className="font-bold">solar energy:</p>
              <p className="font-medium">800 kwh</p>
            </div>
          </div>
          <div className="flex justify-center items-center md:col-span-3">
            <ModelViewer
              url="/appt.glb"
              width={'100%'}
              height={'100%'}
              defaultZoom={1}
              // minZoomDistance={0.01}
              // maxZoomDistance={1}
              showScreenshotButton={false}
              defaultRotationY={0}
              autoRotate={true}
            />
          </div>
          <div className="md:col-span-2 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium">feature model</p>
              <p className="text-xl md:text-4xl font-bold">Make it with passion.</p>
            </div>
            <div className="relative hidden md:flex flex-row-reverse justify-end items-center gap-5">
              <p className="text-base font-medium">3d preview modelist living house</p>
              <Image src='/arrows.svg' width={88} height={206} alt="model arrows" />
            </div>
            <div className="flex flex-wrap gap-2">
              <CustomButton text="BUY NOW" icon="/arrow-forward.svg" animation="slide" />
              <CustomButton text="DESIGN YOUR OWN" icon="/arrow-forward.svg" animation="slide" backgroundColor={'bg-transparent!'} border={'border-1 border-gold'} />
            </div>
          </div>
        </div>

      </div>
      {/* END model section */}

      {/* portfolio section */}
      <div className="container mx-auto px-4 pt-[140px]">
        <div>
          <p className="text-base font-medium mb-5">LATEST PROJECTS</p>
          <p className="text-xl md:text-4xl font-bold mb-10">Made It With Passion.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
            {latestPRojectArr.map((item, index) => (
              <div
                key={index}
                className={`${item.rowSpan} relative overflow-hidden`}
              >
                <Image
                  src={item.src}
                  alt={item.src}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
      {/* END portfolio section */}

      {/* services section */}
      <div className="pt-[140px] lg:mb-[140px]">
        <div className="relative w-full">
          <div className="hidden lg:block w-full min-h-[435px] relative">
            <Image
              src="/services-bg.svg"
              alt="services bg"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:absolute inset-0 bg-[url('/services-bg.svg')] bg-cover bg-center w-full py-14 lg:py-0">
            <div className="container mx-auto px-4">
              <div className=" lg:mt-[116px]">
                <p className="text-base font-medium mb-5 text-white">SERVICES</p>
                <p className="text-2xl md:text-4xl font-bold mb-10 text-white">Our Services</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {servicesArr.map((item) => (
                    <div key={item.id} className="flex flex-col justify-start items-start gap-[50px] bg-white px-5 pt-[60px] pb-[30px] shadow-2xl">
                      <Image src={item.src} width={80} height={80} alt={item.title} className="" />
                      <p className="font-semibold text-black text-xl">{item.title}</p>
                      <CustomButton text="Let's Start" icon="/arrow-forward.svg" backgroundColor={'bg-transparent!'} border={'border-0'} padding={'px-0 py-3'} animation="slide" />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END services se */}

      {/* testimonials */}
      <div className="container mx-auto px-4 pt-[140px]">
        <div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-base font-medium mb-5 text-black">TESTIMONIALS</p>
            <p className="text-2xl md:text-4xl font-bold mb-10 text-black">What Our Client Say’s</p>
          </div>
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // 768: {
                //   slidesPerView: 4,
                //   spaceBetween: 40,
                // },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {testimonialsArr.map((item) => (
                <SwiperSlide key={item.id} className="p-6 bg-gray">
                  <div className="flex flex-col gap-5 rounded-2xl ">
                    <div className="flex justify-between items-center">
                      <Image src={item.imgSrc} width={80} height={80} alt={item.name} className="" />
                      <div className="flex flex-row gap-1 justify-end">
                        {Array.from({ length: item.stars }).map((_, index) => (
                          <Image key={index} src="/star.svg" width={20} height={20} alt="star" />
                        ))}
                      </div>
                    </div>
                    <p className="font-normal text-xl">{item.review}</p>
                    <div className="flex flex-row justify-between items-center">
                      <div>
                        <p className="font-extrabold text-base">{item.name}</p>
                        <p className="font-medium text-sm">{item.position}</p>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </div>
      {/* END testimonials */}

      {/* contact */}
      <div className="mt-[140px] bg-[url('/model-bg.svg')] bg-cover bg-center w-full bg-accent">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-start items-start">
              <p className="text-base font-medium mb-5 text-black">Contact Us</p>
              <p className="text-2xl md:text-4xl font-bold mb-10 text-black">Lets Start a New Project</p>
              <p className="lg:w-90  font-normal text-xl mb-20">Now Lets Start a New Project Lets Start a New Project Lets Start a New Project Lets Start a New Project Lets Start a New Project Lets Start a New Project</p>
              <div className="flex flex-col md:flex-row justify-between gap-20 font-normal text-xl">
                <div>
                  <p>Phone Number</p>
                  <p>0313-1234567</p>
                  <p>0313-1234567</p>
                </div>
                <div>
                  <p>Email</p>
                  <p>itsme@design.com</p>
                  <p>itsme@design.com</p>
                </div>

              </div>

            </div>
            <div className="flex flex-col gap-10 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
                <CustomInput width="w-full" height="h-[50px]" placeholder="Name" />
                <CustomInput width="w-full" height="h-[50px]" placeholder="Phone" />
              </div>
              <CustomInput width="w-full" height="h-[50px]" placeholder="Email" />
              <CustomTextarea width="w-full" height="h-[180px]" placeholder="Message" />
            </div>
          </div>
        </div>
      </div>
      {/* contact */}
      {/* accordion section */}
      <div className="bg-[url('/model-bg.svg')] bg-cover bg-center w-full">
      <div className="container mx-auto px-4 py-[140px]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-base font-medium mb-5 text-black">FAQs</p>
          <p className="text-2xl md:text-4xl font-bold mb-10 text-black">Frequently Asked Questions</p>
          <Accordion />
        </div>
      </div>
      </div>
      {/* accordion section */}

      {/* sale section */}
  <div className="relative w-full h-screen hidden md:block">
        <Image
          src="/sale.svg"
          alt="sale Image"
          fill
          className="object-cover"
        />
      </div>
    </>
  );
}

export default Home;