import React from "react";
import Profile from "../assets/profile.jpg";
import Chairperson_current from "../assets/chairperson_current.jpg";
import Secretary from "../assets/secretary_current.jpg";
import Kajansika from '../assets/Kajansika Sivaloganathan-sec.jpg'
import Venuja from '../assets/Venuja Sevinda-treasurer.jpg'

export default function Team() {
    return (
      <>
        <section class="max-w-screen-2xl px-10 mx-auto mb-32">
          <h1 class="mb-8 text-center font-sans text-4xl font-bold text-secondary">
            Past executive board<span class="text-black">.</span>
          </h1>
          <p class=" text-gray-600 text-md text-center max-w mb-10">
            Introducing the former pillars of IEEE Power & Energy Society of
            SLIIT who successfully led and organized the events hosted by the
            community for the term 2022/23.
          </p>
          <div class="mx-auto grid  grid-cols-1 gap-6 px-56 md:grid-cols-2 lg:grid-cols-3 pb-24 ">
            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
              <a href="#">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img src={Profile} alt="Hotel Photo" />
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-gray-900 font-semibold text-lg">
                    Navod Nanayakkara
                  </h2>
                  <p class="text-primary mt-1 text-md font-semibold ">
                    Chairperson
                  </p>
                </div>
              </a>
            </article>

            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
              <a href="#">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img src={Venuja} alt="Hotel Photo" />
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-gray-900 font-semibold text-lg">
                    Venuja Pathirana
                  </h2>
                  <p class="text-primary mt-1 text-md font-semibold ">
                    Vice Chairperson
                  </p>
                </div>
              </a>
            </article>

            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
              <a href="#">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img src={Kajansika} alt="Hotel Photo" />
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-gray-900 font-semibold text-lg">
                    Kajansika Sivaloganathan
                  </h2>
                  <p class="text-primary mt-1 text-md font-semibold ">
                    Secretary
                  </p>
                </div>
              </a>
            </article>

          </div>

          <h1 class="mb-8 text-center font-sans text-4xl font-bold text-secondary">
            Current executive board<span class="text-black">.</span>
          </h1>
          <p class=" text-gray-600 text-md text-center max-w mb-10">
            Meet the Executive Commitee of IEEE Power & Energy Society of SLIIT
            for the term 2023/24 who have taken on the role of continuously
            inspiring empowering, developing, and guiding the future of our
            members within the field of Power and Energy .
          </p>

          <div class="mx-auto px-20 grid max-w-screen-xl grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
              <a href="https://www.linkedin.com/in/yashodha-athapattu-883228235/">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img src={Chairperson_current} alt="Hotel Photo" />
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-gray-900 font-semibold text-lg">
                    Dimeth Wimalasena
                  </h2>
                  <p class="text-primary mt-1 text-md font-semibold ">
                    Chairperson
                  </p>
                </div>
              </a>
            </article>

            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
              <a href="https://www.linkedin.com/in/imethmakariyawasam">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img src={Profile} alt="Hotel Photo" />
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-gray-900 font-semibold text-lg">
                    Sasitha Sandharuwan
                  </h2>
                  <p class="text-primary mt-1 text-md font-semibold ">
                    Vice Chairperson
                  </p>
                </div>
              </a>
            </article>

            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
              <a href="http://www.linkedin.com/in/owadibandara">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img src={Secretary} alt="Hotel Photo" />
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-gray-900 font-semibold text-lg">
                    Ravindie Tilakaratne
                  </h2>
                  <p class="text-primary mt-1 text-md font-semibold ">
                    Secretary
                  </p>
                </div>
              </a>
            </article>

            {/* <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
              <a href="https://www.linkedin.com/in/nisuni-sineja-184414304">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img src={Nisuni} alt="Hotel Photo" />
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-gray-900 font-semibold text-lg">
                    Nisuni Sineja
                  </h2>
                  <p class="text-primary mt-1 text-md font-semibold ">
                    Vice Secretary
                  </p>
                </div>
              </a>
            </article> */}
          </div>
        </section>
      </>
    );
}