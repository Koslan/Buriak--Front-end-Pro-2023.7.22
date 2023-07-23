// for task 26
const myBirthdate = moment('1993-06-11'); // Replace with your actual birthdate
document.getElementById('my-birthdate').textContent = myBirthdate.format('DD MMMM YYYY');

function showModal() {
  const modalBox = document.getElementById('modal-box');
  modalBox.style.display = "block";
}

function closeModal() {
  const modalBox = document.getElementById('modal-box');
  modalBox.style.display = "none";
}

function toggleAlert() {
  const alertBox = document.getElementById('alert-box');
  alertBox.classList.toggle('d-none');
}

function formatBirthdate() {
  const userBirthdateInput = document.getElementById('user-birthdate');
  const errorMessage = document.getElementById('error-message');
  const userBirthdate = userBirthdateInput.value;

  // Check if user birthdate matches the format
  if (!/^(\d{4}-\d{2}-\d{2})$/.test(userBirthdate)) {
    errorMessage.classList.remove('d-none');
    return;
  }

  // Hide error message if it was shown
  errorMessage.classList.add('d-none');

  // Format the birthdate and display it
  const formattedBirthdate = moment(userBirthdate, 'YYYY-MM-DD').format('MMMM Do, YYYY');
  document.getElementById('formatted-birthdate').textContent = formattedBirthdate;
}




// for task 27
let lastTime = { hour: [0, 0], minute: [0, 0], second: [0, 0] };

function updateClock() {
  const now = new Date();
  const time = {
    hour: String(now.getHours()).padStart(2, '0').split(''),
    minute: String(now.getMinutes()).padStart(2, '0').split(''),
    second: String(now.getSeconds()).padStart(2, '0').split('')
  };

  for (const unit in time) {
    time[unit].forEach((digit, index) => {
      if (digit !== lastTime[unit][index]) {
        document.getElementById(`${unit}-${index + 1}`).textContent = digit;
        lastTime[unit][index] = digit;
      }
    });
  }
}

setInterval(updateClock, 1000);



// Utility functions

function selectElementTask2(index) {
  selectedItemTask2 = index;
  updateListTask();
}

function loadTabContent(tabId) {
  const tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
}

loadTabContent("hm26");

document.getElementById("task-select").addEventListener("change", (event) => {
  loadTabContent(event.target.value);
});

window.onload = function () {
  const currentPageUrl = window.location.href;
  const username = currentPageUrl.split("/")[2].split(".")[0];
  const repoName = currentPageUrl.split("/")[3];
  const githubRepoUrl = `https://github.com/${username}/${repoName}`;

  document.getElementById("github-link").href = githubRepoUrl;


  // Initialize all tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Add the onclick function for outside click of the modal
  window.onclick = function (event) {
    if (event.target == document.getElementById('modal-box')) {
      closeModal();
    }
  };



  // Initialize all tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Add the onclick function for outside click of the modal
  window.onclick = function (event) {
    if (event.target == document.getElementById('modal-box')) {
      closeModal();
    }
  };
};
