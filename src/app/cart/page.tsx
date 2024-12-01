import Link from 'next/link';
import IconNaverStore from '@/svg/IconNaverStore';

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-gray-800">
      {/* Header Section */}
      <header className="w-full border-b border-gray-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <IconNaverStore />
          </div>
          <div className="flex-grow max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-4 text-sm"
                placeholder="상품명 또는 브랜드 입력"
              />
              <button className="absolute right-0 top-0 mt-2 mr-4 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.35-7.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm font-semibold">카테고리</button>
            <button className="text-sm font-semibold">쇼핑MY</button>
            <button className="text-sm font-semibold">장바구니</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center">
          <p className="text-2xl font-semibold mb-4">장바구니에 담긴 상품이 없습니다.</p>
          <p className="mb-8">원하는 상품을 장바구니에 담아보세요!</p>
          <Link href="/" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500">
            쇼핑 계속하기
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full border-t border-gray-300 bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <p className="mb-2">
            네이버 이용약관 | 네이버페이 이용약관 | 개인정보처리방침 | 법적고지 및 주의사항 | 입점안내 | 쇼핑원도
            노출안내
          </p>
          <p className="mb-4">쇼핑파트너센터 | 스마트스토어센터 | 안전거래센터 | 전자공인계약관 | 쇼핑&페이 고객센터</p>
          <p className="text-xs">
            사업자등록번호 : 220-81-62517 | 통신판매업신고번호 : 제2006-경기성남-0692호 | 대표이사 : 최수연 |
            사업자등록정보확인 | 이메일 : helpcustomer@naver.com
          </p>
          <p className="text-xs">
            주소 : 경기도 성남시 분당구 정자일로 95, NAVER 1784, 13561 | 대표전화 : 1588-3819 | 1:1문의 바로가기 |
            호스팅 서비스 제공 : NAVER Cloud
          </p>
          <p className="mt-4">Copyright @ NAVER Corp. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
