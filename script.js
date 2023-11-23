window.onscroll = () => {
    var header = document.getElementById("header");
    if (document.body.scrollTop > 98 || document.documentElement.scrollTop > 98) {
        header.style.background = "#80d0c7";
    } else {
        header.style.background = "linear-gradient(50deg, #13547a 0%, #80d0c7 100%)";
    }
};






const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");
const box5 = document.getElementById("box-5");


btn1.onclick = () => {
    for (const item of box1.classList) {
        if (item == "none") {
            box1.classList.remove(item);
        }
    }

    btn1.style.borderBottom = "1px solid red";
    btn2.style.borderBottom = "none";
    btn3.style.borderBottom = "none";
    btn4.style.borderBottom = "none";
    btn5.style.borderBottom = "none";

    box1.classList.add("animation");
    box1.classList.add("active");
    box2.classList.add("none");
    box3.classList.add("none");
    box4.classList.add("none");
    box5.classList.add("none");
}
btn2.onclick = () => {
    for (const item of box2.classList) {
        if (item == "none") {
            box2.classList.remove(item);
        }
    }
    btn2.style.borderBottom = "1px solid red";
    btn1.style.borderBottom = "none";
    btn3.style.borderBottom = "none";
    btn4.style.borderBottom = "none";
    btn5.style.borderBottom = "none";


    box2.classList.add("animation");
    box1.classList.add("none");
    box2.classList.add("active");
    box3.classList.add("none");
    box4.classList.add("none");
    box5.classList.add("none");
}
btn3.onclick = () => {
    for (const item of box3.classList) {
        if (item == "none") {
            box3.classList.remove(item);
        }
    }
    btn3.style.borderBottom = "1px solid red";
    btn2.style.borderBottom = "none";
    btn1.style.borderBottom = "none";
    btn4.style.borderBottom = "none";
    btn5.style.borderBottom = "none";


    box3.classList.add("animation");
    box1.classList.add("none");
    box3.classList.add("active");
    box2.classList.add("none");
    box4.classList.add("none");
    box5.classList.add("none");
}
btn4.onclick = () => {
    for (const item of box4.classList) {
        if (item == "none") {
            box4.classList.remove(item);
        }
    }
    btn4.style.borderBottom = "1px solid red";
    btn2.style.borderBottom = "1px solid transparent";
    btn3.style.borderBottom = "1px solid transparent";
    btn1.style.borderBottom = "1px solid transparent";
    btn5.style.borderBottom = "1px solid transparent";


    box4.classList.add("animation");
    box1.classList.add("none");
    box4.classList.add("active");
    box3.classList.add("none");
    box2.classList.add("none");
    box5.classList.add("none");
}
btn5.onclick = () => {
    for (const item of box5.classList) {
        if (item == "none") {
            box5.classList.remove(item);
        }
    }
    btn5.style.borderBottom = "1px solid red";
    btn2.style.borderBottom = "1px solid transparent";
    btn3.style.borderBottom = "1px solid transparent";
    btn4.style.borderBottom = "1px solid transparent";
    btn1.style.borderBottom = "1px solid transparent";

    box5.classList.add("animation");
    box1.classList.add("none");
    box5.classList.add("active");
    box3.classList.add("none");
    box4.classList.add("none");
    box2.classList.add("none");
}



