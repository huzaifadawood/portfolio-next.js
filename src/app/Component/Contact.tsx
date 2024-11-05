
import React from "react";

const Contact = () => {
  return (
    <div id="contact">

      {/* Line break */}
      <hr className="mx-auto w-[75rem] max-w-full border-t-2 border-blue-300" />

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d7240.327220241956!2d67.00289766404933!3d24.858261064115556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m4!1s0x3eb33e1aa2f228a5%3A0x156e18a225edddbc!3m2!1d24.8589392!2d67.0101439!4m5!1s0x3eb33e1aeb8d1c69%3A0x3b38db44dcd2b818!2sMission%20Rd%2C%20Wadhumal%20Odharam%20Adhumal%20Oodharam%20Quarter%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!3m2!1d24.8592309!2d67.0089919!5e0!3m2!1sen!2s!4v1730395097289!5m2!1sen!2s"
            
              style={{ filter: " contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">mission road karachi near civil hospital</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  huzaifa-fake@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-123-123</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
         

            <h2  className="title-font sm:text-4xl text-3xl mb-4 font-bold tracking-wide text-gray-900">
              Contact 
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 text-lg font-semibold">Fill the form</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-lg font-semibold tracking-wide text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-lg font-semibold tracking-wide text-gray-600 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-lg font-semibold tracking-wide text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-blue-700 tracking-wider font-bold py-2 px-6 focus:outline-none hover:bg-gradient-to-r from-blue-800 to-blue-300  rounded text-lg">
              Send message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
