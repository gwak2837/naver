import ImageNaver from '@/image/ImageNaver';
import IconNaver from '@/svg/IconNaver';
import IconSearch from '@/svg/IconSearch';

export default function Home() {
  return (
    <div className="">
      <div className="p-6">
        <form className="h-16 bg-white max-w-2xl flex mx-auto rounded-full border hover:shadow-md border-[#03c75a] focus-within:border-transparent focus-within:shadow-md focus-within:rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a className="relative shrink-0 w-16" href="/">
            <ImageNaver className="hide-3 m-auto pl-2 z-10 absolute inset-0 opacity-100 visible" />
            <IconNaver className="py-5 m-auto absolute invisible inset-0 opacity-0 show-3 shrink-0 pl-7 pr-4 w-[4.25rem] text-[#03c75a]" />
          </a>
          <input
            className="py-4 text-black w-full focus:outline-none placeholder:opacity-0 focus:placeholder:opacity-100 "
            autoComplete="off"
            type="search"
            id="query"
            name="query"
            maxLength={255}
            title="검색어를 입력해 주세요."
            placeholder="검색어를 입력해 주세요."
          />
          <button id="nautocomplete" type="button" aria-pressed>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path d="M12 16l-6-6h12l-6 6z" />
            </svg>
            <span className="blind">자동완성/최근검색어펼치기</span>
          </button>
          <button type="button">
            <IconSearch className="py-4 shrink-0 pr-7 pl-2 w-16 text-[#03c75a]" />
          </button>
        </form>
      </div>
    </div>
  );
}
