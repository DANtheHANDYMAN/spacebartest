// setInterval(() => {
//     addHit()
// }, 10)

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

// example use
var div = document.querySelector("#clickarea");
var divOffset = offset(div);
console.log(divOffset.left, divOffset.top);
var style = `
#hack_container {
    position: absolute;
    z-index: 5;
    left: ${divOffset.left}px;
    top: ${divOffset.top}px;
    display: flex;
    background-color: black;
    padding: 10px;
}
.hack_btn {
    padding: 10px;
    color: #096;
    border-color: #096;
    border: 3px solid;
    background-color: black;
    border-radius: 2px;
   
}


`;
var hack_container = document.createElement('div');
hack_container.setAttribute('id','hack_container');

var hack_btn1 = document.createElement('button');
hack_btn1.setAttribute("id", "hack_btn1");
hack_btn1.setAttribute("class", "hack_btn");
hack_btn1.textContent = "Ruin The Fun (sorry does nothing lol)";


hack_container.append(hack_btn1);
document.body.append(hack_container);

var hack_style = document.createElement('style');
hack_style.innerHTML = style;

document.body.append(hack_style);

dragElement(document.getElementById("hack_container"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById("hack_container")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("hack_container").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// var script = document.createElement("script");
// script.src = "move_div.js";
// document.head.appendChild(script);


alert("eee")
var addHit = function () {
    console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') //it stills goes after ernduing
  if (0 === hits) {
    startTime = new Date().getTime();
    timerId = setInterval(function () {
      var total = (new Date().getTime() - startTime) / 1000;
      document.getElementById("timer1").textContent = total.toFixed(3);
    }, 1);
  }
  if (0 === hits && time > 0) {
    document.getElementById("timerInput").disabled = !0;
    document.getElementById("setTimeButton").disabled = !0;
    document.getElementById("setTimeButton").blur();
    intervalId = setInterval(function () {
      if (time > 1) {
        time--;
        document.getElementById("timer").innerHTML = Number(time);
      } else {
        time--;
        document.getElementById("timer").innerHTML = Number(time);
        time = -1;
        clearInterval(intervalId);
        intervalId = void 0;
        document.getElementById("timerInput").disabled = !1;
        document.getElementById("setTimeButton").disabled = !1;
        document.getElementById("timer1").textContent =
          document.getElementById("timerInput").value + ".000";
        clearInterval(timerId);
        resultpage();
      }
    }, 1e3);
  }
  if ((intervalId && time > 0) || 0 === time) {
    setCookie("hits", ++hits, "365");
    renderHits();
  }
  bps = (hits / timerInput.value).toFixed(1);
  document.getElementById("clicks").innerHTML = Number(bps);
  var clickareaDiv = document.getElementById("clickarea");
  let rippleElements = document.getElementsByClassName("myRipple");
  for (var i = 0; i < rippleElements.length; i++) {
    let X = 425;
    let Y = 265;
    let rippleDiv = document.createElement("div");
    rippleDiv.classList.add("ripple");
    rippleDiv.setAttribute("style", "top:" + Y + "px; left:" + X + "px;");
    let customColor = "#301934";
    if (customColor) rippleDiv.style.background = customColor;
    clickareaDiv.appendChild(rippleDiv);
    setTimeout(function () {
      rippleDiv.parentElement.removeChild(rippleDiv);
    }, 900);
  }
};

var sus;
var sus2;
var sus3;
var sus4;
var sus5;

var done = false;

var start_sus_timer
function start_sus() {
    console.log("steart")
    sus = setInterval(() => {
        if(done === false) {
            addHit();
        }
    console.log("steart_1");

    }, 1);
    sus2 = setInterval(() => {
       if (done === false) {
         addHit();
       }
    console.log("steart_2");

    }, 1);
    sus3 = setInterval(() => {
       if (done === false) {
         addHit();
       }
    console.log("steart_3");

    }, 1);
    sus4 = setInterval(() => {
       if (done === false) {
         addHit();
       }
    console.log("steart_4");

    }, 1);
    sus5 = setInterval(() => {
       if (done === false) {
         addHit();
       }
    console.log("steart_5");

    }, 1);
}
function stop_sus() {
    clearInterval(start_sus_timer);

  clearInterval(sus);
  clearInterval(sus2);
  clearInterval(sus3);
  clearInterval(sus4);
  clearInterval(sus5);
    //   sus = setInterval(() => {
        
    //     console.log("s_1");
    //   }, 1);
    //   sus2 = setInterval(() => {
        
    //     console.log("s_2");
    //   }, 1);
    //   sus3 = setInterval(() => {
        
    //     console.log("s_3");
    //   }, 1);
    //   sus4 = setInterval(() => {
        
    //     console.log("s_4");
    //   }, 1);
    //   sus5 = setInterval(() => {
        
    //     console.log("s_5");
    //   }, 1);
  console.log("stopping")
}
function setTime() {
    done = false;
    console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    // alert("hggg")
    // sus = setInterval(() => {
    //   addHit();
    // }, 1);
    // sus2 = setInterval(() => {
    //     addHit();
    // }, 1);
    // sus3 = setInterval(() => {
    //     addHit();
    // }, 1);
    // sus4 = setInterval(() => {
    // addHit();
    // }, 1);
    // sus5 = setInterval(() => {
    // addHit();
    // }, 1);
        // sus = setInterval(() => {
        //   addHit();
        // }, 1);
        // sus2 = setInterval(() => {
        //   addHit();
        // }, 1);
        // sus3 = setInterval(() => {
        //   addHit();
        // }, 1);
        // sus4 = setInterval(() => {
        //   addHit();
        // }, 1);
        // sus5 = setInterval(() => {
        //   addHit();
        // }, 1);
        start_sus_timer = setInterval(start_sus, 1); 
  hits = 0;
  renderHits();
  document.getElementById("setTimeButton").style.display = "none";
  document.getElementById("spacebarbutton").classList.remove("hidden");
  time =
    document.getElementById("timerInput").value >= 0
      ? Number(document.getElementById("timerInput").value)
      : 60;
  document.getElementById("timer").innerHTML = time;
  document.getElementById("txtStatus").value = 1;
}

function resultpage(event) {
    done = true;
    // clearInterval(sus);
    // clearInterval(sus2);
    // clearInterval(sus3);
    // clearInterval(sus4);
    // clearInterval(sus5);

    // clearInterval(start_sus_timer);
    stop_sus()


  var e = timerInput.value;
  if (bps > 0 && 2.5 >= bps) {
    $("#largesizemodal").modal("show");
    $("#largesizemodal div:first").addClass("modal-turtle");
    $("#largesizemodal div:first").removeClass("modal-rabbit");
    $("#largesizemodal div:first").removeClass("modal-deer");
    $("#largesizemodal div:first").removeClass("modal-tiger");
    $("#largesizemodal div:first").removeClass("modal-leopard");
    $("#main-img").attr("src", "../static/assets/images/popup/snail.webp");
    $("#ani-name").text("Snail");
    $(".sscore").text(hits);
    $(".cscore").text(bps);
    $(".time").text(e + "");
  } else if (bps > 2.5 && 4.5 >= bps) {
    $("#largesizemodal").modal("show");
    $("#largesizemodal div:first").addClass("modal-rabbit");
    $("#largesizemodal div:first").removeClass("modal-turtle");
    $("#largesizemodal div:first").removeClass("modal-deer");
    $("#largesizemodal div:first").removeClass("modal-tiger");
    $("#largesizemodal div:first").removeClass("modal-leopard");
    $("#main-img").attr("src", "../static/assets/images/popup/turtle.webp");
    $("#ani-name").text("Turtle");
    $(".sscore").text(hits);
    $(".cscore").text(bps);
    $(".time").text(e + "");
  } else if (bps > 4.5 && 5.5 >= bps) {
    $("#largesizemodal").modal("show");
    $("#largesizemodal div:first").addClass("modal-deer");
    $("#largesizemodal div:first").removeClass("modal-rabbit");
    $("#largesizemodal div:first").removeClass("modal-turtle");
    $("#largesizemodal div:first").removeClass("modal-tiger");
    $("#largesizemodal div:first").removeClass("modal-leopard");
    $("#main-img").attr("src", "../static/assets/images/popup/cat.webp");
    $("#ani-name").text("Cat");
    $(".sscore").text(hits);
    $(".cscore").text(bps);
    $(".time").text(e + "");
  } else if (bps > 5.5 && 6.5 >= bps) {
    $("#largesizemodal").modal("show");
    $("#largesizemodal div:first").addClass("modal-tiger");
    $("#largesizemodal div:first").removeClass("modal-turtle");
    $("#largesizemodal div:first").removeClass("modal-deer");
    $("#largesizemodal div:first").removeClass("modal-rabbit");
    $("#largesizemodal div:first").removeClass("modal-leopard");
    $("#main-img").attr("src", "../static/assets/images/popup/wine.webp");
    $("#ani-name").text("Boar");
    $(".sscore").text(hits);
    $(".cscore").text(bps);
    $(".time").text(e + "");
  } else if (bps > 6.5 && 7.5 >= bps) {
    $("#largesizemodal").modal("show");
    $("#largesizemodal div:first").addClass("modal-tiger");
    $("#largesizemodal div:first").removeClass("modal-turtle");
    $("#largesizemodal div:first").removeClass("modal-deer");
    $("#largesizemodal div:first").removeClass("modal-rabbit");
    $("#largesizemodal div:first").removeClass("modal-leopard");
    $("#main-img").attr("src", "../static/assets/images/popup/rhino.webp");
    $("#ani-name").text("Rhino");
    $(".sscore").text(hits);
    $(".cscore").text(bps);
    $(".time").text(e + "");
  } else if (bps > 7.5 && 8.5 >= bps) {
    $("#largesizemodal").modal("show");
    $("#largesizemodal div:first").addClass("modal-tiger");
    $("#largesizemodal div:first").removeClass("modal-turtle");
    $("#largesizemodal div:first").removeClass("modal-deer");
    $("#largesizemodal div:first").removeClass("modal-rabbit");
    $("#largesizemodal div:first").removeClass("modal-leopard");
    $("#main-img").attr("src", "../static/assets/images/popup/wolf.webp");
    $("#ani-name").text("Wolf");
    $(".sscore").text(hits);
    $(".cscore").text(bps);
    $(".time").text(e + "");
  } else if (bps > 8.5 && 9.0 >= bps) {
    $("#largesizemodal").modal("show");
    $("#largesizemodal div:first").addClass("modal-tiger");
    $("#largesizemodal div:first").removeClass("modal-turtle");
    $("#largesizemodal div:first").removeClass("modal-deer");
    $("#largesizemodal div:first").removeClass("modal-rabbit");
    $("#largesizemodal div:first").removeClass("modal-leopard");
    $("#main-img").attr("src", "../static/assets/images/popup/lion.webp");
    $("#ani-name").text("Lion");
    $(".sscore").text(hits);
    $(".cscore").text(bps);
    $(".time").text(e + "");
  } else if (bps > 9.0 && 11 >= bps) {
    $("#largesizemodal").modal("show");
    $("#largesizemodal div:first").addClass("modal-tiger");
    $("#largesizemodal div:first").removeClass("modal-turtle");
    $("#largesizemodal div:first").removeClass("modal-deer");
    $("#largesizemodal div:first").removeClass("modal-rabbit");
    $("#largesizemodal div:first").removeClass("modal-leopard");
    $("#main-img").attr("src", "../static/assets/images/popup/tiger.webp");
    $("#ani-name").text("Tiger");
    $(".sscore").text(hits);
    $(".cscore").text(bps);
    $(".time").text(e + "");
  } else if (bps > 11) {
    $("#largesizemodal").modal("show");
    $("#largesizemodal div:first").addClass("modal-leopard");
    $("#largesizemodal div:first").removeClass("modal-tiger");
    $("#largesizemodal div:first").removeClass("modal-turtle");
    $("#largesizemodal div:first").removeClass("modal-deer");
    $("#largesizemodal div:first").removeClass("modal-rabbit");
    $("#main-img").attr("src", "../static/assets/images/popup/cheetah.webp");
    $("#ani-name").text("Leopard");
    $(".sscore").text(hits);
    $(".cscore").text(bps);
    $(".time").text(e + "");
  }
}