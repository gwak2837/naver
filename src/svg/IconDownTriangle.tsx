type Props = {
  className?: string;
};

export default function IconDownTriangle({ className }: Props) {
  return (
    <>
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 16l-6-6h12l-6 6z" />
      </svg>
      <span className="blind">자동완성/최근검색어펼치기</span>
    </>
  );
}
