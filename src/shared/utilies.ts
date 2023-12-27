// Reusable IntersectionObserver function
export const setupIntersectionObserver = (element: HTMLElement, callback: () => void) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      callback();
    }
  });

  observer.observe(element);
};