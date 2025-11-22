window.onload = function() {
    const button = document.getElementById("load");
    const result = document.getElementById("result");
    const searchfield = document.getElementById("searchfield");

    button.addEventListener('click', function() {
        const query = encodeURIComponent(searchfield.value.trim());

        let url = "superheroes.php";
        if (query !== "") {
            url += `?query=${query}`;
        }


        fetch (url)
        .then(response => response.text())
        .then(data => result.innerHTML = data);
        
    });
};