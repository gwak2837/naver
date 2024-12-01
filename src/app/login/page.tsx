import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        {/* Naver Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/image/naver-logo.png" // Replace with appropriate path
            alt="Naver Logo"
            width={120}
            height={50}
          />
        </div>

        {/* Login Options */}
        <div className="flex border-b mb-6">
          <button className="w-1/3 p-2 font-medium text-center border-b-2 border-green-600">ID/전화번호</button>
          <button className="w-1/3 p-2 font-medium text-center">일회용 번호</button>
          <button className="w-1/3 p-2 font-medium text-center">QR코드</button>
        </div>

        {/* Login Form */}
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="아이디 또는 전화번호"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Remember Me and IP Security */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 form-checkbox focus:outline-none focus:ring-green-600" />
            <span>로그인 상태 유지</span>
          </label>
          <div className="flex items-center">
            <span className="mr-2">IP보안</span>
            <button className="bg-gray-200 rounded-full w-10 h-5 flex items-center p-1 focus:outline-none">
              <div className="bg-white w-4 h-4 rounded-full shadow"></div>
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 mb-6">
          로그인
        </button>

        {/* Links */}
        <div className="flex justify-around text-sm text-gray-500">
          <a href="#" className="hover:underline">
            비밀번호 찾기
          </a>
          <a href="#" className="hover:underline">
            아이디 찾기
          </a>
          <a href="#" className="hover:underline">
            회원가입
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-xs text-gray-500 text-center">
        이용약관 | 개인정보처리방침 | 책임의 한계와 법적고지 | 회원정보 고객센터
        <br />
        NAVER Copyright © NAVER Corp. All Rights Reserved.
      </div>
    </div>
  );
}
