import Image from "next/image";
import CustomButton from "./components/ui/customButton/customButton";
import ModelViewer from "./components/sections/modelViewer";
const Home = () => {
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
            className="object-cover"
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
          <CustomButton text="Read More" icon="/arrow-forward.svg" />
        </div>
      </div>
      {/* model section */}
      <div className="mt-[140px] bg-[url('/model-bg.svg')] bg-cover bg-center h-[550px] w-full bg-accent">
        <div className="container mx-auto px-20 py-20 h-full grid grid-cols-6">
          <div>
            <div>
              <p>Main Door</p>
              <p>Metal Gate</p>
            </div>
            <div>
              <p>Main Door</p>
              <p>Metal Gate</p>
            </div>
            <div>
              <p>Main Door</p>
              <p>Metal Gate</p>
            </div>
            <div>
              <p>Main Door</p>
              <p>Metal Gate</p>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center col-span-4">
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
           <div>
            <div>
              <p>feature model</p>
              <p>Make it with passion.</p>
            </div>
            <div className="flex gap-2">
              <CustomButton text="View More Models" icon="/arrow-forward.svg" />
              <CustomButton text="View More Models" icon="/arrow-forward.svg" backgroundColor={'bg-transparent!'} border={'border-1 border-gold'} />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;