import "./index.css"

const data = Array.from({length: 100}).map((_, i) => i)

class Container {
  constructor(max, itemHeight, nodes, box){
    this.max = max
    this.itemHeight = itemHeight
    this.nodes = nodes
    this.box = box
  }
  move(){
    if(this.box.children.length){
      const lastEle = this.box.children[this.box.children.length - 1]
      if(this.box.children.length < this.max 
          && lastEle.getAttribute("data-Y") < "160"){
        this.add()
      }
    }else{
      this.add()
    }
    for(let i = 0 ; i < this.box.children.length; i++){
      let Y = this.box.children[i].getAttribute("data-Y")
      this.box.children[i].style.transform = `translateY(${Y - 0.5}px)`;
      this.box.children[i].setAttribute('data-Y', Y - 0.5) 
      if(Y < -40){
        this.box.children[i].remove()
      }
    }
  }
  add(){
    const node = this.nodes.shift()
    this.nodes.push(node)
    this.box.innerHTML += node
  }
}

function init(){
  const inner = document.getElementById("box")
  let Y = data.length * 40 - 200
  const nodes = [...data].map(i => {
    return `<div class="card" data-Y="200" style=";transform:translateY(${Y}px)">${i + 1}</div>`
  })
  const container = new Container(6, 40, nodes, inner)
  function cb(it){
    container.move()
    requestAnimationFrame(cb);
  }
  requestAnimationFrame(cb);
}

window.addEventListener("load", init)