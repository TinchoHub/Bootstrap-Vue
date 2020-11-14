// Items del Navbar
const navLinks = [{
    class: "nav-link",
    href: "#Inicio",
    text: "Inicio"
}, {
    class: "nav-link",
    href: "#Productos",
    text: "Productos"
}, {
    class: "nav-link",
    href: "#Servicios",
    text: "Servicios"
}, {
    class: "nav-link",
    href: "#Contacto",
    text: "Contacto"
}];
var navLinksLi = "";

navLinks.forEach(item => {
    navLinksLi += `<li class="nav-item">
                  <a class=${item.class} href=${item.href}>${item.text}</a>
                 </li>`;
});
document.getElementById("navBar").innerHTML = navLinksLi;

// Carrousel
const carouselItems = [
    {
        divClass: "carousel-item active",
        imgClass: "caroImg",
        src: "img/novedad1.jpg",
        alt: "Nuevo Modelo 1",
        h3: "Rendimiento",
        p: "Giant Propel Advanced Pro"
    }, {
        divClass: "carousel-item",
        imgClass: "caroImg",
        src: "img/novedad2.jpg",
        alt: "Nuevo Modelo 2",
        h3: "E-Bike",
        p: "Giant Fathom E+ Junior"
    }, {
        divClass: "carousel-item",
        imgClass: "caroImg",
        src: "img/novedad3.jpg",
        alt: "Nuevo Modelo 3",
        h3: "Plegable",
        p: "Giant Expressway 2 2020"
    }
];
var carouselItemsList = "";
carouselItems.forEach(item => {
    carouselItemsList += `<div class="${item.divClass}">
                            <img class=${item.imgClass} src=${item.src} alt=${item.alt}>
                            <div class="carousel-caption">
                             <h3>${item.h3}</h3>
                             <p>${item.p}</p>
                            </div>
                           </div>`;
});
document.getElementById("carouselInner").innerHTML = carouselItemsList;

// Cards
const cardItems = [{
    imgSrc: "img/item1-1.jpg",
    alt: "Card image",
    h4: "Giant Stance",
    p: "Cuadro ALUXX SL, horquilla RockShox Recon 130mm, amortiguador RockShox Monarch R, transmisión SRAM SX Eagle",
}, {
    imgSrc: "img/item2-1.jpg",
    alt: "Card image",
    h4: "Giant Reign E+ 0 Pro",
    p: "Motor Giant powered by Yamaha, batería Giant 500, suspensiones FOX Kashima, transmisión SRAM X01 AXS"
}, {
    imgSrc: "img/item3-1.jpg",
    alt: "Card image",
    h4: "Giant Stance E+ 0 Pro",
    p: "Cuadro ALUXX, RockShox 35 Gold RL DebonAir y Fox Float DPS. Motor Giant, transmisión Sram SX Eagle de 12v"
}, {
    imgSrc: "img/item1-1.jpg",
    alt: "Card image",
    h4: "Giant Stance",
    p: ""
}, {
    imgSrc: "img/item4-1.jpg",
    alt: "Card image",
    h4: "Giant TCX Advanced Pro 2",
    p: "Cuadro ALUXX, tija de sillín D-Fuse, manillar Contact XR, horquilla de carbono Advanced (T-700)"
}, {
    imgSrc: "img/item1-1.jpg",
    alt: "Card image",
    h4: "Giant Stance",
    p: ""
}, {
    imgSrc: "img/item1-1.jpg",
    alt: "Card image",
    h4: "Giant Stance",
    p: ""
}, {
    imgSrc: "img/item1-1.jpg",
    alt: "Card image",
    h4: "Giant Stance",
    p: ""
}, {
    imgSrc: "img/item1-1.jpg",
    alt: "Card image",
    h4: "Giant Stance",
    p: ""
}, {
    imgSrc: "img/item1-1.jpg",
    alt: "Card image",
    h4: "Giant Stance",
    p: ""
}];

var cardItemList = `<div class="row">`;
var addRow = 0;
cardItems.forEach(item => {
    if (((addRow % 4) == 0) && (addRow != 0)) {
        cardItemList += `</div> <div class="row">`
    }
    cardItemList +=`<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="card">
                                <img class="card-img-top" src=${item.imgSrc} alt=${item.alt}>
                                    <div class="card-body">
                                        <h4 class="card-title">${item.h4}</h4>
                                        <p class="card-text">${item.p}</p>
                                        <button class="btn btn-primary">Más info</button>
                                    </div>
                            </div>
                    </div>`;
    addRow++;
});
cardItemList += `</div>`;
document.getElementById("cardList").innerHTML = cardItemList;

// Header
const headerData = {
    clases : "jumbotron m-0 text-center",
    h1Clases : "font-weight-bolder",
    h1Texto : "Bikes4U"
}
var miHeaderContenido = `<h1 class="${headerData.h1Clases}">${headerData.h1Texto}</h1>`;
document.getElementById("miHeader").innerHTML = miHeaderContenido;
var arrClases = headerData.clases.split(" ");
for (let i=0; i<arrClases.length; i++) {
    document.getElementById("miHeader").classList.add(arrClases[i]);
}

//Footer
const iconRedes = [{
    href : "https://www.twitter.com",
    target : "_blank",
    clase : "fa-twitter",
},{
    href : "https://www.facebook.com",
    target : "_blank",
    clase : "fa-facebook",
},{
    href : "https://www.instagram.com",
    target : "_blank",
    clase : "fa-instagram",
},{
    href : "https://www.pinterest.com",
    target : "_blank",
    clase : "fa-pinterest",
},{
    href : "https://linked.in",
    target : "_blank",
    clase : "fa-linkedin",
},{
    href : "https://www.github.com",
    target : "_blank",
    clase : "fa-github",
}];
var contFooter = `<ul class="list-group list-group-horizontal">`;
iconRedes.forEach(item => {
    contFooter += `<li class="list-group-item mx-auto border-0"><a href=${item.href} target=${item.target}><i class="fab ${item.clase}"></i></a></li>`
});
contFooter += "</ul> <p>© 2020 Todos los derechos reservados</p>"
document.getElementById("miFooter").innerHTML = contFooter;

//Table
const datosTabla = [{
    tituloColumna1 : "Nombre",
    tituloColumna2 : "Dirección",
    tituloColumna3 : "Teléfono",
    tituloColumna4 : "Sitio Web"
},{
    nombre : "Taller 1",
    direccion : "Dirección 1",
    telefono : "Teléfono 1",
    sitioWeb : "Link Sitio Web"
},{
    nombre : "Taller 1",
    direccion : "Direccion 1",
    telefono : "Telefono 1",
    sitioWeb : "Link Sitio Web"
},{
    nombre : "Taller 1",
    direccion : "Direccion 1",
    telefono : "Telefono 1",
    sitioWeb : "Link Sitio Web"
},{
    nombre : "Taller 1",
    direccion : "Direccion 1",
    telefono : "Telefono 1",
    sitioWeb : "Link Sitio Web"
},{
    nombre : "Taller 1",
    direccion : "Direccion 1",
    telefono : "Telefono 1",
    sitioWeb : "Link Sitio Web"
},{
    nombre : "Taller 1",
    direccion : "Direccion 1",
    telefono : "Telefono 1",
    sitioWeb : "Link Sitio Web"
}];
var contenidoTabla =`<thead class="thead-dark">
                        <tr>
                            <th> ${datosTabla[0].tituloColumna1} </th>
                            <th> ${datosTabla[0].tituloColumna2} </th>
                            <th> ${datosTabla[0].tituloColumna3} </th>
                            <th> ${datosTabla[0].tituloColumna4} </th>
                        </tr>
                    </thead>
                    <tbody>`;
for (let i=1; i<datosTabla.length; i++){
    contenidoTabla += `<tr>
                           <td> ${datosTabla[i].nombre} </td>
                           <td> ${datosTabla[i].direccion} </td>
                           <td> ${datosTabla[i].telefono} </td> 
                           <td> ${datosTabla[i].sitioWeb} </td> 
                        </tr>`
}
contenidoTabla += `</tbody>`;
document.getElementById("miTabla").innerHTML = contenidoTabla;

