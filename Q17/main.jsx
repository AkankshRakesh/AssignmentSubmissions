const ResponsiveText = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
        Responsive Heading
      </h1>
      <p className="text-sm sm:text-base md:text-lg mt-2 text-gray-700">
        This text adjusts its size based on the screen width using Tailwind CSS media queries.
      </p>
    </div>
  );
};

export default ResponsiveText;
