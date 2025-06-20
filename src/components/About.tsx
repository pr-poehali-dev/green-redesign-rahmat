import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Shield",
      title: "Качество",
      description: "Современное оборудование и проверенные методы лечения",
    },
    {
      icon: "Users",
      title: "Опыт",
      description: "Квалифицированные врачи с многолетним стажем",
    },
    {
      icon: "Clock",
      title: "Доступность",
      description: "Удобный график работы и быстрая запись на приём",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              О медицинском центре
              <span className="text-green-500"> Рахмат</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Мы работаем с 2008 года и за это время стали одним из ведущих
              медицинских центров города. Наша миссия — предоставить
              качественную медицинскую помощь каждому пациенту.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={feature.icon as any}
                      size={20}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=500&fit=crop&crop=center"
              alt="Медицинский персонал"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Лицензия
                  </div>
                  <div className="text-xs text-gray-600">№ ЛО-77-01-018825</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
