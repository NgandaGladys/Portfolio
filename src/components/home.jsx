import React from "react";
// import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";



function HomePage(){
    return(
        <div id="main">
            <img className="w-full h-screen object-cover object-center " src="./images/mee.jpeg" alt="dev" />
            <div className="w-full h-screen absolute top-20 left-0 bg-black-40">
                <div className="flex flex-col max-w-[700px] m-auto h-full w-full justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Nganda Gladys</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I'm a    
                    <TypeAnimation
                      sequence={[
        // Same substring at the start will only be typed out once, initially
                   'Software Developer',
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'UI/UX Designer',
                    2000,
                    'Graphics Designer',
                   2000,
                  'Code Enthusiast',
                   2000,
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />


                </h2>
                <div className="flex justify-between pt-8 max-w-[200px] w-full">
                <a href="">
                    <FaLinkedinIn className="cursor-pointer"  size={20}/>
                    </a>
                    <a href="">
                    <FaLinkedinIn className="cursor-pointer"  size={20}/>
                    </a>
                    <FaTwitter className="cursor-pointer"  size={20}/>
                    {/* <BsFacebook className="cursor-pointer"  size={20}/> */}
                    
                </div>


                </div>

            </div>
        </div>
    )
}
export default HomePage;
