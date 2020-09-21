// Add Your Code Here...

const towerA = document.getElementById("divA");
const towerB = document.getElementById("divB");
const towerC = document.getElementById("divC");

const placeholderSection = document.getElementById("placeholder");

towerA.addEventListener("click", moveDiscToPlaceholder);
towerB.addEventListener("click", moveDiscToPlaceholder);
towerC.addEventListener("click", moveDiscToPlaceholder);

function moveDiscToPlaceholder(clickDiscEvent) {
  if (placeholderSection.childElementCount >= 1) {
    return;
  }

  // Bring disc from tower to placeholder
  if ((clickDiscEvent.currentTarget.id = "divA")) {
    placeholderSection.append(divA.lastElementChild);
  } else if ((clickDiscEvent.currentTarget.id = "divB")) {
    placeholderSection.append(divB.lastElementChild);
  } else if ((clickDiscEvent.currentTarget.id = "divC")) {
    placeholderSection.append(divC.lastElementChild);
  }
}

towerA.addEventListener("dblclick", moveDiscToTower);
towerB.addEventListener("dblclick", moveDiscToTower);
towerC.addEventListener("dblclick", moveDiscToTower);

function moveDiscToTower(clickDiscEvent) {
  if (
    clickDiscEvent.currentTarget.id == "divA" //&&
    //towerA.childElementCount < 1
  ) {
    towerA.append(placeholderSection.lastElementChild);
  } else if (
    clickDiscEvent.currentTarget.id == "divA" //&&
    //towerA.childElementCount >= 1
  ) {
    // check to see if div is wider than lastElementChild of tower
    if (
      placeholderSection.lastElementChild.clientWidth <
      towerA.lastElementChild.clientWidth
    ) {
      towerA.append(placeholderSection.Element);
    }
  } else if (
    clickDiscEvent.currentTarget.id == "divB" //&&
    //towerB.childElementCount < 1
  ) {
    towerB.append(placeholderSection.lastElementChild);
  } else if (
    clickDiscEvent.currentTarget.id == "divC" //&&
    //towerC.childElementCount < 1
  ) {
    towerC.append(placeholderSection.lastElementChild);
  }
}

//if (placeholderSection.childElementCount > 0) {
//divA.append(placeholderSection.lastElementChild);
