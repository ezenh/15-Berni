////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let key = '&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q='
// conticello+salon+de+fiestas
//DATOS A COMPLETAR:
let client = {
    name: 'Berny',
    lastname:'Galvez',
    whatsapp : {
        prefix: '+549',
        phone: 3812115909
    },
    bank: {
        name: 'MercadoPago',
        type: 'CVU',
        alias: 'BERNY.GALVEZ',
        account: '4530000800010062672642',
    },
    completeInfo () {
        presence_confirmation.href = `https://api.whatsapp.com/send?phone=${client.whatsapp.prefix}${client.whatsapp.phone}&text=Confirmo mi presencia, ${client.name}!!`
        music_recomendation.href = `https://api.whatsapp.com/send?phone=${client.whatsapp.prefix}${client.whatsapp.phone}&text=Te recomiendo este tema, ${client.name}!!`
        food_menu_ask.href = `https://api.whatsapp.com/send?phone=${client.whatsapp.prefix}${client.whatsapp.phone}&text=${client.name}, yo necesito modificar mi menú!!`

        client_bank_account.innerHTML = `
        <b>${client.bank.type}</b>: ${client.bank.account}`
        client_bank_alias.innerHTML = `
        <b>Alias</b>: ${client.bank.alias}`
    }
    }

let evento = {
    nombre: `Fiesta de ${client.nombre}`,
    tipo: 'Fiesta de 15',
    fecha: {
        dia: '24',
        mes: '05',
        año: '24',
        },
    salon: 'Isabella Eventos',
    pluscode: '5QHC+8G San Miguel de Tucumán, Tucumán',
    coordenadas: [-26.76849649806074, -65.21912511097865],
    direccion: '2106 Don Bosco',
    localidad: 'San Miguel de Tucuman',
    horarioEntrada: '22',
    horarioSalida: '05',
    dresscode: 'Gala, no ir de blanco, negro ni dorado',

    completeInfo () {
        salon_nombre.innerText = `${evento.salon}`
        salon_localidad.innerText = evento.localidad
        booking.innerText = `Agendar el día ${evento.fecha.dia}/${evento.fecha.mes} - ${evento.horarioEntrada} Hs.`
        booking.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Fiesta de 15, ${client.name} ${client.lastname}!!&details=⭐⭐⭐⭐⭐&dates=20240524T220000/20240525T050000&location=${evento.salon},${evento.direccion}, ${evento.localidad}`
        userPosition.href = `https://www.google.es/maps/place/Isabella+Eventos/@-26.8216892,-65.2312074,17z/data=!4m14!1m7!3m6!1s0x94225c5c8dd8ed6f:0x3a446889d2dbcacb!2sIsabella+Eventos!8m2!3d-26.821694!4d-65.2286271!16s%2Fg%2F11fnwh2bjj!3m5!1s0x94225c5c8dd8ed6f:0x3a446889d2dbcacb!8m2!3d-26.821694!4d-65.2286271!16s%2Fg%2F11fnwh2bjj?entry=ttu`
        dresscodeText.innerText = evento.dresscode
        map.src = `https://www.google.com/maps/embed/v1/place?${key}${evento.salon.split(" ").join("+")}`
        }
    }

client.completeInfo()
evento.completeInfo()
let getBrowser = function() {
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName  = navigator.appName;
    var fullVersion  = ''+parseFloat(navigator.appVersion); 
    var majorVersion = parseInt(navigator.appVersion,10);
    var nameOffset,verOffset,ix;
    
    // In Opera, the true version is after "OPR" or after "Version"
    if ((verOffset=nAgt.indexOf("OPR"))!=-1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset+4);
        if ((verOffset=nAgt.indexOf("Version"))!=-1) 
            fullVersion = nAgt.substring(verOffset+8);
    }
    // In MS Edge, the true version is after "Edg" in userAgent
    else if ((verOffset=nAgt.indexOf("Edg"))!=-1) {
        browserName = "Microsoft Edge";
        fullVersion = nAgt.substring(verOffset+4);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset+5);
    }
    // In Chrome, the true version is after "Chrome" 
    else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset+7);
    }
    // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset+7);
        if ((verOffset=nAgt.indexOf("Version"))!=-1) 
            fullVersion = nAgt.substring(verOffset+8);
        }
    // In Firefox, the true version is after "Firefox" 
    else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset+8);
        }
    // In most other browsers, "name/version" is at the end of userAgent 
    else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) {
        browserName = nAgt.substring(nameOffset,verOffset);
        fullVersion = nAgt.substring(verOffset+1);
        if (browserName.toLowerCase()==browserName.toUpperCase()) {
        browserName = navigator.appName;
        }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix=fullVersion.indexOf(";"))!=-1) fullVersion=fullVersion.substring(0,ix);
    if ((ix=fullVersion.indexOf(" "))!=-1) fullVersion=fullVersion.substring(0,ix);
    
    majorVersion = parseInt(''+fullVersion,10);
    if (isNaN(majorVersion)) {
        fullVersion  = ''+parseFloat(navigator.appVersion); 
        majorVersion = parseInt(navigator.appVersion,10);
        }
        return browserName
        
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let maxTop = sectionTransparent.offsetHeight
let maxBottom = sectionDresscode.getBoundingClientRect().bottom

// console.log(scroll_container.clientHeight)
console.log(sectionPhrase.backgroundSize)
//DETECION DE ARTICULO VISIBLE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
scroll_container.addEventListener('scroll', () => {
// --> Checkea la posicion TOP o BOTTOM de cada articulo
    Array.from(scroll_container.children).forEach(section => {
        reachToBottom = section.getBoundingClientRect().bottom
        reachToTop = section.getBoundingClientRect().top

        console.log(sectionThanks.getBoundingClientRect().top)
        console.log(sectionThanks.getBoundingClientRect().bottom)


        if (section.id != 'sectionThanks') {
            for(element of section.children) {
                element.style.opacity = '0'
                }
                }

// --> Presenta los H2 cada ve que la section esta en mitad de pantalla
        if ((reachToTop >= 0 && reachToBottom <= scroll_container.clientHeight) ||
            (reachToTop <= 0 && reachToBottom >= scroll_container.clientHeight)) {
            console.log(section.id)
            let sectionAfter = `#${section.id}::after`
            for(style of document.styleSheets[0].rules) {
                if( style.selectorText == '#sectionPhrase::after' ||
                    style.selectorText == '#sectionCountdown::after' ||
                    style.selectorText == '#sectionMap::after' ||
                    // style.selectorText == '#sectionThanks::after' ||
                    style.selectorText == '#sectionMenu::after' ||
                    style.selectorText == '#sectionMenu::after' ||
                    style.selectorText == '#sectionGift::after' ||
                    style.selectorText == '#sectionDresscode::after') {
                        if(browserName == 'Safari') {
                            style.style.cssText = `-webkit-backdrop-filter: blur(10px)`
                        }else{
                            style.style.cssText = `backdrop-filter: blur(10px)`
                        }}
                if(style.selectorText == sectionAfter) {
                    if(browserName == 'Safari') {
                        style.style.cssText = `-webkit-backdrop-filter: blur(0px)`
                    }else{
                        style.style.cssText = `backdrop-filter: blur(0px)`
                        }}
                    }
            for(element of section.children) {
                element.style.opacity = '1'
                element.style.transition = 'all .5s ease'
                if (element.className == 'section_title') {
                    element.style.animation = 'showTitle .5s linear'
                    element.style.opacity = '1'
                    // section.style.backgroundSize = '100%'
                    }}
            if(section.id == 'sectionPhrase' || section.id == 'sectionMap' || section.id == 'sectionMenu' || section.id == 'sectionDresscode' || section.id == 'sectionThanks') {
                section.style.backgroundSize = 'auto 107%'
            }else{
                section.style.backgroundSize = '100% auto'
                }
            }
        })
        // console.log(map.offsetTop)
    });

let browserName = getBrowser()

//COUNTDOWN DEL EVENTO///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
setInterval(function mostrarDiferenciaTiempo() {
// Formatea la fecha del evento
const fechaEventoJs = new Date("20" + evento.fecha.año, evento.fecha.mes - 1, evento.fecha.dia)

// Obtiene la fecha y hora actual
    const fechaActual = new Date();

// Calcula la diferencia en milisegundos
    var diferencia = fechaEventoJs - fechaActual;

// Convierte la diferencia a días, horas y minutos
    var diasFaltantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horasFaltantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutosFaltantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundosFaltantes = Math.floor((diferencia % (1000 * 60)) / 1000);

// Imprime el resultado solo cuando cambia el minuto
  // console.log("Días faltantes: " + diasFaltantes);
    days.innerText = diasFaltantes

  // console.log("Horas faltantes: " + horasFaltantes);
    hours.innerText = horasFaltantes

  // console.log("Minutos faltantes: " + minutosFaltantes);
    minutes.innerText = minutosFaltantes

  // console.log("Segundos faltantes: " + segundosFaltantes);
    seconds.innerText = segundosFaltantes

  // Actualiza el valor de los minutos
    mostrarDiferenciaTiempo.minutos = minutosFaltantes;
}, 1000);

//IDENTIFICAR POSICION DEL USUARIO Y LLEVAR AL EVENTO////////////////////////////////////////////////////////////////////////////////////////////
async function initMap() {
    // event_location.src = `<div style="max-width:100%;overflow:hidden;color:red;width:500px;height:500px;"><div id="gmap-canvas" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=conticello+salon+de+fiestas&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="googl-ehtml" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="inject-map-data">premium bootstrap themes</a><style>#gmap-canvas img{max-height:none;max-width:none!important;background:none!important;}</style></div>`
// --> Checkea que geolocalizacion este habilitada
    if ("geolocation" in navigator) {
    await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
        })

    navigator.geolocation.getCurrentPosition((position) => {
// --> Obtener las coordenadas de la ubicación actual
        latitud = position.coords.latitude;
        longitud = position.coords.longitude;

 // --> Construir el enlace de Google Maps con las coordenadas de ubicación
    // userPosition.href = `https://www.google.es/maps/dir/${latitud},${longitud}/${evento.salon}?entry=ttu`
        // userPosition.href = `https://www.google.es/maps/dir/${latitud},${longitud}/5QHC+8G San Miguel de Tucumán, Tucumán`
    })
    }else {
    // Manejar el caso en el que la geolocalización no está disponible en el dispositivo
    console.error("La geolocalización no está disponible en este dispositivo.");
    }
}      
initMap()

window.addEventListener('message', (event) => {
  if (event.data.action === 'hideSensitiveInfo') {
      // Ocultar o cambiar contenido sensible aquí
      const client_bank_account = document.getElementsByClassName('client_bank_account');
      if (client_bank_account) {
        Array.from(client_bank_account).forEach(element => {
          console.log(element)
          element.textContent = 'CBU/CVU/ALIAS'
      })
        console.log(client_bank_account)
      }
  }
});
