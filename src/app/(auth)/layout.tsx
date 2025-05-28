    import type { Metadata } from "next";
    import { Sarabun } from "next/font/google";
    import "../globals.css";

    const sarabun = Sarabun ({
    subsets: ['thai'],
    weight: ['100','200','300','400','500','600', '700', '800'],
    display: 'swap',
    });

    export const metadata: Metadata = {
    title: "Sign In",
    description: "ระบบขายของ COSCI",
    };

    export default function AuthLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body
            className={`${sarabun.className} antialiased`} >
            {children}
        </body>
        </html>
    );
    }
