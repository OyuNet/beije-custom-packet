import Link from "next/link";

export default function MenuMobile({ isOpen }: { isOpen: boolean; }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 top-[4rem] bg-[#f5f5f5] z-40 flex flex-col space-y-2 p-4 shadow-2xl">
            <nav className="flex flex-col space-y-2 p-8 gap-4">
                <Link href="/" className="text-gray-700 hover:underline underline-offset-6 text-base">Ürünler</Link>
                <Link href="/" className="text-gray-700 hover:underline underline-offset-6 text-base">Biz Kimiz?</Link>
                <Link href="/" className="text-gray-700 hover:underline underline-offset-6 text-base">Bağış Kültürü</Link>
                <Link href="/" className="text-gray-700 hover:underline underline-offset-6 text-base">Regl Testi!</Link>
                <Link href="/" className="text-gray-700 hover:underline underline-offset-6 text-base">Blog</Link>
                <Link href="/" className="text-gray-700 hover:underline underline-offset-6 text-base">Kendi Paketini Oluştur</Link>
            </nav>
        </div>
    );
}