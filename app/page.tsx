"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">TrickPal</h1>
          <p className="text-lg text-gray-600 mb-8">
            Create fun surprise links!
          </p>
        </div>

        <div className="space-y-4">
          <Button
            variant="default"
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={() => router.push("/create")}
          >
            Create Surprise Link
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => router.push("/gallery")}
          >
            Browse Popular Links
          </Button>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Surprise your friends with just a click!</p>
        </div>
      </div>
    </main>
  );
}
