function openMysteryBox(boxId) {
    var song = document.getElementById("birthdaySong");

    if (boxId === 'popSatu') {
        var playMusic = confirm("Sebelum membuka Mystery Box, apakah kamu ingin memutar musik?");
        
        if (playMusic) {
            song.play();
        }
    }
    
    document.getElementById(boxId).style.display = "block";
}

function closeBox(boxId){
    document.getElementById(boxId).style.display = "none";
}