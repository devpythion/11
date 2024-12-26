let count = 0;

let savedCounts = JSON.parse(localStorage.getItem("savedCounts")) || [];
const value = document.querySelector("#increment");
const btns = document.querySelectorAll(".btn");
const para = document.getElementById("saved_para");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("saved")) {
      savedCounts.push(count);
      localStorage.setItem("savedCounts", JSON.stringify(savedCounts));
      para.textContent = "Saved Counts: " + savedCounts.join(", ");
    } 
    else if(styles.contains("saveReset")){
      localStorage.removeItem("savedCounts");
      savedCounts = [];
      para.textContent = "Saved Counts: " + savedCounts.join(", ");
    }
    else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
