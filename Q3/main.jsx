const App = () => {
  return (
    <div className="bg-[#f0f8ff] font-sans p-4 min-h-screen">
      <h1 className="text-[#2c3e50] text-2xl font-bold mb-2">
        Welcome to My Webpage
      </h1>
      <p className="mb-4">
        This is a simple HTML5 page with a title, heading, paragraph, and an image.
      </p>

      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
        alt="Placeholder Image"
        className="mb-6 w-full max-w-sm"
      />

      <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
      <form action="#" method="post" aria-label="Contact Form" className="space-y-2">
        <div>
          <label htmlFor="name" className="block font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border border-gray-400 p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-gray-400 p-2 w-full"
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
