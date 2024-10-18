let floatingpassword = document.getElementById('floatingPassword');
let imageChanger = document.getElementById('imageChanger');
let imageArray = [
    './images/normalkid.webp', './images/covereye.jpeg'
]


function changeImage(index) {
    imageChanger.style.opacity = 0;

    setTimeout(() => {
        imageChanger.src = imageArray[index];
        imageChanger.style.opacity = 1;
    }, 500); 
}

floatingpassword.addEventListener('focus', () => {
    changeImage(1);
});

floatingpassword.addEventListener('blur', () => {
    changeImage(0);
});

