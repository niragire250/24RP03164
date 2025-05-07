document.getElementById("issueForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const sector = document.getElementById("sector").value.trim();
  const issue = document.getElementById("issue").value.trim();
  const alertBox = document.getElementById("formAlert");

  if (!name || !sector || !issue) {
    alertBox.textContent = "Please fill in all fields.";
    alertBox.className = "alert alert-danger mt-3";
    alertBox.classList.remove("d-none");
    return;
  }

  alertBox.textContent = "Your issue has been reported successfully!";
  alertBox.className = "alert alert-success mt-3";
  alertBox.classList.remove("d-none");

  // Reset form
  document.getElementById("issueForm").reset();
});

