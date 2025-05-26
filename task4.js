let progress = 0;
 function increaseProgress() {
    if (progress < 100) {
        progress += 20; // increase by 20%
        document.getElementById("progress").style.width = progress + "%";
        }
 }