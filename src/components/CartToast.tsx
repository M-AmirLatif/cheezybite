"use client";

import { useCartStore } from "@/lib/cartStore";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";

export function CartToast() {
  const { toast, hideToast, openCart } = useCartStore();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 max-w-sm w-full sm:w-auto"
        >
          <div className="bg-[#8B1A1A] text-white px-4 py-3 rounded-2xl shadow-2xl border-2 border-[#FFC20E] flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFC20E] text-[#8B1A1A] flex items-center justify-center shrink-0 font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div className="flex-1 pr-2">
              <p className="text-sm font-semibold text-[#FFFDF7] leading-tight">{toast}</p>
              <button
                onClick={openCart}
                className="text-xs font-bold text-[#FFC20E] hover:underline mt-0.5 inline-block cursor-pointer"
              >
                View Cart & Checkout &rarr;
              </button>
            </div>
            <button
              onClick={hideToast}
              className="text-white/70 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
