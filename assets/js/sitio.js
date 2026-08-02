/* Comportamiento común a todas las páginas: menú responsive y acordeón del FAQ.
   Sin dependencias y sin módulos ES, para que el sitio siga abriéndose
   directamente desde el archivo (file://) igual que antes del refactor. */
(function () {
  'use strict';

  /* ---------- Selector de tema ----------
     El valor ya quedó aplicado por el script inline del <head> (antes del
     primer pintado, para que no haya destello). Acá solo se sincroniza el
     control con lo guardado y se atienden los cambios. */
  var CLAVE_TEMA = 'krepitar-tema';
  var grupoTema = document.querySelector('.tema');

  function temaGuardado() {
    try {
      return localStorage.getItem(CLAVE_TEMA) || 'sistema';
    } catch (e) {
      return 'sistema';   /* modo privado o almacenamiento bloqueado */
    }
  }

  function aplicarTema(tema) {
    document.documentElement.dataset.tema = tema;
    try { localStorage.setItem(CLAVE_TEMA, tema); } catch (e) { /* sin persistencia */ }

    if (!grupoTema) { return; }
    Array.prototype.forEach.call(grupoTema.querySelectorAll('.tema-opcion'), function (opcion) {
      opcion.setAttribute('aria-checked', String(opcion.dataset.tema === tema));
      /* Solo la opción activa es tabulable: el grupo se recorre con flechas */
      opcion.tabIndex = opcion.dataset.tema === tema ? 0 : -1;
    });
  }

  if (grupoTema) {
    aplicarTema(temaGuardado());

    grupoTema.addEventListener('click', function (evento) {
      var opcion = evento.target.closest('.tema-opcion');
      if (opcion) { aplicarTema(opcion.dataset.tema); }
    });

    grupoTema.addEventListener('keydown', function (evento) {
      if (evento.key !== 'ArrowRight' && evento.key !== 'ArrowLeft') { return; }
      evento.preventDefault();
      var opciones = Array.prototype.slice.call(grupoTema.querySelectorAll('.tema-opcion'));
      var actual = opciones.findIndex(function (o) { return o.getAttribute('aria-checked') === 'true'; });
      var paso = evento.key === 'ArrowRight' ? 1 : -1;
      var siguiente = opciones[(actual + paso + opciones.length) % opciones.length];
      aplicarTema(siguiente.dataset.tema);
      siguiente.focus();
    });
  }

  /* ---------- Menú responsive ---------- */
  var boton = document.querySelector('.menu-boton');
  var menu = document.getElementById('menu-principal');

  if (boton && menu) {
    boton.addEventListener('click', function () {
      var abierto = boton.getAttribute('aria-expanded') === 'true';
      boton.setAttribute('aria-expanded', String(!abierto));
      menu.dataset.abierto = String(!abierto);
    });

    /* Al elegir un destino el menú se cierra solo */
    menu.addEventListener('click', function (evento) {
      if (evento.target.closest('a')) {
        boton.setAttribute('aria-expanded', 'false');
        menu.dataset.abierto = 'false';
      }
    });

    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape' && menu.dataset.abierto === 'true') {
        boton.setAttribute('aria-expanded', 'false');
        menu.dataset.abierto = 'false';
        boton.focus();
      }
    });
  }

  /* ---------- Acordeón del FAQ ----------
     Se mantiene el comportamiento del sitio anterior: abrir una respuesta
     cierra la que estuviera abierta. */
  var preguntas = document.querySelectorAll('.faq-pregunta');

  Array.prototype.forEach.call(preguntas, function (pregunta) {
    pregunta.addEventListener('click', function () {
      var faq = pregunta.closest('.faq');
      var estabaAbierto = faq.dataset.abierto === 'true';

      Array.prototype.forEach.call(document.querySelectorAll('.faq[data-abierto="true"]'), function (otro) {
        otro.dataset.abierto = 'false';
        otro.querySelector('.faq-pregunta').setAttribute('aria-expanded', 'false');
      });

      if (!estabaAbierto) {
        faq.dataset.abierto = 'true';
        pregunta.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
