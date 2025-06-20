import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-8">
              Контакты
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-2">Адрес</h3>
                <p className="text-gray-600">
                  г. Минск, ул. Притыцкого 62
                  <br />
                  ТЦ "Галерея Минск"
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-2">Телефон</h3>
                <p className="text-gray-600">+375 (29) 123-45-67</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-2">Email</h3>
                <p className="text-gray-600">info@rahmat.by</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-2">
                  Режим работы
                </h3>
                <p className="text-gray-600">
                  Пн-Сб: 10:00 - 22:00
                  <br />
                  Вс: 10:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8">
            <h3 className="text-xl font-medium text-black mb-6">
              Написать нам
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black bg-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black bg-transparent"
                />
              </div>
              <div>
                <textarea
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black bg-transparent resize-none"
                ></textarea>
              </div>
              <button className="px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                ОТПРАВИТЬ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
