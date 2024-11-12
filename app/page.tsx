"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Card className="w-full max-w-xl border-4 border-yellow-400 shadow-[0_0_20px_rgba(255,255,0,0.5)] bg-white dark:bg-zinc-900">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Trick
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              Pal
            </span>
          </CardTitle>
          <CardDescription className="text-xl font-bold text-purple-600 dark:text-purple-400">
            Ultimate Surprise Link Generator! 🎉
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button
            size="lg"
            className="w-full h-16 text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-lg"
            onClick={() => router.push("/create")}
          >
            <Sparkles className="w-6 h-6 mr-2 animate-spin-slow" />
            Create Surprise Link
          </Button>

          <p className="text-center text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6 animate-bounce">
            Surprise your friends! 😱💥
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
