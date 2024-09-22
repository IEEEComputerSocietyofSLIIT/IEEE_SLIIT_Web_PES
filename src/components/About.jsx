import React from "react";
import bg from "../assets/bg2.jpg"

export default function About() {
    return (
      <section class="pb-10 bg-white">
        <div class="container mx-auto px-4">
          <div class="flex flex-col items-center justify-center space-y-8">
            <h2 class="text-4xl font-bold text-center text-secondary pt-4">
              Who are we?
            </h2>
            <p class="text-gray-600 text-md text-center max-w-2xl">
              {" "}
              We are the IEEE Power & Energy Society at SLIIIT, A community
              build to deliver events, programs, and publications, bringing
              together power and electrical engineers at every phase for
              conversation and collaboration. IEEE PES empowers, develops, and
              guides the future of our members and the industry for the
              betterment of society.
            </p>
          </div>
        </div>

        <div class="container mx-auto px-4 mt-16">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="flex flex-col items-center justify-center space-y-6 p-10 bg-gray-200 rounded-xl">
              <h3 class="text-3xl font-bold text-secondary">Our Vision</h3>
              <p class="text-gray-600 text-md text-center">
                Develops standards and empowers development of technology,
                software, and best practices in all areas of electric power and
                energy including generation, transmission, distribution and
                utilization to provide a reliable, resilient, safe,
                cost-effective and sustainable AC and DC electricity supply
                system to the end-user. PES focuses on current power system
                infrastructures and technological advancements in energy
                resources, smart grid and smart cities for the betterment of
                society.
              </p>
            </div>

            <div class="flex flex-col items-center justify-center space-y-6 p-10 bg-gray-200 rounded-xl">
              <h3 class="text-3xl font-bold text-secondary">Our Mission</h3>
              <p class="text-gray-600 text-md text-center">
                To be the leading provider of scientific and engineering
                information on electric power and energy for the betterment of
                society, and the preferred professional development source for
                our members
              </p>
            </div>
          </div>
        </div>
        <div className="my-20 w-full mx-auto">
          <div
            className="relative grid gap-10 md:px-40 sm:px-32  max-[640px]:px-14 bg-cover filter "
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white text-center py-10">
                Strategy
              </h3>
              <p className="text-center pb-10 text-md text-white">
                develop stronger engagement with industry and increase its
                involvement in education programs. improve & strengthen the
                global presence, diversity and participation in technical
                committees. reinvigorate chapter communication with its members
                and establish mentorship and coaching programs. grow life-long
                learning and expand student offerings worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}