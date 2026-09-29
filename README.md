# Portfolio website: Md Al Sahariyar Hossain

A simple, fast portfolio built with plain HTML, CSS and JavaScript.
No installation, no build step. All your content lives in **one file**.

## Open it in VS Code

1. Open VS Code, then **File > Open Folder** and choose this `portfolio` folder.
2. Install the **Live Server** extension (VS Code will suggest it).
3. Right-click `index.html` and choose **Open with Live Server**.

The page reloads automatically every time you save.

## Edit your data (most common)

Open **`js/data.js`**. Change any text, then save.

| What you want to change | Where in `data.js` |
| --- | --- |
| Name, role, intro, numbers, floating tags | top of the file |
| About text | `about` |
| Skills | `skills` |
| Add or edit a project | `projects` (copy one block to add a new one) |
| Education, coursework, achievements | `education` |
| Email, phone, LinkedIn, GitHub | `contact` |

## Change photo or CV

- **Photo:** replace `assets/photo.jpg` with your new photo (keep the same name), or change `photo` in `data.js`.
- **CV:** put the new PDF in `assets/` and change `cv.file` and `cv.downloadName` in `data.js`.

## Change colors or design

Open `css/style.css`. The colors are at the top, inside `:root { ... }`:
`--bg` (background), `--accent`, `--cyan`, `--pink`, `--warm` (accent colors).

## Put it online for free

- **GitHub Pages:** push this folder to a GitHub repo, then Settings > Pages > Deploy from branch `main`.
- **Netlify:** drag and drop this folder at app.netlify.com/drop.

## Folder structure

```
portfolio/
├── index.html        page structure
├── css/style.css     design and colors
├── js/data.js        YOUR CONTENT (edit this)
├── js/main.js        builds the page from data.js
└── assets/           photo and CV PDF
```
