/* Render del catálogo a partir de PRODUCTOS (assets/js/productos.js).
   Se genera en el cliente para no repetir 11 bloques de markup a mano:
   el contenido vive en un solo lugar y la página no se desincroniza. */
(function () {
  'use strict';

  var contenedor = document.getElementById('catalogo');
  var indice = document.getElementById('indice');
  if (!contenedor || typeof PRODUCTOS === 'undefined') { return; }

  function elemento(tag, clase, texto) {
    var el = document.createElement(tag);
    if (clase) { el.className = clase; }
    if (texto) { el.textContent = texto; }
    return el;
  }

  PRODUCTOS.forEach(function (producto, posicion) {
    /* Índice superior */
    var enlace = elemento('a', null, producto.nombre);
    enlace.href = '#' + producto.slug;
    indice.appendChild(enlace);

    var articulo = elemento('article', 'producto');
    articulo.id = producto.slug;

    /* --- Media: imagen principal + miniaturas --- */
    var media = elemento('div', 'producto-media');
    var figura = elemento('figure', 'producto-figura');
    var principal = new Image();
    principal.src = urlImagen(producto.imagenes[0]);
    principal.alt = producto.nombre;
    /* La primera imagen de la página se carga de inmediato; el resto, al acercarse */
    principal.loading = posicion === 0 ? 'eager' : 'lazy';
    principal.decoding = 'async';
    figura.appendChild(principal);
    media.appendChild(figura);

    if (producto.imagenes.length > 1) {
      var tira = elemento('div', 'miniaturas');
      producto.imagenes.forEach(function (ruta, i) {
        var boton = elemento('button', 'miniatura');
        boton.type = 'button';
        boton.setAttribute('aria-label', 'Ver imagen ' + (i + 1) + ' de ' + producto.nombre);
        boton.setAttribute('aria-current', String(i === 0));

        var mini = new Image();
        mini.src = urlImagen(ruta);
        mini.alt = '';
        mini.loading = 'lazy';
        mini.decoding = 'async';
        boton.appendChild(mini);

        boton.addEventListener('click', function () {
          principal.src = urlImagen(ruta);
          Array.prototype.forEach.call(tira.children, function (otro) {
            otro.setAttribute('aria-current', 'false');
          });
          boton.setAttribute('aria-current', 'true');
        });

        tira.appendChild(boton);
      });
      media.appendChild(tira);
    }

    /* --- Texto --- */
    var cuerpo = elemento('div', 'producto-cuerpo');
    cuerpo.appendChild(elemento('h2', 'producto-nombre', producto.nombre));

    if (producto.tagline) {
      cuerpo.appendChild(elemento('p', 'producto-tagline', producto.tagline));
    }
    cuerpo.appendChild(elemento('p', 'producto-desc', producto.descripcion));

    if (producto.colores && producto.colores.length) {
      var datos = elemento('div', 'producto-datos');
      producto.colores.forEach(function (color) {
        datos.appendChild(elemento('span', 'chip', color));
      });
      cuerpo.appendChild(datos);
    }

    if (producto.incluye && producto.incluye.length) {
      var incluye = elemento('div', 'producto-incluye');
      incluye.appendChild(elemento('strong', null, 'Incluye'));
      var lista = elemento('ul');
      producto.incluye.forEach(function (item) {
        lista.appendChild(elemento('li', null, item));
      });
      incluye.appendChild(lista);
      cuerpo.appendChild(incluye);
    }

    if (producto.notas && producto.notas.length) {
      var notas = elemento('div', 'producto-notas');
      producto.notas.forEach(function (nota) {
        notas.appendChild(elemento('p', null, '* ' + nota));
      });
      cuerpo.appendChild(notas);
    }

    articulo.appendChild(media);
    articulo.appendChild(cuerpo);
    contenedor.appendChild(articulo);
  });
})();
