const Hero = () => {
  return (
    <section className="bg-dark-bg text-foreground py-20 relative overflow-hidden">
      {/* Паттерн из листьев */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-8 h-8 border-2 border-leaf-pattern transform rotate-45"></div>
        <div className="absolute top-20 right-20 w-6 h-6 border-2 border-leaf-pattern transform -rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-10 h-10 border-2 border-leaf-pattern transform rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 border-2 border-leaf-pattern transform -rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-orange-accent mb-6 leading-tight">
              КРОШКА БИТУМНАЯ
            </h1>
            <div className="bg-card/50 p-6 rounded-lg mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Крошка битумная вторичная гранулированная
              </p>
              <p className="text-sm text-muted-foreground">
                ТУ BY 790380165.003-2014
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-orange-accent mb-4">
                ОБЛАСТЬ ПРИМЕНЕНИЯ
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Предназначена для изготовления мастик битумных, для ремонта
                автомобильных дорог, приготовления асфальтобетонных смесей
              </p>
            </div>

            <button className="px-8 py-4 bg-orange-accent text-white text-lg font-medium hover:bg-orange-accent/90 transition-colors rounded">
              Оставить заявку
            </button>
          </div>

          <div className="relative">
            <img
              src="https://cdn.poehali.dev/files/1d3c28c7-522c-441d-8580-2627dc4064e1.jpg"
              alt="Битумная крошка"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
