const vid = document.querySelector(".video")
const vidButton = document.querySelector("#video-play")
const mainvideo = document.querySelector(".video1")

vid.addEventListener("click", () => {
    vidButton.style.display = "none";
    mainvideo.play();
})

vid.addEventListener("dblclick", () => {
    vidButton.style.display = "block"
    mainvideo.pause();
})