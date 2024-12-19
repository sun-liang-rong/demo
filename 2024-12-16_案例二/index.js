export const autoResize = (el, options) => {
  const container = document.querySelector(el)
  const { width, height } = options;

  // console.log(el, scaleX, scaleY, innerHeight, innerWidth, 'scaleX, scaleY')
  container.style.transformOrigin = 'top left'
  function init() {
    const scaleY = innerHeight / height;
    const scaleX = innerWidth / width;
    const scale = Math.min(scaleX, scaleY)
    const translateX = (innerWidth - width * scale) / 2
    const translateY = (innerHeight - height * scale) / 2
    console.log(innerHeight, height * scale, container, scaleX, scaleY, translateX, translateY, 'scaleX, scaleY')
    container.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }
  init()
  addEventListener('resize', init)
}