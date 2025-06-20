import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-6">RAHMAT</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Детская одежда и аксессуары от лучших мировых брендов.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-6 text-white">КАТАЛОГ</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мальчики
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Девочки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Обувь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Аксессуары
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-6 text-white">ИНФОРМАЦИЯ</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-6 text-white">КОНТАКТЫ</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div>+375 (29) 123-45-67</div>
              <div>info@rahmat.by</div>
              <div>г. Минск, ул. Притыцкого 62</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 RAHMAT. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
