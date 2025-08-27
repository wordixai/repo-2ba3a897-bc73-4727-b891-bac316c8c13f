import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "波普艺术连帽衫",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    badge: "热销",
    rating: 4.8
  },
  {
    id: 2,
    name: "漫画风格背包",
    price: 199,
    originalPrice: 259,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    badge: "新品",
    rating: 4.9
  },
  {
    id: 3,
    name: "涂鸦艺术帆布鞋",
    price: 359,
    originalPrice: 459,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    badge: "限量",
    rating: 4.7
  },
  {
    id: 4,
    name: "复古波点裙",
    price: 249,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
    badge: "热销",
    rating: 4.6
  },
  {
    id: 5,
    name: "街头艺术手机壳",
    price: 89,
    originalPrice: 119,
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=400&fit=crop",
    badge: "特价",
    rating: 4.5
  }
];

const ProductGrid = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots-pattern"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-fredoka comic-text mb-4">
            热门商品
          </h2>
          <p className="text-xl text-gray-600 font-comic max-w-2xl mx-auto">
            精选最受欢迎的波普艺术风格商品，每一件都是独特的艺术品！
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group relative"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Product Card */}
              <div className="pop-card bg-white p-4 group-hover:scale-105 transition-all duration-300">
                {/* Badge */}
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge 
                    className={`
                      border-2 border-black font-fredoka text-sm px-3 py-1
                      ${product.badge === '热销' ? 'bg-pop-orange text-white' : ''}
                      ${product.badge === '新品' ? 'bg-pop-lime text-black' : ''}
                      ${product.badge === '限量' ? 'bg-pop-purple text-white' : ''}
                      ${product.badge === '特价' ? 'bg-pop-pink text-white' : ''}
                    `}
                  >
                    {product.badge}
                  </Badge>
                </div>

                {/* Product Image */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                    <Button size="icon" variant="pop" className="h-10 w-10">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button size="icon" variant="comic" className="h-10 w-10">
                      <ShoppingCart className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="font-fredoka text-lg text-black group-hover:text-pop-orange transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-pop-yellow fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-fredoka text-pop-orange">¥{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">¥{product.originalPrice}</span>
                  </div>

                  {/* Add to Cart Button */}
                  <Button variant="pop" className="w-full mt-4">
                    加入购物车
                  </Button>
                </div>
              </div>

              {/* Floating Comic Elements */}
              {index === 1 && (
                <div className="absolute -top-8 -left-8 speech-bubble hidden lg:block">
                  <p className="text-sm font-bold text-black">超值!</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button variant="comic" size="xl" className="relative">
            <span className="relative z-10">查看更多商品</span>
            <div className="absolute inset-0 bg-pop-gradient opacity-20 rounded-lg"></div>
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-pop-blue border-4 border-black rounded-full animate-bounce hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-pop-yellow border-4 border-black transform rotate-45 animate-pulse hidden lg:block"></div>
    </section>
  );
};

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

export default ProductGrid;