// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
const setup = () => {
    loadMovies();
    loadLikedMovies();
}

const loadLikedMovies = () => {
    const storage = localStorage.getItem("jeroenHVives.github.likedMovies")
    if(storage !== null){
        let likedMovies = JSON.parse(storage).ids;
        for(let i = 0; i < likedMovies.length ; i++){
            let movie = document.getElementById("movie_" + likedMovies[i]);
            like_movie(movie, true);
        }
    }
}

const addToLocalStorage = (id) => {
    const storage = localStorage.getItem("jeroenHVives.github.likedMovies");
    let likedMovies;
    if(storage !== null) {
       likedMovies = JSON.parse(storage).ids;
        likedMovies.push(id);
        likedMovies = {ids: likedMovies}
    }
    else{
        likedMovies ={ids: [id]};
    }
    localStorage.setItem("jeroenHVives.github.likedMovies", JSON.stringify(likedMovies));
}

const removeFromLocalStorage = (id) => {
    const storage = localStorage.getItem("jeroenHVives.github.likedMovies");
    let likedMovies;
    if(storage !== null) {
        likedMovies = JSON.parse(storage).ids;
        const index = likedMovies.indexOf(parseInt(id));
        likedMovies.splice(index, 1);
        likedMovies = {ids: likedMovies}
        localStorage.setItem("jeroenHVives.github.likedMovies", JSON.stringify(likedMovies));
    }
}

const loadMovies = () => {
    let movieList = document.getElementById('movielist');
    for(let i = 0; i < movies.length; i++){
        let movie = movies[i];
        let movieElem = createElement('div', "movie");
        movieElem.id = "movie_" + movie.id;
        let title = createElement("p", "title", movie.title);
        let buttons = createElement("div", "buttons")
        let like_button = createElement("i", "fas fa-thumbs-up");
        like_button.addEventListener("click", clicked_like);
        let dislike_button = createElement("i", "fas fa-thumbs-down");
        dislike_button.addEventListener("click", clicked_dislike);
        let image = createImage(movie.imageUrl, "image");
        let text = createElement("p", "description", movie.description);

        buttons.appendChild(like_button);
        buttons.appendChild(dislike_button);
        movieElem.appendChild(buttons)
        movieElem.appendChild(title);
        movieElem.appendChild(image);
        movieElem.appendChild(text);
        movieList.appendChild(movieElem);
    }
}

const clicked_dislike = (e) => {
    if(e.target.style.color === "red"){
        e.target.style.color = "";
        counter_change("dislike", -1)

    }
    else{
        const buttons = e.target.parentElement;
        const like_btn = buttons.querySelector("i:first-child");
        if(like_btn.style.color === ""){
            e.target.style.color = "red";
            counter_change("dislike", 1)
        }
    }
}

const clicked_like = (e) => {
    element = e.target;
    const movie = element.parentElement.parentElement;
    like_movie(movie, false);
}

const like_movie = (movie, load_storage) => {
    const movie_details = movie.children;
    const e = movie_details[0].children[0];
    const titel = movie_details.item(1);
    const id = getMovieId(titel.innerHTML);
    if (e.style.color === "green") {
        e.style.color = "";
        const liked_movie = document.querySelector("#Likedmovie_" + id);
        liked_movie.remove();
        likebar_invisible_if_needed()
        counter_change("like", -1)
        if(!load_storage){
            removeFromLocalStorage(id)
        }
    } else {
        const buttons = e.parentElement;
        const dislike_btn = buttons.querySelector("i:last-child");
        if (dislike_btn.style.color === "") {
            e.style.color = "green";
            const likebar = document.getElementById("likebar")
            likebar.style.visibility = "";

            const likebarmovies = document.getElementById("likebarmovies");
            const liked_movie = createElement("div");
            liked_movie.id = "Likedmovie_" + id;
            const txt = createElement("p", "", titel.innerHTML);
            const icon = createElement("i", "fas fa-trash");
            icon.addEventListener("click", clicked_trash);
            liked_movie.appendChild(txt);
            liked_movie.appendChild(icon);
            likebarmovies.appendChild(liked_movie);
            counter_change("like", 1)
            if(!load_storage){
                addToLocalStorage(id);
            }
        }

    }
}

const clicked_trash = (e) => {
    const id = e.target.parentElement.id
    e.target.parentElement.remove();
    likebar_invisible_if_needed();
    let movie_id = id.slice(5);
    let movie_like = document.querySelector("#" + movie_id + " .fa-thumbs-up");
    movie_like.style.color = "";
    counter_change("like", -1)
    let storage_id = movie_id.slice(6)
    removeFromLocalStorage(storage_id);
}

counter_change = (id, amount) => {
    like_counter = document.getElementById(id);
    like_counter.innerHTML = parseInt(like_counter.innerHTML) + amount;
}

const likebar_invisible_if_needed = () => {
    let liked_movies = document.getElementById("likebarmovies");
    if (liked_movies.innerHTML === "") {
        liked_movies.parentElement.style.visibility = "hidden";
    }
}

const getMovieId = (titel) => {
    for(let i = 0; i < movies.length; i++){
        if(movies[i].title === titel){
            return movies[i].id;
        }
    }
}

const createImage = (src, className="", alt = "een film") => {
    const img = createElement("img", className);
    img.src = src;
    img.alt = alt;
    return img;
}

const createElement = (type, className="", tekst="") => {
    let e = document.createElement(type);
    let txt = document.createTextNode(tekst);
    e.className = className;
    e.appendChild(txt);
    return e;
}

window.addEventListener("load", setup)