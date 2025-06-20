import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-orange-accent mb-8">
              Контакты
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-accent/20 rounded-full flex items-center justify-center">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="text-orange-accent"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Адрес
                  </h3>
                  <p className="text-muted-foreground">
                    г. Минск, Беларусь
                    <br />
                    Складской комплекс
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-orange-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Телефон
                  </h3>
                  <p className="text-muted-foreground">+375 (29) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-orange-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Email
                  </h3>
                  <p className="text-muted-foreground">info@bitum-kroshka.by</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-orange-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Режим работы
                  </h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 8:00 - 18:00
                    <br />
                    Сб: 9:00 - 15:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-xl font-bold text-orange-accent mb-6">
              Заказать битумную крошку
            </h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-dark-bg border border-border rounded focus:outline-none focus:border-orange-accent text-foreground"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 bg-dark-bg border border-border rounded focus:outline-none focus:border-orange-accent text-foreground"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Количество (тонн)"
                  className="w-full px-4 py-3 bg-dark-bg border border-border rounded focus:outline-none focus:border-orange-accent text-foreground"
                />
              </div>
              <div>
                <textarea
                  placeholder="Дополнительная информация"
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-bg border border-border rounded focus:outline-none focus:border-orange-accent text-foreground resize-none"
                ></textarea>
              </div>
              <button className="w-full px-8 py-4 bg-orange-accent text-white text-lg font-medium hover:bg-orange-accent/90 transition-colors rounded">
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
