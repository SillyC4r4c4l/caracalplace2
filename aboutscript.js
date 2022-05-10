function openInfo(evt, btnName) {
    var i, infocontent, infobutton;
    infocontent = document.getElementsByClassName("infocontent");
    for (i = 0; i < infocontent.length; i++) {
      infocontent[i].style.display = "none";
    }
    infobutton = document.getElementsByClassName("infobutton");
    for (i = 0; i < infobutton.length; i++) {
      infobutton[i].className = infobutton[i].className.replace(" active", "");
    }
    document.getElementById(btnName).style.display = "block";
    evt.currentTarget.className += " active";
  }