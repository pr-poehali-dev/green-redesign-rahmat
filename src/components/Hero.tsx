const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-light text-black mb-8 leading-tight">
            Детская одежда
            <br />и аксессуары
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Качественная детская одежда от лучших мировых брендов. Комфорт и
            стиль для ваших малышей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
              ПОСМОТРЕТЬ КОЛЛЕКЦИЮ
            </button>
            <button className="px-8 py-3 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-colors">
              НОВИНКИ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
