import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-green-400" />
          <span className="text-2xl font-bold">MayaStr</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#features" className="hover:text-green-400 transition-colors">Features</Link></li>
            <li><Link href="#cta" className="hover:text-green-400 transition-colors">Download</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

