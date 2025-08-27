import { ShoppingCart, Search, Menu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PopHeader = () => {
  return (
    <header className="relative overflow-hidden bg-white border-b-4 border-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots-pattern"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-pop-yellow border-4 border-black rounded-full flex items-center justify-center transform rotate-12">
              <Star className="w-6 h-6 text-black" fill="currentColor" />
            </div>
            <h1 className="text-3xl font-fredoka comic-text">POP SHOP</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                placeholder="搜索超酷商品..."
                className="pl-4 pr-12 h-12 border-4 border-black rounded-lg bg-white text-lg font-comic"
              />
              <Button 
                size="icon" 
                variant="pop"
                className="absolute right-1 top-1 h-10 w-10"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="comic" size="lg" className="hidden sm:flex">
              登录
            </Button>
            <Button variant="pop" size="icon" className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-pop-pink text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-black">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Input
              placeholder="搜索超酷商品..."
              className="pl-4 pr-12 h-12 border-4 border-black rounded-lg bg-white text-lg font-comic"
            />
            <Button 
              size="icon" 
              variant="pop"
              className="absolute right-1 top-1 h-10 w-10"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Comic Speech Bubble */}
      <div className="absolute top-4 right-20 hidden lg:block">
        <div className="speech-bubble">
          <p className="text-sm font-bold text-black">超值好货!</p>
        </div>
      </div>
    </header>
  );
};

export default PopHeader;