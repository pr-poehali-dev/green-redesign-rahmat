const Services = () => {
  const categories = [
    {
      title: "Мальчики",
      description: "0-16 лет",
      image:
        "https://images.unsplash.com/photo-1519457431-44c20c7b049b?w=400&h=500&fit=crop&crop=center",
    },
    {
      title: "Девочки",
      description: "0-16 лет",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=500&fit=crop&crop=center",
    },
    {
      title: "Обувь",
      description: "Все размеры",
      image:
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=500&fit=crop&crop=center",
    },
    {
      title: "Аксессуары",
      description: "Дополнения к образу",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
            Категории
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-white mb-4 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-black mb-1">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
