// Add Your Code Here...

const towerA = document.getElementById("divA");
const towerB = document.getElementById("divB");
const towerC = document.getElementById("divC");

const placeholderSection = document.getElementById("placeholder");

towerA.addEventListener("click", moveDiscToPlaceholder);
towerB.addEventListener("click", moveDiscToPlaceholder);
towerC.addEventListener("click", moveDiscToPlaceholder);

function moveDiscToPlaceholder(clickDiscEvent) {
  if (placeholderSection.childElementCount < 1) {
    if (clickDiscEvent.currentTarget.id == "divA") {
      placeholderSection.append(divA.lastElementChild);
    } else if (clickDiscEvent.currentTarget.id == "divB") {
      placeholderSection.append(divB.lastElementChild);
    } else if (clickDiscEvent.currentTarget.id == "divC") {
      placeholderSection.append(divC.lastElementChild);
    }
  } else if (placeholderSection.childElementCount >= 1) {
    return;
  }
}

towerA.addEventListener("dblclick", moveDiscToTower);
towerB.addEventListener("dblclick", moveDiscToTower);
towerC.addEventListener("dblclick", moveDiscToTower);

let displayWin = document.createElement("h1");
displayWin.innerText = "You win!";

function moveDiscToTower(clickDiscEvent) {
  if (placeholderSection.childElementCount > 0) {
    if (
      clickDiscEvent.currentTarget.id == "divA" &&
      towerA.childElementCount < 1
    ) {
      towerA.append(placeholderSection.lastElementChild);
    } // check to see if disc div is wider than lastElementChild of tower
    else if (
      clickDiscEvent.currentTarget.id == "divA" &&
      placeholderSection.lastElementChild.clientWidth <
        towerA.lastElementChild.clientWidth
    ) {
      towerA.append(placeholderSection.lastElementChild);
    } else if (
      clickDiscEvent.currentTarget.id == "divB" &&
      towerB.childElementCount < 1
    ) {
      towerB.append(placeholderSection.lastElementChild);
    } // check to see if disc div is wider than lastElementChild of tower
    else if (
      clickDiscEvent.currentTarget.id == "divB" &&
      placeholderSection.lastElementChild.clientWidth <
        towerB.lastElementChild.clientWidth
    ) {
      towerB.append(placeholderSection.lastElementChild);
    } else if (
      clickDiscEvent.currentTarget.id == "divC" &&
      towerC.childElementCount < 1
    ) {
      towerC.append(placeholderSection.lastElementChild);
    } // check to see if disc div is wider than lastElementChild of tower
    else if (
      clickDiscEvent.currentTarget.id == "divC" &&
      placeholderSection.lastElementChild.clientWidth <
        towerC.lastElementChild.clientWidth
    ) {
      towerC.append(placeholderSection.lastElementChild);
    }
    if (towerC.childElementCount == 4) {
      placeholderSection.append(displayWin);
    }
  }
}
