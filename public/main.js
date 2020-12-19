//select element

let myListItem = document.querySelector("ul");

//listen
myListItem.addEventListener("click", () => {
  fetch("/delete/" + event.target.id, { method: "delete" })
    .then(function(res) {
      res.json();
    })
    .then(function() {
      window.location.href = "/home";
      event.target.parentNode.removeChild(event.target);
    });
});
