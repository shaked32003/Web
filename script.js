function togglePrompt() {
  var promptContainer = document.getElementById("promptContainer");
  promptContainer.classList.toggle("show");

  if (promptContainer.classList.contains("show")) {
    var linkInput = document.getElementById("linkInput");
    linkInput.value = window.location.href;
    linkInput.select();
  }
}

var copyButton = document.querySelector('.copy-button');
var linkInput = document.querySelector('#linkInput');

copyButton.addEventListener('click', function() {
  linkInput.select();
  document.execCommand("copy");

  copyButton.textContent = "Copied!";
  copyButton.style.color = "green";

  setTimeout(function() {
    copyButton.textContent = "Copy";
    copyButton.style.color = "";
  }, 2000);
});

