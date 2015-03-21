(function() {
    var blurryClass = 'blurry',
        card = document.getElementById('card'),
        bg = document.getElementById('bg');

    card.addEventListener('mouseenter', function(e) {
        bg.classList.add(blurryClass);
    }, false);

    card.addEventListener('mouseleave', function(e) {
        bg.classList.remove(blurryClass);
    }, false);

}());
