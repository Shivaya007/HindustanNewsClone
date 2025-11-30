import React, { useState, useRef } from 'react';

export default function TrendingTagsSlider() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const trendingTags = [
    'सीके जरीवाला सर्वेक्षण',
    'SIR',
    'अनुच्छेद 240',
    'दिल्ली कार धमाका',
    'बिग बॉस 19',
    'मौसम',
    'आज का राशिफल',
    'शेयर मार्केट',
    'क्रिप्टो न्यूज़',
    'टेक्नोलॉजी',
    'बॉलीवुड',
    'राजनीति',
    'खेल समाचार',
    'विदेश नीति'
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="bg-white border-y">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scroll('left')}
            className="px-2 py-2 bg-gray-100 rounded hover:bg-gray-200 transition flex-shrink-0"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-3 overflow-x-hidden flex-1"
          >
            {trendingTags.map((tag, index) => (
              <button
                key={index}
                className="px-5 py-2 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap hover:border-red-600 hover:text-red-600 transition flex-shrink-0"
              >
                {tag}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')}
            className="px-2 py-2 bg-gray-100 rounded hover:bg-gray-200 transition flex-shrink-0"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}