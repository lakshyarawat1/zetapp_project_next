import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import { BsLinkedin, BsInstagram, BsTelegram } from "react-icons/bs";
import { GrFacebook } from 'react-icons/gr'
import {FaWhatsapp} from 'react-icons/fa'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className="flex md:hidden border-b">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 m-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="h-[13vh] mb-2 md:w-[55%] gap-20 md:gap-10 font-light w-full text-center pt-2 float-right hidden md:flex md:flex-row">
          <Link
            href="/"
            className="my-auto text-lg text-slate-500 cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="my-auto text-lg text-slate-500 cursor-pointer"
          >
            About Us
          </Link>{" "}
          <Link
            href=""
            className="my-auto text-lg text-slate-500 cursor-pointer"
          >
            Partner With Us
          </Link>{" "}
          <Link
            href=""
            className="my-auto text-lg text-slate-500 cursor-pointer"
          >
            Blog
          </Link>
          <div className="my-auto px-4 py-2 rounded-lg cursor-pointer bg-blue-500 text-white">
            Download ZET
          </div>
        </div>
        <div style={{ clear : "both" }} />
        {children}
        <div className="md:w-full h-[80%] bg-black md:bg-[#006fff] relative">
          <div className="md:pt-14 md:px-40 absolute z-10">
            <Image
              src="https://zetapp.in/_next/static/media/zet_logo_white.04e35c15.svg"
              alt="logo"
              width={100}
              height={100}
            />
            <br />
            <hr />
            <div className="flex text-white pt-10 md:gap-40">
              <div className="flex flex-col gap-3">
                <div className="text-xl font-light tracking-wider">COMPANY</div>
                <div>About Us</div>
                <div>Partner With Us</div>
                <div>Blog</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl font-light tracking-wider">LEGAL</div>
                <div>Privacy Policy</div>
                <div>Terms of Use</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl font-light tracking-wider">CONTACT</div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  About Us
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Partner With Us
                </div>
              </div>
              <div>
                <div>
                  SOCIAL
                  <div className="flex gap-4 cursor-pointer mt-5 text-2xl">
                    <BsLinkedin />
                    <BsInstagram />
                    <GrFacebook />
                    <BsTelegram />
                    <FaWhatsapp />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUs.085fb7a2.png&w=3840&q=100"
            alt="banner"
            className="absolute z-0 hidden md:flex"
          />
        </div>
      </body>
    </html>
  );
}
