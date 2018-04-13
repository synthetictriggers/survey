function no() {
  var x = document.getElementById("hideshow");

  var strength = document.getElementsByName("strength");
  for(var i=0;i<strength.length;i++)
  strength[i].checked = false;

  var pleasantness = document.getElementsByName("pleasantness");
  for(var i=0;i<pleasantness.length;i++)
  pleasantness[i].checked = false;

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function yes() {
  var x = document.getElementById("hideshow");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
