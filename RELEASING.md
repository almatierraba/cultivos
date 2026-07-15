# Publicación de versiones

Este sitio estático usa [Versionado Semántico](https://semver.org/lang/es/) sin incorporar un gestor de paquetes ni un paso de compilación.

## Política de versiones

- **PATCH** (`1.0.1`): correcciones de texto, enlaces, accesibilidad o fallos que no alteran la estructura pública.
- **MINOR** (`1.1.0`): contenido o funciones nuevas compatibles.
- **MAJOR** (`2.0.0`): rediseños o cambios incompatibles de navegación, estructura o publicación.

## Preparar una versión

1. Crear un issue que describa la solicitud y sus criterios de aceptación.
2. Actualizar `origin/main` y crear una rama específica desde ese punto.
3. Cambiar `VERSION` al nuevo número, sin prefijo `v`.
4. Mover las entradas correspondientes de `Unreleased` a una sección `## [X.Y.Z] - AAAA-MM-DD` en `CHANGELOG.md`.
5. Actualizar los enlaces de comparación al final del changelog.
6. Verificar los cambios, crear un Conventional Commit y subir la rama.
7. Abrir un PR que incluya `Closes #N`.
8. Fusionar únicamente después de una revisión independiente aprobatoria.

## Publicar la release

Después de fusionar el PR de versión:

```bash
git fetch --prune origin
git switch main
git pull --ff-only origin main
VERSION=$(tr -d '\r\n' < VERSION)
git tag -a "v${VERSION}" -m "Release v${VERSION}"
git push origin "v${VERSION}"
```

La etiqueta activa `.github/workflows/versioning.yml`. El workflow comprueba que:

- la etiqueta coincide con el contenido de `VERSION`;
- el valor cumple `MAJOR.MINOR.PATCH`;
- `CHANGELOG.md` contiene la sección de esa versión.

Si las comprobaciones pasan, GitHub crea automáticamente la Release. Este proceso no modifica el despliegue de GitHub Pages, que continúa publicándose desde `main`.
