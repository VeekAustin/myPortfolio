import Link from 'next/link';

const navLinks = [
  { href: '#about',    label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills',   label: 'Skills' },
  { href: '#contact',  label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full border-b border-[#30363d] bg-[#0d1117]/85 backdrop-blur-sm shadow-sm z-50'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
        <span className='text-xl font-bold text-[#238636]'>VictorAugustine.dev</span>
        <ul className='hidden md:flex gap-8'>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}
                className='text-gray-700 hover:text-blue-600 transition-colors font-medium'>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
