const ResponsiveLayout = () => {
  return (
    <div className="flex flex-row flex-wrap sm:flex-col gap-4 p-4 bg-gray-100">
      <div className="bg-blue-300 p-4 flex-1 text-center">Box 1</div>
      <div className="bg-green-300 p-4 flex-1 text-center">Box 2</div>
      <div className="bg-red-300 p-4 flex-1 text-center">Box 3</div>
    </div>
  );
};

export default ResponsiveLayout;
