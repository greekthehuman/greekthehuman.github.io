function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button4 = document.getElementById('button4');

  let index = 0;
  
  const colors = ['#3369ff', '#000269'];
  
  button1.addEventListener('click', function onClick() {
    button1.style.backgroundColor = colors[index];
    button1.style.color = 'white';

    index = index >= colors.length - 1 ? 0 : index + 1;
  });

  let index2 = 0;

  const colors2 = ['#3369ff', '#000269'];

    button2.addEventListener('click', function onClick() {
      button2.style.backgroundColor = colors2[index2];
      button2.style.color = 'white';
  
    index2 = index2 >= colors2.length - 1 ? 0 : index2 + 1;
  });

  let index4 = 0;

  const colors4 = ['#3369ff', '#000269'];

    button4.addEventListener('click', function onClick() {
      button4.style.backgroundColor = colors4[index4];
      button4.style.color = 'white';
  
    index4 = index4 >= colors4.length - 1 ? 0 : index4 + 1;
  });