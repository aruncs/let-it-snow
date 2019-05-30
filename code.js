function letItSnow(){
  // document.getElementById("div1").classList.add("add-height")

  setInterval(() => {
    let ele = generateSnow()
    setTimeout(()=>{
      ele.style.top = '1000px'
    },50)
  },50)

  setInterval(() => {
    let ele = generateSnow()
    setTimeout(()=>{
      ele.style.top = '1000px'
    },50)
  },50)

}

function generateSnow(){
  var left = `${Math.floor(Math.random() * 2000)}px`

  var height = `${Math.floor(Math.random() * 4)}px`
  var width = `${Math.floor(Math.random() * 4)}px`
  var top = '0px'

  var style = "position:absolute;"

  var element = document.createElement('div')
  var time = `${Math.floor(Math.random() * 10)}s`
  element.style.position = 'absolute'
  element.style.left = left
  element.style.top = '-10px'
  element.style.width = width;
  element.style.height = height
  element.style.backgroundColor = '#fff'
  element.style.transition = `${time} top linear`
  element.style.zIndex = '2'

  document.body.appendChild(element)
  return element
}
