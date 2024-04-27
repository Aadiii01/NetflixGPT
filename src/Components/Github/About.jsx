import React from "react";
import { useLoaderData,Link } from "react-router-dom";
import Headers from "../Home/Headers";
import Footer from "../Footer.jsx"

export const githubinfoloader = async () => {
  try {
    const data = await fetch("https://api.github.com/users/Aadiii01");
    return data.json();
  } catch (error) {
    console.log("Error During Github API: ", error);
  }
};

function About() {
  const data = useLoaderData();

  return (
    <div className=''>
      <Headers/>
    <section className="px-2 py-10 md:px-0 mt-[60px] bg-[#181818] ">
      <div className="mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0 ssmm:ml-[110px] ssm:ml-[80px] adm:ml-[155px] sm:ml-[340px] ">
            <img
              className="relative h-48 w-48 rounded-full animate-pulse bg-slate-500 object-cover"
              src={data.avatar_url}
            />
          </div>

          <div className="mt-10 md:mt-0 flex flex-col">
            <blockquote>
              <p className="text-xl font-NetflixL mr-[10px] mt-[-20px] text-center text-white">{data.bio}</p>
            </blockquote>
            <div className=" mt-[-10px]  ssm:ml-[110px] ssmm:ml-[135px] adm:ml-[170px] sm:ml-[360px]">
            <p className="mt-7 ssmm:ml-[14px] ssm:ml-[13px] adm:ml-[21px] font-NetflixL text-lg font-semibold text-white">
              {data.name}
            </p>
            <p className="mt-1 font-NetflixL text-base text-white">
              Username - <span className="font-NetflixT">{data.login}</span>
            </p>
            <p className="mt-1 font-newm text-base text-white">
              Total Repo - <span className="font-NetflixT">{data.public_repos}</span>
            </p>
            <p className="mt-1 font-newm text-base text-white">
              Location - <span className="font-NetflixT">{data.location}</span>
            </p>
            </div>
          </div>
        </div>
        <Link to="https://github.com/Aadiii01" target="_blank">
        <button className="ssmm:ml-[95px] ssm:ml-[70px] smm:ml-[80px] adm:ml-[135px] sm:ml-[320px] mt-[30px] w-[220px] h-[50px] text-center cursor-pointer border-none bg-white rounded-[12px] hover:bg-[#bbb7b7]">
          <div className="font-NetflixB text-[18px] tracking-[-0.1px] leading-6 text-[#000000]">
            Check Github Profile
          </div>
        </button>
        </Link>
      </div>
    </section>

    <Footer classes="bg-[#181818] text-[#ffffffb3] sm:mt-[px] mt-[4px] min-w-[190px] pb-[20px] relative w-full"/>
    </div>
  );
}

export default About;
