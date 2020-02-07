var activeBox = "currentNumber";
var selectedBox = 1;
var inputArray = ["currentNumber","timeInMinutes","drumsNeeded","hoursFromNow"];
var inputCount = document.getElementsByClassName("field").length;
var slider = document.getElementById("myRange");

var drum = {
  currentNumber:1,
  timeInMinutes:1,
  drumsNeeded:1,
  hoursFromNow:1,
  timeInHours: function() {
  var val = this.timeInMinutes / 60
  if (val >= 1) {
  return Math.round(val)
  }
  return 0
  },
  timeRemainder: function() {
  return this.timeInMinutes % 60
  },
  runFinished: function() {
  var mins = this.timeInMinutes * (this.drumsNeeded - this.currentNumber);
  var time = moment().add(mins, "minutes");
  return moment(time).format('LLL')
  },
  futureNumber: function() {
  var additionalDrums = (this.hoursFromNow * 60 / this.timeInMinutes);
  var next = Number(drum.currentNumber) + Number(additionalDrums)
  var time = moment().add(this.hoursFromNow, "hours");
  var formatedTime = moment(time).format('LLL')
  return "We should be on drum " + "<span style=\"color:blue;font-size:35px;\"/>" + Math.round(next) + "</span>" + " around " + formatedTime
  }
}

slider.oninput = function() {
  document.getElementById(activeBox).value = this.value;
  drum[activeBox] = this.value;
  document.getElementById("message").innerHTML = "Finished around " + drum.runFinished();
  document.getElementById("messageFuture").innerHTML = drum.futureNumber();
}
slider.onchange = function() {
  document.getElementById(activeBox).select();
}

function selectTextDown() {
  var selectedBox = inputArray.indexOf(activeBox);
  if (selectedBox > 0) {
  selectedBox--;}
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
  selectedBox++;}
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
var boxBox = function(x) {
  document.getElementById(activeBox).value = x.value;
  drum[activeBox] = x.value;
  document.getElementById("message").innerHTML = "Finished around " + drum.runFinished();
  document.getElementById("messageFuture").innerHTML = drum.futureNumber();
}
function unHideMessage(x) {
  document.getElementById("message").style.visibility = "visible";
  document.getElementById("messageFuture").style.visibility = "visible";
}
