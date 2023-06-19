import { carouselData } from "@/constants/carouselData";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="w-3/4 mx-auto bg-blue-100 mt-20 flex gap-10 relative">
        <div className="m-10">
          <div className="text-4xl font-bold w-2/3">
            Become a Financial Advisor and{" "}
            <div className="text-blue-600">Earn Rs.1 Lakh/Month</div>
          </div>
          <div className="mt-10">No Investment Required</div>
          <br />
          <Image
            src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
            alt="google"
            width={150}
            height={80}
            className=""
          />
        </div>
        <Image
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=1920&q=75"
          alt="hero Image"
          width={430}
          height={500}
          className="absolute -top-10 right-0"
        />
      </div>
      <div className="py-24 px-40 text-center">
        <div className="font-bold text-2xl">Top Brands on ZET</div>
        <div className="mt-5 text-slate-600 text-lg">
          We are trusted by best brand in the country
        </div>
        {/* Carousel */}
        <div className="carousel rounded-box mt-10">
          {carouselData.map((item, key) => (
            <div key={key} className="carousel-item border mx-5 rounded-lg">
              <Image
                src={item.url}
                alt={item.name}
                width={140}
                height={100}
                className="px-8 py-4"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Products section */}
      <div className="bg-blue-100 px-40 py-20 pb-32 relative">
        <Image
          src="https://zetapp.in/_next/static/media/decImg.ead9275f.svg"
          alt="bg"
          width={400}
          height={400}
          className="absolute top-0 left-0"
        />{" "}
        <Image
          src="https://zetapp.in/_next/static/media/decImg2.3cc2964a.svg"
          alt="bg"
          width={400}
          height={400}
          className="absolute bottom-0 right-0"
        />
        <div className="text-2xl font-bold text-center">Products on ZET</div>
        <div className="text-lg text-slate-800 text-center mt-3">
          We are trusted by best brand in the country
        </div>
        <div className="flex gap-10">
          {" "}
          <div className="card card-side w-1/2 bg-[#edffec] mt-10 shadow-xl">
            <figure>
              <Image
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=1920&q=75"
                alt="Movie"
                width={100}
                height={100}
                className="ml-10"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">CREDIT CARDS</h2>
              <p>
                100% Contactless Application Process with Instant Approval From
                Top Banks
              </p>
            </div>
          </div>
          <div className="card card-side bg-[#fff1ca] w-1/2 mt-10 shadow-xl">
            <figure>
              <Image
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLoan.cadd88a9.png&w=1920&q=75"
                alt="Movie"
                width={100}
                height={100}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">LOANS</h2>
              <p>
                100% online process.Instant offers. Affordable Rate of Interest
                on loans.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          {" "}
          <div className="card card-side w-1/2 bg-[#ffeee7] mt-10 shadow-xl">
            <figure>
              <Image
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBNPL.3974f2b2.png&w=1920&q=75"
                alt="Movie"
                width={100}
                height={100}
                className="ml-10"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">BUY NOW PAY LATER</h2>
              <p>
                Short-term financing that allows consumers to make purchases and
                pay for them over time.
              </p>
            </div>
          </div>
          <div className="card card-side bg-[#fff5e7] w-1/2 mt-10 shadow-xl">
            <figure>
              <Image
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAccountSave.69831c7c.png&w=1920&q=75"
                alt="Movie"
                width={100}
                height={100}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">SAVINGS ACCOUNT</h2>
              <p>
                ZET offers range of savings account that suits your personal
                needs for the banking.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-10 ">
        <div className="card card-side -rotate-12 my-40 bg-blue-600">
          <figure>
            <Image
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=1920&q=75"
              alt="Movie"
              layout="responsive"
              width={50}
              height={50}
              className="opacity-50 m-20"
            />
          </figure>
          <div className="card-body my-auto w-1/2 rotate-12">
            <h2 className="card-title text-white text-3xl">THE ZET EFFECT</h2>
            <p className="text-white text-3xl ">
              We helped customers in more than 50 cities to get their first
              financial product.
            </p>
          </div>
        </div>
      </div>
      <div className="py-14 px-32">
        <div className="flex">
          <div>
            <div className="text-3xl font-bold">
              Why{" "}
              <div className="text-3xl font-bold text-blue-700">Choose Us</div>
              <div className="text-slate-700 text-lg font-light">
                Why we are loved by our customers
              </div>
            </div>
            <Image
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhyUsHero.76b303ee.png&w=640&q=75"
              alt="whyus"
              width={300}
              height={600}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex m-10 gap-2">
              <div>
                <Image
                  src="https://zetapp.in/_next/static/media/zero_investment.d5743aab.svg"
                  alt="image"
                  width={100}
                  height={100}
                />
                <div className="font-bold my-5 text-xl">Zero Investment</div>
                <div className="w-3/4 text-md">
                  Build your business without any investment
                </div>
              </div>
              <div>
                <Image
                  src="https://zetapp.in/_next/static/media/quick_payout.1d689e09.svg"
                  alt="image"
                  width={100}
                  height={100}
                />
                <div className="font-bold my-5 text-xl">Quick Payout</div>
                <div className="w-3/4 text-md">
                  Direct Payout in your bank account in short time
                </div>
              </div>
            </div>
            <div className="flex m-10 gap-2">
              <div>
                <Image
                  src="https://zetapp.in/_next/static/media/Fin_products.0e8a0582.svg"
                  alt="image"
                  width={100}
                  height={100}
                />
                <div className="font-bold my-5 text-xl">Limitless Earnings</div>
                <div className="w-3/4 text-md">
                  Direct Payout in your bank account in short time
                </div>
              </div>
              <div>
                <Image
                  src="https://zetapp.in/_next/static/media/Icon_support.c8382fc1.svg"
                  alt="image"
                  width={100}
                  height={100}
                />
                <div className="font-bold my-5 text-xl">
                  Training & Upskilling
                </div>
                <div className="w-3/4 text-md">
                  Get trained by finance and sales experts
                </div>
              </div>
            </div>
            <div className="flex m-10 gap-2">
              <div>
                <Image
                  src="https://zetapp.in/_next/static/media/customerSupport.5780cd23.svg"
                  alt="image"
                  width={100}
                  height={100}
                />
                <div className="font-bold my-5 text-xl">Customer Support</div>
                <div className="w-3/4 text-md">
                  Access tools and content to build relationship
                </div>
              </div>
              <div>
                <Image
                  src="https://zetapp.in/_next/static/media/financialProduct.1b3d6eec.svg"
                  alt="image"
                  width={100}
                  height={100}
                />
                <div className="font-bold my-5 text-xl">Financial Products</div>
                <div className="w-3/4 text-md">
                  Trustworthy & high-rated products & categories
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
