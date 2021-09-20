var NowMoment = moment();
var current = document.getElementById('currentDay');
current.innerHTML = NowMoment.format('dddd, MMMM Do YYYY, h:mm:ss a');

// const rows = document.getElementsByClassName("row");
// let currentHour = parseInt(moment().format('H'));

// Array.from(rows).forEach(row => {
//   let
//     rowIdString = row.id,
//     rowHour;
//   if (rowIdString) {
//     rowHour = parseInt(rowIdString);
//   }
//   if (rowHour) {
//     // Compares row id to current hour and sets color accordingly
//     if (currentHour === rowHour) {
//       setColor(row, "past");
//     } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
//       setColor(row, "present");
//     } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
//       setColor(row, "future");
//     } else {
//       setColor(row, "grey");
//     }
//   }
// });

// function setColor(element, color) {
//   element.style.backgroundColor = color;
// }


window.onload = function(){
    nine();
    ten();
    eleven();
    twelve();
    one();
    two();
    three();
    four();
    five();
    six();
   }
  
  
  function nine() {
    var text = document.getElementById("section1");
    var saveBtn = document.getElementById("save1");
  
    saveBtn.addEventListener("click", Output);
    text.value = localStorage.getItem("section1");
  
    function Output() {
      localStorage.setItem("section1", text.value);
  
      text.textContent = text.value;
    }
  }

  function ten() {
    var text = document.getElementById("section2");
    var saveBtn = document.getElementById("save2");
  
    saveBtn.addEventListener("click", Output);
    text.value = localStorage.getItem("section2");
  
    function Output() {
      localStorage.setItem("section2", text.value);
  
      text.textContent = text.value;
    }
  }

  function eleven() {
    var text = document.getElementById("section3");
    var saveBtn = document.getElementById("save3");
  
    saveBtn.addEventListener("click", Output);
    text.value = localStorage.getItem("section3");
  
    function Output() {
      localStorage.setItem("section3", text.value);
  
      text.textContent = text.value;
    }
  }

  function twelve() {
    var text = document.getElementById("section4");
    var saveBtn = document.getElementById("save4");
  
    saveBtn.addEventListener("click", Output);
    text.value = localStorage.getItem("section4");
  
    function Output() {
      localStorage.setItem("section4", text.value);
  
      text.textContent = text.value;
    }
  }

  function one() {
    var text = document.getElementById("section5");
    var saveBtn = document.getElementById("save5");
  
    saveBtn.addEventListener("click", Output);
    text.value = localStorage.getItem("section5");
  
    function Output() {
      localStorage.setItem("section5", text.value);
  
      text.textContent = text.value;
    }
  }

  function two() {
    var text = document.getElementById("section6");
    var saveBtn = document.getElementById("save6");
  
    saveBtn.addEventListener("click", Output);
    text.value = localStorage.getItem("section6");
  
    function Output() {
      localStorage.setItem("section6", text.value);
  
      text.textContent = text.value;
    }
  }

  function three() {
    var text = document.getElementById("section7");
    var saveBtn = document.getElementById("save7");
  
    saveBtn.addEventListener("click", Output);
    text.value = localStorage.getItem("section7");
  
    function Output() {
      localStorage.setItem("section7", text.value);
  
      text.textContent = text.value;
    }
  }

  function four() {
    var text = document.getElementById("section8");
    var saveBtn = document.getElementById("save8");
  
    saveBtn.addEventListener("click", Output);
    text.value = localStorage.getItem("section8");
  
    function Output() {
      localStorage.setItem("section8", text.value);
  
      text.textContent = text.value;
    }
  }

  function five() {
    var text = document.getElementById("section9");
    var saveBtn = document.getElementById("save9");
  
    saveBtn.addEventListener("click", Output);
    text.value = localStorage.getItem("section9");
  
    function Output() {
      localStorage.setItem("section9", text.value);
  
      text.textContent = text.value;
    }
  }

  function six() {
    var text = document.getElementById("section10");
    var saveBtn = document.getElementById("save10");
  
    saveBtn.addEventListener("click", Output);
    text.value = localStorage.getItem("section10");
  
    function Output() {
      localStorage.setItem("section10", text.value);
  
      text.textContent = text.value;
    }
  }
  
  
  
  