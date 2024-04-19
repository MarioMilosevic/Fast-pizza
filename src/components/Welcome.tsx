const Welcome = () => {
  return (
    <section className="w-[35%] mx-auto py-16 flex flex-col  items-center justify-center">
      <h1 className="text-3xl font-medium text-center">
        The best pizza
        <br />
        <span className="text-2xl text-yellow-500 tracking-wide">
          Straight out of the oven, straight to you
        </span>
      </h1>

      <h3 className="pt-8 pb-4">
        👋 Welcome! Please start by telling us your name:
      </h3>
      <form>
        <input
          type="text"
          className="rounded-full p-4 text-sm transition-all outline-none duration-300 placeholder:text-stone-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 w-72"
          placeholder="Your full name"
        />
      </form>
    </section>
  );
};

export default Welcome;