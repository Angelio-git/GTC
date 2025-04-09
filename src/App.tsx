import React from 'react';
import { Twitter, Instagram as Telegram } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background Image Placeholder 1 */}
        <div className="absolute inset-0 bg-black opacity-50" style={{
          backgroundImage: 'https://raw.githubusercontent.com/Angelio-git/GTC/main/assets/photo_2025-04-09_19-10-26.jpg',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-center mb-8 tracking-wider"
              style={{
                textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
              }}>
            Grand Theft Chromosome
          </h1>
          
          {/* CA Box */}
          <div className="bg-white text-black px-6 py-3 rounded-full border-2 border-black max-w-full overflow-x-auto mb-8">
            <code className="whitespace-nowrap text-sm md:text-base">
              CA: Dm6j3n2k9ANW7MWqc1L9iDyNs38Re2WoXsYDxixepump
            </code>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter size={32} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Telegram size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative min-h-screen w-full">
        {/* Background Image Placeholder 2 */}
        <div className="absolute inset-0 bg-black opacity-50" style={{
          backgroundImage: 'url("BACKGROUND_IMAGE_2_URL")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-wider"
              style={{
                textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
              }}>
            ABOUT
          </h2>
          
          <div className="max-w-3xl text-lg md:text-xl text-center leading-relaxed"
               style={{
                 textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
               }}>
            <p>
              In this reimagined version of Grand Theft Auto (GTA), the game presents a colorful, vibrant urban landscape where the characters, all of whom have Down syndrome, navigate their lives with humor, heart, and a strong sense of community. The story follows a group of friends as they embark on various adventures, tackling everyday challenges with a mix of enthusiasm and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Background Image Placeholders */}
      <div className="hidden">
        {/* These are placeholder comments for additional background images */}
        {/* Background Image 3: URL_HERE */}
        {/* Background Image 4: URL_HERE */}
        {/* Background Image 5: URL_HERE */}
        {/* Background Image 6: URL_HERE */}
        {/* Background Image 7: URL_HERE */}
        {/* Background Image 8: URL_HERE */}
        {/* Background Image 9: URL_HERE */}
        {/* Background Image 10: URL_HERE */}
      </div>
    </div>
  );
}

export default App;
