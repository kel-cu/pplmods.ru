document.addEventListener("DOMContentLoaded", function (event) {
    adaptionModile()
    getImagesAndAddClickURL();
    console.log(`Сайт загружен!`)
})

function adaptionModile() {
    if(window.innerWidth < 525) document.getElementsByTagName("body")[0].style = "padding-left: 0; padding-right: 0;"
    else document.getElementsByTagName("body")[0].style = "padding-left: 10pt; padding-right: 10pt;"
    if (window.innerWidth > 300) {
        document.getElementById("docs").innerHTML = `<i class="fa fa-info" aria-hidden="true"></i> О проекте`
    } else {
        document.getElementById("docs").innerHTML = `<i class="fa fa-info" aria-hidden="true"></i>`
    }
} 

var width = window.innerWidth
window.onresize = (event) => {
    if(width != window.innerWidth) {
        width = window.innerWidth;
        adaptionModile();
    }
}

function getImagesAndAddClickURL() {
    const images = document.getElementsByTagName("img");
    for (i = 0; i < images.length; i++) {
        const image = images[i];
        // console.log(image.parentElement.tagName)
        if(image.id!="icon"){
            let url = image.src;
            // console.log(url)
            // console.log(location)
            // console.log(image.src.startsWith(`${location}oi/`))
            if(image.parentElement.tagName.toLowerCase() != "a" && (image.src.startsWith("http://") || image.src.startsWith("https://"))){
                if (image.src.startsWith(`${location}oi/`)) url = url.replace(`${location}oi/`, `${location}`)
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                    image.setAttribute("onclick", `window.open("${url}", '_blank').focus()`)
                } else
                    image.setAttribute("ondblclick", `window.open("${url}", '_blank').focus()`)
            }
            if (image.style.maxHeight === "") image.style.maxHeight = `500pt`;
            if (image.style.maxWidth === "") image.style.maxWidth = `85%`;
            console.log(`Обработано изображение #${i + 1} ${url}`)
        }
    }
}