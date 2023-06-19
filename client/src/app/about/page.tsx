import Image from "next/image";
import { investorsData } from "@/constants/investorsData";
import { BsLinkedin } from 'react-icons/bs'

interface pageProps {}

const page = ({}) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="">
        <Image
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOurMission.13d85461.png&w=3840&q=100"
          alt="bannerImage"
          layout="responsive"
          width={100}
          height={90}
        />
        <div className="absolute top-[7%] w-full mx-auto text-center text-white">
          <div className="text-4xl font-semibold tracking-widest">
            OUR MISSION
          </div>
          <div className="py-2 px-80 ">
            Enabling financial inclusion for the next billion Indians & making
            their Zindagi Set. Building a platform that enables you to sell
            financial products & earn up to Rs. 1 lakh every month
          </div>
          <br />
          <div className="font-bold tracking-[0.35rem]">
            EARN BETTER. LIVE BETTER.
          </div>
        </div>
      </div>
      {/* Growth Section */}
      <div className="my-14">
        <div className="w-full text-center text-4xl font-bold">
          How we evolved over the years
        </div>
        <Image
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrowth.abe5b7d8.png&w=3840&q=100"
          alt="growth"
          layout="responsive"
          width={100}
          height={10}
          className="py-14 px-20 overflow-y-scroll"
        />
      </div>
      {/* Featured Section */}
      <div className="pt-14 pb-1 px-40 bg-slate-50">
        <div className="text-4xl text-slate-700 font-bold">Got Featured</div>
        <div className="my-10 flex gap-2">
          <Image
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&w=1080&q=75"
            width={180}
            height={180}
            alt="ecomomic times"
          />
          <Image
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&w=1080&q=75"
            width={180}
            height={180}
            alt="inc42"
          />
          <Image
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&w=1080&q=75"
            width={180}
            height={180}
            alt="mint"
          />
          <Image
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&w=1080&q=75"
            width={180}
            height={180}
            alt="yourstory"
          />
          <Image
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&w=1080&q=75"
            width={180}
            height={180}
            alt="business standards"
          />
        </div>
      </div>
      {/* Investors section */}
      <div className="py-14 px-40">
        <div className="text-4xl font-bold">Meet the Investors</div>
        <div className="my-20 flex gap-20">
          <Image
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany1.41d5c5bd.png&w=1200&q=75"
            width={250}
            height={200}
            alt="Sequoia"
            className="hover:scale-110"
          />
          <Image
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany2.3f604866.png&w=1200&q=75"
            width={250}
            height={200}
            alt="Nexus"
            className="hover:scale-110"
          />
          <Image
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany3.c16095cb.png&w=1200&q=75"
            width={250}
            height={200}
            alt="General Catalyst"
            className="hover:scale-110"
          />
        </div>
        <div>
          <Image
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany4.9acb56c2.png&w=1200&q=75"
            width={250}
            height={200}
            alt="Waterbrigde"
            className="hover:scale-110"
          />
        </div>
        <div className="flex flex-wrap mt-32 -ml-10">
          {investorsData.map((item, key) => (
            <div key={key} className="basis-1/4 my-16 mx-10 hover:scale-105">
              <Image
                src={item.url}
                alt={item.name}
                width={230}
                height={230}
                className=""
              />
              <div className="text-slate-800 mt-4">{item.name}</div>
              <div className="text-slate-400">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Founders Section */}
      <div className="py-14 px-40 bg-slate-50 w-full">
        <div className="text-center text-4xl font-bold">Meet Our Founders</div>
        <div className="text-center text-2xl text-slate-400 mt-4">
          Few words from founders desk
        </div>
        <div className="flex gap-24 mt-16 ml-6">
          <div>
            <Image
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish.519c8845.png&w=1080&q=75"
              alt="Manish Shara"
              width={240}
              height={240}
            />
            <div className="flex">
              <div className="mt-3">
                <div className="text-xl">Manish Shara</div>
                <div className="text-lg">Co-Founder & CEO</div>
              </div>
              <BsLinkedin className="m-6 text-3xl" />
            </div>
          </div>
          <div>
            <Image
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYash.126e24ca.png&w=1080&q=75"
              alt="Yash Desai"
              width={240}
              height={240}
            />
            <div className="flex">
              <div className="mt-3">
                <div className="text-xl">Yash Desai</div>
                <div className="text-lg">Co-Founder</div>
              </div>
              <BsLinkedin className="m-6 text-3xl" />
            </div>
          </div>
          <div>
            <Image
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLokesh.ead063e7.png&w=1080&q=75"
              alt="Lokesh Aggarwal"
              width={240}
              height={240}
            />
            <div className="flex">
              <div className="mt-3">
                <div className="text-xl">Lokesh Aggarwal</div>
                <div className="text-lg">CTO</div>
              </div>
              <BsLinkedin className="m-6 text-3xl" />
            </div>
          </div>
        </div>
      </div>
      {/* Banner Image */}
      <div>
        <Image src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUsFooter.d2311d39.png&w=3840&q=100"
          alt="banner"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default page;
