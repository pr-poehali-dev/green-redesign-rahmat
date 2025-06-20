const About = () => {
  const features = [
    {
      title: "Качество",
      description: "Соответствие ТУ BY 790380165.003-2014",
    },
    {
      title: "Экологичность",
      description: "Вторичная переработка битумных материалов",
    },
    {
      title: "Универсальность",
      description: "Широкий спектр применения в строительстве",
    },
  ];

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-orange-accent mb-8">
              О продукте
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Битумная крошка вторичная гранулированная - это переработанный
              битумный материал, который используется в различных сферах
              строительства и дорожного хозяйства.
            </p>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Наш продукт соответствует техническим условиям ТУ BY
              790380165.003-2014 и обеспечивает высокое качество выполняемых
              работ.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border-l-4 border-orange-accent pl-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-xl font-bold text-orange-accent mb-6">
                Технические характеристики
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Фракция</span>
                  <span className="text-foreground">0-5 мм</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Влажность</span>
                  <span className="text-foreground">не более 3%</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">
                    Температура размягчения
                  </span>
                  <span className="text-foreground">не менее 40°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Упаковка</span>
                  <span className="text-foreground">Биг-бэг / навал</span>
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
