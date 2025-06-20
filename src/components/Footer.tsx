import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-foreground py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-orange-accent mb-6">
              БИТУМНАЯ КРОШКА
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Качественная битумная крошка для строительства и дорожных работ.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-6 text-foreground">
              ПРОДУКЦИЯ
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Битумная крошка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Технические условия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Характеристики
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-6 text-foreground">
              ПРИМЕНЕНИЕ
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Дорожные работы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Мастики
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Гидроизоляция
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-6 text-foreground">
              КОНТАКТЫ
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+375 (29) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@bitum-kroshka.by</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>г. Минск, Беларусь</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Битумная крошка. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
