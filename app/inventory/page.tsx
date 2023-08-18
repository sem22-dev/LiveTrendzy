import Image from "next/image";
import Link from "next/link";
import Product from "./product";

export default function Inventory() {
    return (
        <div className="px-5 sm:px-6 lg:px-12 h-[1000px]">
            <div className="flex h-screen">
                {/* Left Sidebar */}
                <aside className=" mt-4 w-1/5 bg-gray-200 p-4">
                    <h2 className="text-lg font-semibold mb-3">Categories</h2>
                    <ul>
                        {/* Example category list */}
                        <li>
                            <Link href="/inventory/1">
                                <p className="block py-1">Category 1</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/inventory/2">
                                <p className="block py-1">Category 2</p>
                            </Link>
                        </li>
                        {/* Add more categories as needed */}
                    </ul>
                </aside>

                {/* Main Content */}
            <main className="flex-1 bg-white p-4">
    <div className="grid grid-cols-2 gap-4">
        {/* Product 1 */}
        <Link href="/inventory/[productId]" as="/inventory/1">
            <p>
                <Product title="Product Title 1" price="$19.99" />
            </p>
        </Link>

        {/* Product 2 */}
        <Link href="/inventory/[productId]" as="/inventory/2">
            <p>
                <Product title="Product Title 2" price="$29.99" />
            </p>
        </Link>

        {/* Add more products in a similar manner */}
    </div>
</main>

            </div>
        </div>
    );
}


