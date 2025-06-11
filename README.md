# Portfolio Content

This repository stores all content for the portfolio site, including blog posts, page copy, images, and structured data. Keeping content here allows the web app to stay lightweight and keeps all edits in version control.

## Structure

- **blogs/** – each post has its own folder with `index.md` and any local images
- **pages/** – Markdown or MDX files for static pages like About or Contact
- **images/** – shared images
  - **site/** – logos, favicons, backgrounds
  - **uploads/** – assets referenced from anywhere
- **data/** – JSON or YAML files powering dynamic sections
  - **projects/** – project data
  - **testimonials/** – testimonial entries
  - **navigation/** – menus and other navigation data
- **drafts/** – works in progress not yet published
- **i18n/** – optional localization folders per language

A CI workflow validates front matter and links. Your site can fetch these files directly from GitHub when building with Next.js or another static site generator.

## Editing guidelines

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed instructions on adding posts and running a local preview.

## Linting content

Run `npm run content:lint` to check that blog folders have the correct structure. The GitHub workflow runs the same command along with Markdown and link checks.

