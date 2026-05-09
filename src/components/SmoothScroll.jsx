import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll;

    const initScroll = () => {
      if (scrollRef.current) {
        scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          smoothMobile: true,
          resetNativeScroll: true,
          multiplier: 0.8, // Reduce speed for smoother feel
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        });

        // Update scroll on window resize
        window.addEventListener('resize', () => {
          scroll.update();
        });

        // Clean up
        return () => {
          if (scroll) scroll.destroy();
        };
      }
    };

    // Small delay to ensure DOM is ready
    const timeout = setTimeout(initScroll, 100);

    return () => {
      clearTimeout(timeout);
      if (scroll) scroll.destroy();
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}