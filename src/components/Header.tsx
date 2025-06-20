import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-dark-bg text-foreground border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-accent">
            БИТУМНАЯ КРОШКА
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              ГЛАВНАЯ
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              О ПРОДУКТЕ
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              ПРИМЕНЕНИЕ
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              КОНТАКТЫ
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-muted-foreground hover:text-foreground">
              <Icon name="Phone" size={20} />
            </button>
            <button className="px-6 py-2 bg-orange-accent text-white text-sm font-medium hover:bg-orange-accent/90 transition-colors rounded">
              ЗАКАЗАТЬ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
