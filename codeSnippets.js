/* To scroll horizontally with mouse wheel event */
useEffect(() => {
  window.onload = () => {
    const scroll_container = document.getElementById("scroll_container");

    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        scroll_container.scrollLeft += 100;
      } else {
        scroll_container.scrollLeft -= 100;
      }
    });
  };
}, []);
