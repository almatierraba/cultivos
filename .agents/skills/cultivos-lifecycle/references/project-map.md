# Project map: cultivos

## Purpose
A static, Spanish-language multi-page site for the Krepitar brand, describing its connection to Almatierra Cultivos, a Puffco product catalog, legal information about medicinal cannabis access in Argentina, and literature/contact sections.

## Architecture and entry points
- `index.html` is the landing page and primary entry point.
- `catalogo.html` hosts the product catalog. `assets/js/productos.js` holds product data; `assets/js/catalogo.js` renders and manages the catalog UI.
- `legal.html` contains legal information and the FAQ.
- `literatura.html` and `contacto.html` are described in `CHANGELOG.md` as pages in preparation.
- `assets/css/krepitar.css` provides shared styling.
- `assets/js/sitio.js` provides shared theme, responsive navigation, and FAQ behavior. Its source comments say the pages can be opened directly with `file://`.
- Product and brand images are hosted by the `almatierraba/krepitar-assets` repository through jsDelivr; Google Fonts is also loaded externally.
- `robots.txt`, `sitemap.xml`, and `CNAME` support site publication and discovery.

## Build, run, test, and lint
- Build: none configured; the repository describes itself as a static site with no build step.
- Run: open `index.html` in a browser; `assets/js/sitio.js` explicitly preserves direct `file://` use. No local server command is documented.
- Tests: no test suite or test command is configured.
- Lint/format: no linter or formatter configuration or command was found.
- The only automated validation is the version metadata check in `.github/workflows/versioning.yml`. It runs Python on GitHub Actions. Local execution was not possible in this session because the `python` command resolved to the Windows Store alias and reported that Python was not installed. Therefore, this check is UNVERIFIED locally.

## Configuration and secrets
- `VERSION` and `CHANGELOG.md` hold release metadata; `CNAME` is used for the published site domain.
- The release workflow sets the environment names `GH_TOKEN`, `GH_REPO`, and `TAG`; `GH_TOKEN` receives the GitHub-provided `github.token`. No repository secret names were found in the checked-in workflow.
- No application-specific environment configuration was found.

## Dependencies
- No package manager manifest or local application dependencies are configured.
- Runtime assets include Google Fonts and images/brand assets served externally from `almatierraba/krepitar-assets` via jsDelivr.

## CI/CD and release process
- `.github/workflows/versioning.yml` validates SemVer in `VERSION`, checks for the matching `CHANGELOG.md` heading, and verifies a `vX.Y.Z` tag matches `VERSION`.
- On pull requests, that workflow is configured to run when `VERSION`, `CHANGELOG.md`, `RELEASING.md`, or the workflow itself changes. It also runs for `v*` tags and manual dispatch.
- For tags, the workflow creates a GitHub Release after validation succeeds.
- `RELEASING.md` says GitHub Pages continues to publish from `main`; no Pages workflow is present in the checked-in workflow inventory.
- The documented release process updates version metadata in a PR, merges it, then creates and pushes an annotated `vX.Y.Z` tag to trigger the release workflow.

## Repository conventions and known gaps
- The site content and existing project documentation are primarily in Spanish. New maintainer instructions and this map are written in English as requested for repository artifacts.
- Recent history uses Conventional Commit-style subjects, including `feat(...)`, `chore(release): ...`, and `feat!: ...`; PR numbers appear in some merge-related subjects.
- No root `README.md`, `CODEOWNERS`, PR template, build/test/lint setup, or local run-server instructions were found.
- Exact browser support targets and deployment settings beyond the statement in `RELEASING.md` are UNVERIFIED.
