import { notFound } from "next/navigation";

interface TestPageProps {
  params: {
    test: string;
  };
}

export default function TestPage({ params }: TestPageProps) {
  // test 파라미터가 없거나 유효하지 않은 경우 404
  if (!params.test) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">테스트 페이지</h1>
          <p className="text-gray-600 mt-2">테스트 파라미터: {params.test}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <p className="text-lg text-gray-700">
              이 페이지는 테스트 목적으로 만들어졌습니다.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
