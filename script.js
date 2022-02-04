document.querySelectorAll(".boxes").forEach(function (box) {
  box.addEventListener("click", change);
  counter = 1;
  var player = document.getElementById("player");
  player.innerHTML = "player 1 its your turn";
  function change() {
    if (this.style.backgroundImage == "") {
      if (counter % 2 == 0) {
        this.style.backgroundImage = "url('images/ooo.png')";
        player.innerHTML = "player 1 its your turn";
      } else {
        this.style.backgroundImage = "url('images/xxx.png')";
        player.innerHTML = "player 2 its your turn";
      }
      counter += 1;
    }
  }
});
function resetbtn() {
  location.reload();
}
