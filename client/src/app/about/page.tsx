import Image from "next/image";

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
        <div className="absolute top-[20%] w-full mx-auto text-center text-white">
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
      </div>  
    </div>
  );
};

export default page;
