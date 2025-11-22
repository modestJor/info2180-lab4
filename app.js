window.onload = function() {
    const button = document.getElementById("load");
    button.addEventListener('click', function() {
        fetch ("superheroes.php")
    
        .then(response => response.text())
        .then(data => alert(data));
    });

};