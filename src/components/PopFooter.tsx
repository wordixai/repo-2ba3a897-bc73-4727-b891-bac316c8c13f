import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Star, Mail, Phone, MapPin } from "lucide-react";

const PopFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="halftone-dots"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-8 bg-pop-gradient rounded-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-4xl font-fredoka text-black mb-4">
              订阅我们的通讯!
            </h3>
            <p className="text-lg text-black mb-6 font-comic">
              获取最新潮流资讯和独家优惠
            </p>
            <div className="flex max-w-md mx-auto">
              <Input
                placeholder="输入您的邮箱"
                className="rounded-r-none border-4 border-black h-12 bg-white text-black font-comic"
              />
              <Button variant="pop" className="rounded-l-none h-12 px-8">
                <Mail className="w-5 h-5 mr-2" />
                订阅
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-pop-yellow border-4 border-white rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-black" fill="currentColor" />
              </div>
              <h3 className="text-3xl font-fredoka text-pop-yellow">POP SHOP</h3>
            </div>
            <p className="text-gray-300 font-comic">
              让生活充满色彩，用波普艺术表达你的个性！每一件商品都是独特的艺术品。
            </p>
            <div className="flex space-x-3">
              {['🎨', '⚡', '🌟', '💫'].map((emoji, index) => (
                <div 
                  key={index}
                  className="w-10 h-10 bg-pop-pink border-2 border-white rounded-full flex items-center justify-center hover:animate-bounce cursor-pointer"
                >
                  <span className="text-lg">{emoji}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-fredoka text-pop-orange mb-4">快速链接</h4>
            <ul className="space-y-2 font-comic">
              {['热门商品', '新品上架', '限时优惠', '艺术收藏', '关于我们'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-pop-yellow transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-fredoka text-pop-pink mb-4">商品分类</h4>
            <ul className="space-y-2 font-comic">
              {['潮流服饰', '艺术配饰', '创意文具', '家居装饰', '数码周边'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-gray-300 hover:text-pop-yellow transition-colors duration-200">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-fredoka text-pop-blue mb-4">联系我们</h4>
            <div className="space-y-3 font-comic">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pop-lime rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-black" />
                </div>
                <span className="text-gray-300">400-POPSHOP</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pop-purple rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">hello@popshop.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pop-orange rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">上海市艺术区</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-pop-gradient pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400 font-comic">© 2024 POP SHOP</span>
              <Heart className="w-4 h-4 text-pop-pink" fill="currentColor" />
              <span className="text-gray-400 font-comic">用爱制作</span>
            </div>
            <div className="flex space-x-6 font-comic">
              <a href="#" className="text-gray-400 hover:text-pop-yellow transition-colors">隐私政策</a>
              <a href="#" className="text-gray-400 hover:text-pop-yellow transition-colors">服务条款</a>
              <a href="#" className="text-gray-400 hover:text-pop-yellow transition-colors">退换政策</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-pop-yellow border-4 border-white rounded-full animate-bounce opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-pop-pink border-4 border-white transform rotate-45 animate-pulse opacity-50"></div>
    </footer>
  );
};

export default PopFooter;