const useScroll = (container: any) => {
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  const touchStartHandler = (e: TouchEvent) => {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startLeft = container.scrollLeft;
      startTop = container.scrollTop;

      container.addEventListener("touchmove", touchMoveHandler);
      container.addEventListener("touchend", touchEndHandler, { once: true });
    }
  };

  const touchMoveHandler = (e: TouchEvent) => {
    if (e.touches.length === 1) {
      const dx = startX - e.touches[0].clientX;
      const dy = startY - e.touches[0].clientY;
      container.scrollLeft = startLeft + dx;
      container.scrollTop = startTop + dy;
    }
  };

  const touchEndHandler = () => {
    container.removeEventListener("touchmove", touchMoveHandler);
  };

  container.addEventListener("touchstart", touchStartHandler);

  return {
    destroy: () => {
      container.removeEventListener("touchstart", touchStartHandler);
    },
  };
};

export default useScroll;
