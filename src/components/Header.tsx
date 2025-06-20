import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-black">RAHMAT</div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              МАЛЬЧИКИ
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              ДЕВОЧКИ
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              ОБУВЬ
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              АКСЕССУАРЫ
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              OUTLET
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Icon name="Search" size={20} />
            </button>
            <button className="p-2">
              <Icon name="User" size={20} />
            </button>
            <button className="p-2 relative">
              <Icon name="ShoppingBag" size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
