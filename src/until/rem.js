const rootValue = 50
const rootWidth = 375
function setRem () {
  const scale = document.documentElement.clientWidth / rootWidth
  document.documentElement.style.fontSize = (rootValue * scale / 2) + 'px'
}
setRem()
window.addEventListener('resize', function () {
  setRem()
})
