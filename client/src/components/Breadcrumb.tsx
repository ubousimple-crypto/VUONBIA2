import Link from "next/link";

export default function Breadcrumb() {
  return (
    <nav className="text-gray-500 text-sm font-semibold mb-4 px-4">
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:underline">Trang Chủ</Link>
        </li>
        <li className="select-none">/</li>
        <li>
          <Link href="/menu" className="hover:underline">Menu</Link>
        </li>
        <li className="select-none">/</li>
        <li>
          <Link href="/sinh-nhat" className="hover:underline">Tin Tức</Link>
        </li>
      </ul>
    </nav>
  );
}
