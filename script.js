//src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js";
//moment().format();
var activeBox = "currentNumber";
var selectedBox = 1;
var inputArray = ["currentNumber","timeInMinutes","drumsNeeded","hoursFromNow"];
var inputCount = document.getElementsByClassName("field").length;
var slider = document.getElementById("myRange");
//var output = document.getElementById(activeBox);
//output.value = slider.value

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
  //console.log("next", next)
  var time = moment().add(this.hoursFromNow, "hours");
  var formatedTime = moment(time).format('LLL')
  return "We should be on drum " + "<span style=\"color:blue;font-size:35px;\"/>" + Math.round(next) + "</span>" + " around " + formatedTime
  }
}

slider.oninput = function() {
  document.getElementById(activeBox).value = this.value;
  drum[activeBox] = this.value;
  //document.getElementById("demo").innerHTML = this.value;
  //document.getElementById("demo").innerHTML = drum.currentNumber;
  //document.getElementsByTagName("h2").style.color = "red";
  document.getElementById("message").innerHTML = "Finished around " + drum.runFinished();
  document.getElementById("messageFuture").innerHTML = drum.futureNumber();
  //message.innerHTML = drum.runFinished();
}
slider.onchange = function() {
  //document.getElementById(activeBox+"i").style.background = "white";
  document.getElementById(activeBox).select();
  //document.getElementById("message").innerHTML = "Finished around " + drum.runFinished();
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
  //document.getElementById(activeBox).value = this.value;
  //drum[activeBox] = this.value;
  //document.getElementById("message").innerHTML = "Finished around " + drum.runFinished();
  //document.getElementById("messageFuture").innerHTML = drum.futureNumber();
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
  //document.getElementById("demo").innerHTML = drum.currentNumber;
  //document.getElementById(activeBox).value = this.value;
  //drum[activeBox] = this.value;
  //document.getElementById("message").innerHTML = "Finished around " + drum.runFinished();
  //document.getElementById("messageFuture").innerHTML = drum.futureNumber();


    }
function updateActiveBox(x) {
  activeBox = x.id;
  //x.style.fontSize = "xx-large";
  //document.getElementById(activeBox).value = this.value;
  //drum[activeBox] = this.value;
  //document.getElementById("message").innerHTML = "Finished around " + drum.runFinished();
  //document.getElementById("messageFuture").innerHTML = drum.futureNumber();
}
