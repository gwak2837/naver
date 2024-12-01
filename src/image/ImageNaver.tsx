import Image from 'next/image';

type Props = {
  className?: string;
};

export default function ImageNaver({ className }: Props) {
  return (
    <Image
      className={className}
      src="https://s.pstatic.net/static/www/mobile/edit/20230516_0/upload_1684217675277OZzsu.gif"
      alt="naver"
      width={58}
      height={58}
      unoptimized
    />
  );
}
