/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { ChevronRight } from "lucide-react";

export default function CartButton({product}: any) {
    const addItem = useCartStore((state) => state.addItem)

    const handleAddItem = () => {
        addItem({
            productId: product.id,
            title: product.title,
            price: product.price,
            qty: 1
        })
    }

    return (
        <>
        <Button className="mt-6 shadow-none  bg-blue-700 text-white hover:bg-blue-500" onClick={handleAddItem}>
                Add to Cart <ChevronRight />
        </Button>
        </>
    )

}