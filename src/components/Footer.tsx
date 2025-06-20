import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">Рахмат</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Современный медицинский центр с полным спектром услуг для всей
              семьи.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Терапия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Кардиология
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Офтальмология
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Неврология
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>г. Алматы, ул. Абая 150/230</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (727) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@rahmat.kz</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>Пн-Пт: 8:00 - 20:00</div>
              <div>Сб-Вс: 9:00 - 18:00</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Медицинский центр Рахмат. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
