function appearP1() {
    var loader = document.getElementById('loader');
    var home = document.getElementById('home');
    var topics = document.getElementById('topics');
    loader.style.left = "0";
    setTimeout(function() {
        loader.style.left = "-100%";
    }, 1000)
}