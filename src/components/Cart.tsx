import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { Product } from '../types/product';

interface CartProps {
  items: Product[];
  onRemoveFromCart: (productId: number) => void;
}

export function Cart({ items, onRemoveFromCart }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingBag className="text-blue-600" />
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
      </div>
      
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-lg">${total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}