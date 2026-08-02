# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

## [2.0.0] - 2026-08-02

Refactor completo: el sitio pasa de ser una única página de preguntas frecuentes de Alma Tierra a un sitio multipágina con la identidad de Krepitar.

### Added

- Landing page con presentación de la marca y accesos a las cuatro secciones.
- Catálogo con los 11 productos Puffco, generado desde `assets/js/productos.js`, con galería de imágenes por producto.
- Secciones «Literatura» y «Contacto» como páginas en preparación.
- Selector de tema claro / sistema / oscuro, con la preferencia guardada y aplicada antes del primer pintado.
- Identidad visual de Krepitar según el manual de KOT Design Studio: paleta, degradado y tipografías de marca.
- `sitemap.xml`, `robots.txt`, favicons y metadatos Open Graph en todas las páginas.
- `.gitignore` para configuración local y material de origen.

### Changed

- Las preguntas frecuentes sobre acceso legal se movieron de la portada a `legal.html`, con el contenido intacto.
- El CSS y el JavaScript dejaron de estar embebidos en el HTML y pasaron a `assets/`.
- Las imágenes se sirven desde el repositorio [`almatierraba/krepitar-assets`](https://github.com/almatierraba/krepitar-assets) a través de jsDelivr, en lugar de versionarse acá.
- El punto de corte de la navegación pasó de 600 px a 860 px.

### Fixed

- Los títulos ya no van en versalitas: la `L` mayúscula de Stay Chill se confundía con una `Z`.
- Las eñes y las vocales acentuadas ya no desaparecen en los títulos. Graffiti City declara esos glifos pero los tiene vacíos, así que el navegador no hacía fallback y el carácter se perdía; ahora la fuente está acotada por `unicode-range`.

### Removed

- El logo de Alma Tierra en la portada, reemplazado por el de Krepitar. La agrupación sigue mencionada como origen del proyecto.

## [1.0.0] - 2026-07-15

### Added

- Se incorporó un sistema explícito de versionado, changelog y publicación de releases.
- Se agregó el rol «Responsable a cargo» a la información sobre personas vinculadas al programa.

[Unreleased]: https://github.com/almatierraba/cultivos/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/almatierraba/cultivos/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/almatierraba/cultivos/releases/tag/v1.0.0
