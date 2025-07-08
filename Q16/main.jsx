const ContactForm = () => {
  return (
    <div className="p-4 md:p-10 max-w-xl mx-auto">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvPpk3M5NjEcOu8DccWuR8teVpQzpSI--ZpS0i7vCL2SgbdOI9b4r1Es&s"
        alt="Contact us banner"
        className="w-full h-auto rounded-md mb-6"
      />

      <form aria-label="Contact Form" className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvPpk3M5NjEcOu8DccWuR8teVpQzpSI--ZpS0i7vCL2SgbdOI9b4r1Es&s"
        alt="Secondary illustration"
        className="mt-8 w-full sm:w-3/4 md:w-1/2 mx-auto"
      />
    </div>
  );
};

export default ContactForm;
