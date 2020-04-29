document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == 'interactive') {
    document.getElementById('main__content').style.visibility = "hidden";
  } else if (state == 'complete') {
    setTimeout(function () {
      document.getElementById('load').style.display = "none";
      document.getElementById('main__content').style.visibility = "visible";
    }, 1000);
  }
}