import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
        const offset = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;