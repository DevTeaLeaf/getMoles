const useScroll = (container: any) => {
  let top = 0;
  let left = 0;
  let x = 0;
  let y = 0;

  const mouseDownHandler = (e: MouseEvent) => {
    left = container.scrollLeft;
    top = container.scrollTop;

    x = e.clientX;
    y = e.clientY;

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, { once: true });
  };

  const mouseUpHandler = () => {
    document.removeEventListener("mousemove", mouseMoveHandler);
  };

  const mouseMoveHandler = (e: MouseEvent) => {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    container.scrollTop = top - dy;
    container.scrollLeft = left - dx;
  };

  container.addEventListener("mousedown", mouseDownHandler);

  return {
    destroy: () => {
      container.removeEventListener("mousedown", mouseDownHandler);
    },
  };
};

export default useScroll;
