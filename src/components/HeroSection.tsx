import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-pop-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pop-yellow rounded-full border-4 border-black animate-bounce-gentle"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pop-pink rounded-full border-4 border-black animate-wiggle"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pop-blue rounded-full border-4 border-black"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-pop-purple rounded-full border-4 border-black"></div>
        
        {/* Halftone Pattern */}
        <div className="absolute inset-0 halftone-dots"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white border-4 border-black rounded-full px-6 py-2 mb-6 transform -rotate-2">
              <Sparkles className="w-5 h-5 text-pop-orange" />
              <span className="font-bold text-black">新品上架</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-fredoka comic-text mb-6 leading-tight">
              BOOM!
              <br />
              <span className="outlined-text">超酷</span>
              <br />
              潮流!
            </h1>
            
            <p className="text-xl text-black font-comic mb-8 max-w-lg">
              发现最炫酷的潮流服饰和艺术品，让你的生活充满波普艺术的活力与色彩！
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="pop" size="xl" className="group">
                <Zap className="w-6 h-6 mr-2 group-hover:animate-bounce" />
                立即购买
              </Button>
              <Button variant="comic" size="xl">
                <Heart className="w-6 h-6 mr-2" />
                收藏夹
              </Button>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Main Product Image */}
              <div className="pop-card bg-white p-6 transform hover:rotate-2 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop" 
                  alt="潮流T恤"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="text-2xl font-fredoka text-black">波普艺术T恤</h3>
                  <p className="text-lg font-bold text-pop-orange">¥199</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-pop-pink border-4 border-black rounded-full p-3 animate-bounce">
                <span className="text-2xl">⚡</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-pop-yellow border-4 border-black rounded-full p-3 animate-pulse">
                <span className="text-2xl">🎨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comic Elements */}
      <div className="absolute bottom-10 left-10 speech-bubble hidden lg:block">
        <p className="text-lg font-fredoka text-black">WOW! 限时优惠!</p>
      </div>
    </section>
  );
};

export default HeroSection;