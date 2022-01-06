// setInterval(() => {
//     addHit()
// }, 10)
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