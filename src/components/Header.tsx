import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Icon name="Heart" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Рахмат</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 transition-colors"
            >
              Врачи
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-gray-700">
              <Icon name="Phone" size={16} />
              <span className="text-sm">+7 (777) 123-45-67</span>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
