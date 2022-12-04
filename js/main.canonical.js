function openForm() {
    document.getElementById("myForm").style.display = "block";

  }

  function sendForm(){

    /// and close a form
    setTimeout(() => {
      closeForm()
    }, 500);
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }