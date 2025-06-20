import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Медицинский центр
              <span className="text-green-500"> Рахмат</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Современные методы диагностики и лечения. Опытные врачи,
              качественное оборудование и индивидуальный подход к каждому
              пациенту.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
                <Icon name="Calendar" size={18} className="mr-2" />
                Записаться на приём
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-50 px-8 py-3"
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить сейчас
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=400&fit=crop&crop=center"
                alt="Медицинский центр"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-500">15+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">50+</div>
                  <div className="text-sm text-gray-600">Специалистов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">10к+</div>
                  <div className="text-sm text-gray-600">Пациентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
