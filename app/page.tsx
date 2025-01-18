import Header from './components/header'
import Footer from './components/footer'
import { Shield, Lock, FileCheck, Zap } from 'lucide-react'
import WorkflowDiagram from './components/workflow-diagram'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-green-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">MayaStr Security</h1>
            <p className="text-xl mb-8">The Modern-day Data Security and Encryptor</p>
            <a href="#cta" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors">
              Get Started
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose MayaStr?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={<Shield className="w-12 h-12 text-green-500" />}
                title="Unbreakable Encryption"
                description="New and Kaspersky Approved Encryption Algorithm that no hacker can decrypt."
              />
              <FeatureCard 
                icon={<Lock className="w-12 h-12 text-green-500" />}
                title="End-to-End Security"
                description="Encrypt all your files in a directory with just one tap."
              />
              <FeatureCard 
                icon={<FileCheck className="w-12 h-12 text-green-500" />}
                title="Full Privacy"
                description="Non-traceable data encryptor for complete user privacy."
              />
              <FeatureCard 
                icon={<Zap className="w-12 h-12 text-green-500" />}
                title="Fast & Efficient"
                description="Quick encryption process without compromising on security."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">How MayaStr Works</h2>
            <p className="text-center text-lg mb-8">Our advanced encryption and decryption process ensures your data remains secure at all times.</p>
            <WorkflowDiagram />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Tech Stack</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TechStackCard title="User Dashboard Website" description="Node.js, HTML, CSS" />
              <TechStackCard title="Database" description="MongoDB" />
              <TechStackCard title="Encryption Server" description="Flask" />
              <TechStackCard title="Encryption Algorithm" description="Python (Bootstrapped)" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Data?</h2>
            <p className="text-xl mb-8">Download MayaStr now and experience unbreakable encryption.</p>
            <a href="#" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors">
              Download MayaStr
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TechStackCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

