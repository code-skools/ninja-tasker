console.log("working");

// select elemnt, listening for events, manipulating element

const listItem = document.querySelector("ul");

listItem.addEventListener("click", function(event) {
  console.log(event.target.id);
  fetch("/delete/" + event.target.id, { method: "delete" })
    .then(function(res) {
      res.json();
    })
    .then(function() {
      event.target.parentNode.removeChild(event.target);
      window.location.href = "/home";
    });
});
