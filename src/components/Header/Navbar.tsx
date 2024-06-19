import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="hidden md:flex space-x-6 ml-10">
            <Link href="/" className="text-gray-700 hover:underline underline-offset-8 text-base">Ürünler</Link>
            <Link href="/" className="text-gray-700 hover:underline underline-offset-8 text-base">Biz Kimiz</Link>
            <Link href="/" className="text-gray-700 hover:underline underline-offset-8 text-base">Bağış Kültürü</Link>
            <Link href="/" className="text-gray-700 hover:underline underline-offset-6 text-base">Regl Testi!</Link>
            <Link href="/" className="text-gray-700 hover:underline underline-offset-6 text-base">Kendi Paketini Oluştur</Link>
        </nav>
    );
}