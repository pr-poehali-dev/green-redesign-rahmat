const About = () => {
  const features = [
    {
      title: "Качество",
      description: "Только проверенные бренды и натуральные материалы",
    },
    {
      title: "Доставка",
      description: "Быстрая доставка по всей Беларуси",
    },
    {
      title: "Сервис",
      description: "Индивидуальный подход к каждому клиенту",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-8">
              О магазине
              <br />
              <span className="font-medium">RAHMAT</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Мы создали магазин детской одежды, который объединяет качество,
              стиль и комфорт. Наша миссия — предоставить родителям лучший выбор
              одежды для их детей.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=700&fit=crop&crop=center"
              alt="Детская одежда"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
