import { useEffect, useRef } from 'react';

export function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return ref;
}

export function FadeIn({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useFadeIn();
  return <div ref={ref} className={`fade-in-up ${className}`}>{children}</div>;
}
