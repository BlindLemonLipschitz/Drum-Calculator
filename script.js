var userInputs = {
  currentNumber: 1,
  timeInMinutes: 1,
  drumsNeeded: 1,
  hoursFromNow: 1
}
var inputArray = Object.getOwnPropertyNames(userInputs);
var activeBox = inputArray[1];
var selectedBox = 1;
var inputCount = inputArray.length;
var slider = document.getElementById("myRange");

var runInfo = {
  timeInHours: function () {
    var val = userInputs.timeInMinutes / 60
    if (val >= 1) {
      return Math.round(val)
    }
    return 0
  },
  timeRemainder: function () {
    return userInputs.timeInMinutes % 60
  },
  runFinished: function () {
    var mins = userInputs.timeInMinutes * (userInputs.drumsNeeded - userInputs.currentNumber);
    var time = moment().add(mins, "minutes");
    return moment(time).format('LLL')
  },
  futureNumber: function () {
    var additionalDrums = (userInputs.hoursFromNow * 60 / userInputs.timeInMinutes);
    var next = Number(userInputs.currentNumber) + Number(additionalDrums)
    var time = moment().add(userInputs.hoursFromNow, "hours");
    var formatedTime = moment(time).format('LLL')
    return "We should be on drum " + "<span style=\"color:blue;font-size:35px;\"/>" + Math.round(next) + "</span>" + " around " + formatedTime
  }
}
  function updateMessages() {
  document.getElementById("message").innerHTML = "Finished around " + runInfo.runFinished();
  document.getElementById("messageFuture").innerHTML = runInfo.futureNumber();
}
slider.oninput = function () {
  document.getElementById(activeBox).value = this.value;
  userInputs[activeBox] = this.value;
  updateMessages();
}
slider.onchange = function () {
  document.getElementById(activeBox).select();
}

function selectTextDown() {
  var selectedBox = inputArray.indexOf(activeBox);
  if (selectedBox > 0) {
    selectedBox--;
  }
  else {
    selectedBox = inputCount - 1;
  }
  console.log(selectedBox + "selectedBox")
  const input = document.getElementById(inputArray[selectedBox]);
  input.focus();
  input.select();
}
function selectText() {
  var selectedBox = inputArray.indexOf(activeBox);
  if (selectedBox < (inputCount - 1)) {
    selectedBox++;
  }
  else {
    selectedBox = 0
  }
  const input = document.getElementById(inputArray[selectedBox]);
  input.focus();
  input.select();
}
function updateActiveBox(x) {
  activeBox = x.id;
  document.getElementById("myRange").value = x.value;
}
var boxBox = function (x) {
  document.getElementById(activeBox).value = x.value;
  userInputs[activeBox] = x.value;
  updateMessages();
}
function unHideMessage(x) {
  document.getElementById("message").style.visibility = "visible";
  document.getElementById("messageFuture").style.visibility = "visible";
}
