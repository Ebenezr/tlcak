import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white" id="contact">
      <div className="lg:mx-auto lg:max-w-6xl h-auto py-10 border-1 px-4 mx-auto lg:py-12 lg:h-[100vh]">
        {/* section title */}
        <h3 className="font-regular text-center text-lg text-gray-400">
          CONTACT INFORMATION
        </h3>
        {/* header */}
        <div className="text-center">
          <p className="text-center mt-4 whitespace-pre-line font-semibold text-neutral-700 text-2xl">
            Get in touch with us
          </p>
        </div>
        {/* image wrapper */}
        <div className=" w-full h-56 rounded-md my-4 text-center ">
          <p>truelightchristianassemblykeny@gmail.com</p>
          <p>+254 721 205358</p>
          <p>Office Hours: Monday - Friday 8am - 4pm</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
