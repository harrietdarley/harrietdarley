//Text Animation https://tobiasahlin.com
// Get all the elements with the .ml2 class
var textWrapper = document.querySelectorAll('.ml2');
// Loop over the textWrapper array and apply the animation effect to each element in it
textWrapper.forEach(el => {
    el.innerHTML = el.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
    );
});

anime.timeline({ loop: true })
    .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 10000,
        delay: (el, i) => 150 * i
    }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 2000,
        easing: "easeOutExpo",
        delay: 2000
    });


