const CACHE_NAME = "static-cache-v1";

// Archivos a ser almacenados en caché
const CACHE_URLS = [
    "/", // raíz
    "index.html", // Agrega aquí los demás archivos estáticos
    "403.html",
    "404.html",

    "assets/css/styles.css",
    "assets/css/tabs2.css",
    "assets/css/splidejs.css",
    "assets/css/all.css",
    "assets/css/ejemplo.css",
    "assets/css/medias.css",

    "assets/js/main.js",
    "assets/js/arriba.js",
    "assets/js/all.css",
    "assets/js/autoslider.js",
    "assets/js/autoslider2.js",
    "assets/js/auslider3.js",
    "assets/js/denuncia.js",
    "assets/js/denunciaAn.js",
    "assets/js/modal.js",
    "assets/js/recaptcha.js",
    "assets/js/slide.js",
    "assets/js/slidejs.js",
    "assets/js/tooltip.js",
    "assets/RA_html/index_ra.html",

    "assets/img/logo_osfags.png",
    "assets/img/logo2.png",
    "assets/img/home-favicon.ico",

    "Contacto/index.html",
    "Bienvenida/index.html",
    "Comités-y-Órganos/index.html",
    "Comités-y-Órganos/Actualización.html",
    "Comités-y-Órganos/grupo.html",
    "Informe-Auditorías/index.html",
    "Informe-Auditorías/Actualización.html",
    "Programas-y-Servicios/index.html",
    "Programas-y-Servicios/Actualización.html",
    "Programas-y-Servicios/Opinión-Técnica.html",
    "Programas-y-Servicios/Programas.html",
    "Responsabilidades-Administrativas/index.html",
    "Responsabilidades-Administrativas/Actualización",
    "Quiénes-Somos/index.html",
    "Sitios-Interés/index.html",
    "Denuncia/index.html",
    "Denuncia/denunciaAnonima.html",
    "Sobre-el-OSFAGS/index.html",
    "Temas-Interés/index.html",
    "Sistema-Estatal-Fiscalizacion/index.html",
    "Transparencia/index.html",
    "Transparencia/avisos.html",
    "Transparencia/Disciplina-Financiera.html",
    "Transparencia/Otras-Obligaciones.html",
    "Transparencia/SEVAC.html",
    "Transparencia/I-Transparencia.html",
    "Transparencia/II-Transparencia.html",
    "Transparencia/III-Transparencia.html",
    "Transparencia/IV-Transparencia.html",
    "Transparencia/V-Transparencia.html",
    "Transparencia/VI-Transparencia.html",
    "Transparencia/VII-Transparencia.html",
    "Transparencia/VIII-Transparencia.html",
    "Transparencia/IX-Transparencia.html",
    "Transparencia/X-Transparencia.html",
    "Transparencia/XI-Transparencia.html",
    "Transparencia/XII-Transparencia.html",
    "Transparencia/XIII-Transparencia.html",
    "Transparencia/XIV-Transparencia.html",
    "Transparencia/XV-Transparencia.html",
    "Transparencia/XVI-Transparencia.html",
    "Transparencia/XVII-Transparencia.html",
    "Transparencia/XVIII-Transparencia.html",
    "Transparencia/XIX-Transparencia.html",
    "Transparencia/XX-Transparencia.html",
    "Transparencia/XXI-Transparencia.html",
    "Transparencia/XXII-Transparencia.html",
    "Transparencia/XXIII-Transparencia.html",
    "Transparencia/XXIV-Transparencia.html",
    "Transparencia/XXV-Transparencia.html",
    "Transparencia/XXVI-Transparencia.html",
    "Transparencia/XXVII-Transparencia.html",
    "Transparencia/XXVIII-Transparencia.html",
    "Transparencia/XXIX-Transparencia.html",
    "Transparencia/XXX-Transparencia.html",
    "Transparencia/XXXI-Transparencia.html",
    "Transparencia/XXXII-Transparencia.html",
    "Transparencia/XXXIII-Transparencia.html",
    "Transparencia/XXXIV-Transparencia.html",
    "Transparencia/XXXV-Transparencia.html",
    "Transparencia/XXXVI-Transparencia.html",
    "Transparencia/XXXVII-Transparencia.html",
    "Transparencia/XXXVIII-Transparencia.html",
    "Transparencia/XXXIX-Transparencia.html",
    "Transparencia/XL-Transparencia.html",
    "Transparencia/XLI-Transparencia.html",
    "Transparencia/XLII-Transparencia.html",
    "Transparencia/XLIII-Transparencia.html",
    "Transparencia/XLIV-Transparencia.html",
    "Transparencia/XLV-Transparencia.html",
    "Transparencia/XLVI-Transparencia.html",
    "Transparencia/XLVII-Transparencia.html",
    "Transparencia/XLVIII-Transparencia.html",
    "Transparencia/XLIX-Transparencia.html",

    "assets/img/BANERS/1.png",
    "assets/img/BANERS/2.png",
    "assets/img/BANERS/3.png",
    "assets/img/BANERS/4.png",
    "assets/img/BANERS/5.png",
    "assets/img/BANERS/6.png",
    "assets/img/BANERS/7.png",
    "assets/img/BANERS/8.png",
    "assets/img/BANERS/9.png",
    "assets/img/BANERS/10.png",
    "assets/img/BANERS/11.png",
    "assets/img/BANERS/12.png",
    "assets/img/BANERS/contacto75.png",

    "assets/img/person/ADC.jpeg",
    "assets/img/person/AL.jpg",
    "assets/img/person/AN.jpeg",
    "assets/img/person/AR.jpg",
    "assets/img/person/AS.jpg",
    "assets/img/person/ELL.jpg",
    "assets/img/person/FR.jpeg",
    "assets/img/person/HC.jpg",
    "assets/img/person/LR.jpg",
    "assets/img/person/MB.jpg",
    "assets/img/person/Neri.jpg",
    "assets/img/person/RS.jpeg",

    "assets/img/carrusel1/car1.1_Programa.png",
    "assets/img/carrusel1/car1.2_Transparencia.png",
    "assets/img/carrusel1/car1.3_Informe2021.jpg",
    "assets/img/carrusel1/car1.4_Marco.jpg",
    "assets/img/carrusel1/car1.5_Sistema.jpg",

    "assets/img/carrusel2/6-2.png",
    "assets/img/carrusel2/6-16.png",
    "assets/img/carrusel2/6-23.png",

    "assets/img/somos/auditor1.jpeg",
    "assets/img/somos/auditor2.jpeg",
    "assets/img/somos/auditor3.jpeg",
    "assets/img/somos/IMG_9653.JPG",
    "assets/img/somos/Mision.jpeg",
    "assets/img/somos/somostodos.jpeg",
    "assets/img/somos/valores.JPG",
    "assets/img/somos/vision.JPG",

    "assets/pdf/AVISO INTEGRAL CRA.pdf",
];

// Instalación del service worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(CACHE_URLS);
            })
    );
});

// Intercepta las solicitudes y busca en la caché primero
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Retorna la respuesta en caché si la encuentra
                if (cachedResponse) {
                    return cachedResponse;
                }

                // Si no está en caché, realiza la solicitud a la red
                return fetch(event.request)
                    .then((networkResponse) => {
                        // Si la solicitud se realiza con éxito, la almacenamos en caché
                        if (networkResponse.ok) {
                            return caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(event.request, networkResponse.clone());
                                    return networkResponse;
                                });
                        }
                        // Si la solicitud no se puede completar, retornamos un fallback
                        return networkResponse;
                    })
                    .catch((error) => {
                        // Si hay algún error en la red, retornamos un fallback
                        console.error('Fetch error:', error);
                        return new Response("Error de red, verifica tu conexión a internet.");
                    });
            })
    );
});