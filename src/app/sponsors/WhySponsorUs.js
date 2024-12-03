// WhySponsorUs.js
import React from 'react';

const WhySponsorUs = () => {
  return (
    <div className="bg-sfDarkerBlue py-8 px-4 sm:px-8">
      <div className=" max-w-4xl mx-auto">
        
        <h1 className="bg-sfyellow text-black text-3xl font-bold text-center rounded-xl mb-4">
          Why Sponsor Us?
        </h1>
        <p className=" text-center mb-8 text-xl">Join us in empowering the next generation of tech leaders. SF Hacks brings together 400 talented hackers for a 48-hour hackathon full of innovation, collaboration, and creativity.</p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" bg-sfDarkPurp rounded-lg shadow-md p-6">
            <h2 className=" text-sfyellow rounded-md text-xl font-semibold  mb-2">
              Promote Your Brand
            </h2>
            <p className="text-center">
              Showcase your organization to a global audience of tech-savvy students and professionals. Build your brand’s reputation as a leader in innovation.
            </p>
          </div>
          <div className="bg-sfDarkPurp rounded-lg shadow-md p-6">
            <h2 className="text-xl text-sfyellow rounded-md font-semibold  mb-2">
              Access Top Talent
            </h2>
            <p className="text-center">
              Connect with some of the brightest minds in tech and discover potential interns, employees, or collaborators for your next big project.
            </p>
          </div>
          <div className="bg-sfDarkPurp rounded-lg shadow-md p-6">
            <h2 className="text-xl text-sfyellow font-semibold rounded-md mb-2">
              Engage with Hackers
            </h2>
            <p className="text-center">
              Host workshops, sponsor challenge tracks, and provide proprietary tools to guide hackers in creating impactful projects.
            </p>
          </div>
          <div className="bg-sfDarkPurp rounded-lg shadow-md p-6">
            <h2 className="text-xl rounded-md text-sfyellow font-semibold mb-2">
              Support Innovation
            </h2>
            <p className="text-center">
              Play a crucial role in advancing technology by providing mentorship, resources, and prizes that empower hackers to think outside the box.
            </p>
          </div>
        </div>

        
        <div className=" mt-12 text-center">
          <h3 className="text-2xl font-bold bg-sfyellow text-black rounded-md  mb-4">
            Ready to Inspire Innovation?
          </h3>
          <p className="text-center">
            Contact us today to learn how you can contribute to SF Hacks 2025 and make a lasting impact.
          </p>
          <a
            href="mailto:sfhacksteam@gmail.com"
            className="inline-block px-6 py-3 bg-sfDarkPurp text-white hover:scale-105 font-semibold rounded-lg shadow  transition"
          >
            Sponsor Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhySponsorUs;
