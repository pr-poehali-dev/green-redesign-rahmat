import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Stethoscope",
      title: "Терапия",
      description:
        "Диагностика и лечение внутренних болезней, профилактические осмотры",
    },
    {
      icon: "Heart",
      title: "Кардиология",
      description: "Обследование сердечно-сосудистой системы, ЭКГ, УЗИ сердца",
    },
    {
      icon: "Eye",
      title: "Офтальмология",
      description:
        "Диагностика зрения, лечение глазных заболеваний, подбор очков",
    },
    {
      icon: "Brain",
      title: "Неврология",
      description: "Диагностика и лечение заболеваний нервной системы",
    },
    {
      icon: "Bone",
      title: "Ортопедия",
      description: "Лечение заболеваний опорно-двигательного аппарата",
    },
    {
      icon: "Baby",
      title: "Педиатрия",
      description: "Медицинская помощь детям от рождения до 18 лет",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Широкий спектр медицинских услуг для всей семьи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                <Icon
                  name={service.icon as any}
                  size={24}
                  className="text-green-500 group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
