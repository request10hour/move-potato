function follow1(m){
  document.getElementById("box").style.left = m.clientX - 50 + "px"
  document.getElementById("box").style.top = m.clientY - 20 + "px"
}

function follow2(n){
  document.getElementById("box1").style.left = n.clientX - 50 + "px"
  document.getElementById("box1").style.top = n.clientY - 20 + "px"
}

document.getElementById("box").addEventListener("mousedown", function(){
  document.addEventListener("mousemove", follow1)
})

document.getElementById("box1").addEventListener("mousedown", function(){
  document.addEventListener("mousemove", follow2)
})

var boxlo = 0
var box1lo = 0
var topleft = 0
var botleft = 0

function showleft(){
  document.getElementById("obox1").textContent = topleft
  document.getElementById("obox2").textContent = botleft
}

document.getElementById("box").addEventListener("mouseup", function(l){
  document.removeEventListener("mousemove", follow1)
  if(l.clientY < window.innerHeight/2){
    if(boxlo != 1){
      topleft++
      if(boxlo == 2){
        botleft--
      }
    }
    boxlo = 1
    document.getElementById("box").style.top = 5 + "%"
  }
  else{
    if(boxlo != 2){
      botleft++
      if(boxlo == 1){
        topleft--
      }
    }
    boxlo = 2
    document.getElementById("box").style.top = 55 + "%"
  }
  showleft()
})

document.getElementById("box1").addEventListener("mouseup",function(k){
  document.removeEventListener("mousemove", follow2)
  if(k.clientY < window.innerHeight/2){
    if(box1lo != 1){
      topleft++
      if(box1lo == 2){
        botleft--
      }
    }
    box1lo = 1
    document.getElementById("box1").style.top = 5 + "%"
  }
  else{
    if(box1lo != 2){
      botleft++
      if(box1lo == 1){
        topleft--
      }
    }
    box1lo = 2
    document.getElementById("box1").style.top = 55 + "%"
  }
  showleft()
})
