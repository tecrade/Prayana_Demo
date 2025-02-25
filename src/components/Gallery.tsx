import React, { useState, useEffect } from 'react';
import { Shuffle } from 'lucide-react';
import { motion } from 'framer-motion';

// Gallery images from Unsplash
const galleryImages = [
  {
    url: '/images/img1.jpeg',
    alt: 'img1',
    span: 'col-span-2 row-span-2'
  },
  {
    url: '/images/img2.jpg',
    alt: 'img2',
    span: 'col-span-1 row-span-1'
  },
  {
    url: '/images/img3.jpeg',
    alt: 'img3',
    span: 'col-span-1 row-span-2'
  },
  {
    url: '/images/img4.png',
    alt: 'img4',
    span: 'col-span-2 row-span-1'
  },
  {
    url: '/images/img5.webp',
    alt: 'img5',
    span: 'col-span-1 row-span-1'
  },
  {
    url: '/images/img6.jpeg',
    alt: 'img6',
    span: 'col-span-1 row-span-2'
  }
];

function Gallery() {
  const [images, setImages] = useState(galleryImages);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      shuffleImages();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const shuffleImages = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const shuffled = [...images].sort(() => Math.random() - 0.5);
      setImages(shuffled);
      setIsShuffling(false);
    }, 300);
  };

  return (
    <section id="about" className="py-20 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/30 pointer-events-none" />
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Gallery</h1>
       </motion.div>
        
        <div className={`grid grid-cols-4 gap-4 transition-opacity duration-300 ${isShuffling ? 'opacity-0' : 'opacity-100'}`}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} group relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02]`}
            >
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;