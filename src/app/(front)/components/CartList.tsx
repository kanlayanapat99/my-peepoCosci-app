"use client"
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCartStore } from "@/lib/cart-store"
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartList() {
    const router = useRouter();

    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearCart = useCartStore((state) => state.clearCart);
    const totalPrice = useCartStore((state) => state.totalPrice());

    if (items.length === 0) {
        return <div className="text-center mt-20"> Your Cart is Empty...</div>
    }

    return (
        <div className="mx-auto max-w-4xl mt-20">
            <h1 className="text-2xl font-bold mb-4 ">Your Cart</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product ID</TableHead>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Tools</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        items.map((i) => (
                            <TableRow key={i.productId}>
                                <TableCell>{i.productId}</TableCell>
                                <TableCell>{i.title}</TableCell>
                                <TableCell>{i.price}</TableCell>
                                <TableCell>{i.qty}</TableCell>
                                <TableCell>{(i.price * i.qty).toFixed(2)}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" className=" hover:bg-blue-400" onClick={() => {removeItem(i.productId)}}> <Trash/> </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

            <div className="text-left mt-4">
                <div className="font-medium text-xl">
                    Total Price: {totalPrice.toFixed(2)}
                </div>
                <div className="mt-4">
                    <Button className=" bg-blue-500 text-white hover:bg-blue-200 mr-4" onClick={() => {clearCart(); }}> Clear Your Cart</Button>
                    <Button className=" bg-blue-700 text-white hover:bg-blue-500" onClick={() => {router.replace('/product'); }}>Confirm Purchase</Button>
                </div>
            </div>
        </div>
    )
}