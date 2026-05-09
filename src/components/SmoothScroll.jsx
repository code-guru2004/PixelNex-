import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll = null;

    const initScroll = () => {
      if (scrollRef.current && !scroll) {
        scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          smoothMobile: true,
          getDirection: true,
          multiplier: 0.8,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        });

        // Update scroll on window resize
        const handleResize = () => {
          if (scroll) scroll.update();
        };
        
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
          window.removeEventListener('resize', handleResize);
          if (scroll) scroll.destroy();
        };
      }
    };

    // Small delay to ensure DOM is ready
    const timeout = setTimeout(initScroll, 100);

    return () => {
      clearTimeout(timeout);
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}