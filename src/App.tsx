import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from './types/product';
import { products } from './data/products';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">TechStyle Shop</h1>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative p-2 text-gray-600 hover:text-gray-900"
          >
            <ShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          {isCartOpen && (
            <div className="w-96">
              <Cart items={cartItems} onRemoveFromCart={removeFromCart} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;