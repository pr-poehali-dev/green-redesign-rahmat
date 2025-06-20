import Icon from "@/components/ui/icon";

const Services = () => {
  const applications = [
    {
      title: "Изготовление мастик",
      description: "Битумные мастики для гидроизоляции и защиты",
      icon: "Wrench",
    },
    {
      title: "Ремонт автодорог",
      description: "Восстановление и ремонт дорожного покрытия",
      icon: "Car",
    },
    {
      title: "Асфальтобетонные смеси",
      description: "Производство качественных дорожных покрытий",
      icon: "Layers",
    },
    {
      title: "Гидроизоляция",
      description: "Защита от влаги и атмосферных воздействий",
      icon: "Shield",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-orange-accent mb-4">
            Области применения
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Битумная крошка широко используется в строительстве и дорожном
            хозяйстве
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg text-center group hover:bg-card/80 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-accent/20 rounded-full mb-4 group-hover:bg-orange-accent/30 transition-colors">
                <Icon
                  name={app.icon}
                  size={24}
                  className="text-orange-accent"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {app.title}
              </h3>
              <p className="text-sm text-muted-foreground">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
