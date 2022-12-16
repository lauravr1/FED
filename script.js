var counter = 0;

function slideoutClose() {

    if (counter == 0) {
        counter = 1;
        document.getElementById("slideoutOpen").style.display = "block";


    } else {
        counter = 0;
        document.getElementById("slideoutOpen").style.display = "none";

    }
    console.log(counter);

}
