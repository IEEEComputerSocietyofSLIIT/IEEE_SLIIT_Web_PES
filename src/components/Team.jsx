import React from "react";
import Chairperson_current from "../assets/chairperson_current.jpg";
import Secretary from "../assets/secretary_current.jpg";
import PESprof from '../assets/profPES.JPG'
import sasitha from '../assets/sasithaProfile.jpg'
import JanithaMayadunna from '../assets/committee-2026-27/janitha-mayadunna.jpg'
import UvinduSilva from '../assets/committee-2026-27/uvindu-silva.jpg'
import AmandiKandegamage from '../assets/committee-2026-27/amandi-kandegamage.jpg'
import DenethTharushka from '../assets/committee-2026-27/deneth-tharushka.jpg'
import AvanthiJayamani from '../assets/committee-2026-27/avanthi-jayamani.jpg'
import HamdhanHamza from '../assets/committee-2026-27/hamdhan-hamza.jpg'

const currentBoard = [
  {
    name: "Janitha Mayadunna",
    position: "Chairperson",
    image: JanithaMayadunna,
    link: "https://www.linkedin.com/in/janitha-mayadunna-7720b7314/",
  },
  {
    name: "Uvindu Silva",
    position: "Vice Chairperson",
    image: UvinduSilva,
    link: "https://www.linkedin.com/in/uvindu-hasara-92a353394/",
  },
  {
    name: "Amandi Kandegamage",
    position: "Secretary",
    image: AmandiKandegamage,
    link: "https://www.linkedin.com/in/amandi-kandegamage-2249943b9/",
  },
  {
    name: "Deneth Tharushka",
    position: "Treasurer",
    image: DenethTharushka,
    link: "https://www.linkedin.com/in/deneth-tharushka-a20100338/",
  },
  {
    name: "Avanthi Jayamani",
    position: "Editor",
    image: AvanthiJayamani,
    link: "mailto:avanthijayamani@gmail.com",
  },
  {
    name: "Hamdhan Hamza",
    position: "Assistant Secretary",
    image: HamdhanHamza,
    link: "https://www.linkedin.com/in/hamdhan-hamza-575a03404/",
  },
];

const pastBoard = [
  {
    name: "Dimeth Wimalasena",
    position: "Chairperson",
    image: Chairperson_current,
    link: "https://www.linkedin.com/in/yashodha-athapattu-883228235/",
  },
  {
    name: "Sasitha Sandharuwan",
    position: "Vice Chairperson",
    image: sasitha,
    link: "https://www.linkedin.com/in/imethmakariyawasam",
  },
  {
    name: "Ravindie Tilakaratne",
    position: "Secretary",
    image: Secretary,
    link: "http://www.linkedin.com/in/owadibandara",
  },
];

const MemberCard = ({ name, position, image, link }) => (
  <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
    <a href={link}>
      <div class="relative flex items-end overflow-hidden rounded-xl">
        <img src={image} alt={name} className="w-full" />
      </div>

      <div class="mt-1 p-2">
        <h2 class="text-gray-900 font-semibold text-lg">{name}</h2>
        <p class="text-primary mt-1 text-md font-semibold ">{position}</p>
      </div>
    </a>
  </article>
);

export default function Team() {
    return (
      <>
      <section class="max-w-screen-2xl px-10 mx-auto mb-20">
                <h1 class="mb-8 text-center font-sans text-4xl font-bold text-primary">Chapter Advisor<span class="text-black">.</span></h1>
                {/* <p class=" text-gray-600 text-md text-center max-w mb-10"></p> */}
                <div class="mx-auto flex align-middle justify-center">
                    <article class="w-full md:w-[800px] md:items-center md:flex grid rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <div class="relative md:w-1/2 flex items-end overflow-hidden rounded-xl">
                            <img src={PESprof} alt="Hotel Photo" className="w-full " />

                        </div>

                        <div class="mt-1 p-2 md:p-10">
                            <h2 class="text-gray-900 font-semibold text-lg">Ms. Nuwanthi Abeygunawardena</h2>
                            <p class="text-primary mt-1 text-sm font-semibold ">Assistant Lecturer Faculty of Engineering | Electrical & Electronic Engineering</p>


                        </div>
                    </article>
                </div>
            </section>
        <section class="max-w-screen-2xl px-10 mx-auto mb-20">

        <h1 class="my-4 text-center font-sans text-4xl font-bold text-primary">
            Current executive board<span class="text-black">.</span>
          </h1>
          <p class=" text-gray-600 text-md text-center max-w mb-10">
            Meet the Executive Commitee of IEEE Power & Energy Society of SLIIT
            for the term 2026/27 who have taken on the role of continuously
            inspiring empowering, developing, and guiding the future of our
            members within the field of Power and Energy .
          </p>

          <div class="mx-auto grid mb-10 max-w-5xl grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
            {currentBoard.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                position={member.position}
                image={member.image}
                link={member.link}
              />
            ))}
          </div>

          <h1 class="my-4 text-center font-sans text-4xl font-bold text-primary">
            Past executive board<span class="text-black">.</span>
          </h1>
          <p class=" text-gray-600 text-md text-center max-w mb-10">
            Introducing the former pillars of IEEE Power & Energy Society of
            SLIIT who successfully led and organized the events hosted by the
            community for the previous terms.
          </p>
          <div class="mx-auto grid  grid-cols-1 max-w-5xl gap-6  md:grid-cols-2 lg:grid-cols-3  ">
            {pastBoard.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                position={member.position}
                image={member.image}
                link={member.link}
              />
            ))}
          </div>

          
        </section>
      </>
    );
}