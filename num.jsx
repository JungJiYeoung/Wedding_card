import { useState } from "react";
import { Copy } from "lucide-react";

export default function AccountBox() {
  const [copied, setCopied] = useState("");

  const groomAccount = "국민은행 123-456-789012 (홍길동)";
  const brideAccount = "우리은행 987-654-321098 (김영희)";

  const copyToClipboard = (account) => {
    navigator.clipboard.writeText(account);
    setCopied(account);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="mt-6 p-4 bg-white/80 rounded-2xl shadow-md text-center">
      <h2 className="text-lg font-semibold text-gray-800">💳 마음 전하실 곳</h2>

      {/* 신랑 계좌 */}
      <div className="mt-4 p-3 border rounded-xl bg-gray-50">
        <p className="font-medium text-gray-700">신랑</p>
        <p className="mt-1 text-gray-600">{groomAccount}</p>
        <button
          onClick={() => copyToClipboard(groomAccount)}
          className="mt-2 flex items-center mx-auto px-4 py-2 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600 transition"
        >
          <Copy className="w-4 h-4 mr-2" />
          {copied === groomAccount ? "복사됨!" : "계좌번호 복사"}
        </button>
      </div>

      {/* 신부 계좌 */}
      <div className="mt-4 p-3 border rounded-xl bg-gray-50">
        <p className="font-medium text-gray-700">신부</p>
        <p className="mt-1 text-gray-600">{brideAccount}</p>
        <button
          onClick={() => copyToClipboard(brideAccount)}
          className="mt-2 flex items-center mx-auto px-4 py-2 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600 transition"
        >
          <Copy className="w-4 h-4 mr-2" />
          {copied === brideAccount ? "복사됨!" : "계좌번호 복사"}
        </button>
      </div>
    </div>
  );
}
