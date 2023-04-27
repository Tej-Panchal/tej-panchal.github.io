function makeBigger() {
    document.getElementById("inputText").style.fontSize = "24pt";
  }
  
  function fancySelected() {
    alert("Fancy Shmancy selected!");
  }
  
  function BoringSelected() {
    alert("Boring Betty selected.");
  }
  
  function applyStyle() {
    var textarea = document.getElementById("inputText");
    var styleValue = document.querySelector('input[name="style"]:checked').value;
    if (styleValue === "fancy") {
      textarea.style.fontWeight = "bold";
      textarea.style.color = "blue";
      textarea.style.textDecoration = "underline";
    } else {
      textarea.style.fontWeight = "normal";
      textarea.style.color = "black";
      textarea.style.textDecoration = "none";
    }
  }
  
  function makeMoo() {
    var text = document.getElementById("inputText").value;
    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].split(" ");
      words[words.length - 1] = words[words.length - 1].toUpperCase() + "-Moo";
      sentences[i] = words.join(" ");
    }
    document.getElementById("inputText").value = sentences.join(". ");
  }