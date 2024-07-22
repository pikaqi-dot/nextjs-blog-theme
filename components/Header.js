import Link from 'next/link';
import Image from 'next/image';
import touxiang from './touxiang.png';
export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Image
        src={touxiang}
        alt="Avatar"
        style={{
          'border-radius': '50%',
          overflow: 'hidden',
          width: '100px',
          height: '100px'
        }}
        width={100}
        height={100}
      />
      <p className="text-1xl text-center dark:text-white">
        {name}
      </p>
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">回到首页</Link>
      </p>

    </header>
  );
}
