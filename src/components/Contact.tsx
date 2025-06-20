import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Контакты
          </h2>
          <p className="text-lg text-gray-600">
            Свяжитесь с нами для записи на приём
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Адрес
                </h3>
                <p className="text-gray-600">
                  г. Алматы, ул. Абая 150/230
                  <br />
                  (угол ул. Манаса)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Телефон
                </h3>
                <p className="text-gray-600">
                  +7 (727) 123-45-67
                  <br />
                  +7 (777) 123-45-67
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Режим работы
                </h3>
                <p className="text-gray-600">
                  Пн-Пт: 8:00 - 20:00
                  <br />
                  Сб-Вс: 9:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Записаться на приём
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Выберите услугу</option>
                  <option>Терапия</option>
                  <option>Кардиология</option>
                  <option>Офтальмология</option>
                  <option>Неврология</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Комментарий"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
