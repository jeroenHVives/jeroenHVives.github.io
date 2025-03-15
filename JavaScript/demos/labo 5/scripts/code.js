const setup = () => {
    let imgPhoto = document.getElementById('imgPhoto');
    imgPhoto.addEventListener('mouseover', () => {
        let imgPhoto = document.getElementById('imgPhoto');
        let txtText = document.getElementById('txtText');
        imgPhoto.src="./images/Lego%20roses%20and%20heart.jpg"
        txtText.innerHTML = "Lego rozen";
        if(imgPhoto.src === "./images/25-03-08.jpg"){
            imgPhoto.src="./images/Lego%20roses%20and%20heart.jpg"
            txtText.innerHTML = "Lego rozen";
        }
        else{
            imgPhoto.src="./images/25-03-08.jpg"
            txtText.innerHTML = "date ilona";
        }
    });
}
window.addEventListener("load", setup);