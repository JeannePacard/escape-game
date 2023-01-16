const text = document.querySelector(".typedtext");
var aText = new Array(
  "Parce que regarder des films d’horreur ne suffisait plus...",
  " ",
  "nous vous proposons maintenant de vivre votre film d’horreur"
);

var iSpeed = 100; // vitesse d'ecriture
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0; // position texte
var sContents = ""; // texte au debut
var iRow;

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  text.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();
