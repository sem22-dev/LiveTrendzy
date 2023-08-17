import Image from "next/image";
import Link from "next/link";

export default function LiveStreamSection() {
    return (
        <div className="px-5 sm:px-6 lg:px-12 xl:px-32 py-8">
            <div className="flex justify-center items-center h-[500px] bg-black">
                {/* Black box as a placeholder for the live stream video */}
                <div className="w-[640px] h-[360px] bg-gray-800"></div>
            </div>
            <div className="mt-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Live Stream Title</h2>
                <p className="mt-2 text-sm text-gray-600">Join our live stream to see the latest fashion trends!</p>
                <div className="mt-4">
                    <Link href="/livestream" passHref>
                        <p className="text-blue-600 hover:underline">Watch Now</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
