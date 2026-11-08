# Academic English Learning Platform

This is a static, English-language learning platform for first-year students in
Economic, Commercial, and Management Sciences. It has no server-side code,
external APIs, account system, or package dependencies.

## What is included

- `index.html` — the course landing page, 14 searchable units, interactive
  activities, concise study summaries, and unit-specific applications.
- `course-content.js` — slide text extracted from the 14 unit presentations.
- `pdf-unit-content.js` — English source text from the supplied PDF, available
  as optional detailed reading with cover metadata removed and glossary tables
  hidden; click numbered references to reveal their glossary meanings.
- `unit-summaries.js` — a concise summary, expandable key ideas, and an
  answer-after-attempt understanding check for each of the 14 units.
- `activity-bank.js` and `activity-expansion.js` — ten fill-in, ten
  multiple-choice, and ten sentence-order questions for each unit.
- `pdfs/Unit_01.pdf` through `pdfs/Unit_14.pdf` — downloadable PDF files,
  linked from their matching lecture cards.

Progress completion marks are stored in the visitor's browser on that device.
There is no shared student account or central progress database.

## 1. Run it locally

1. Install Python 3 if it is not already available.
2. Open the project folder in VS Code.
3. Start the **Start Academic English site** task from the Run/Tasks menu, or
   open PowerShell in the project folder and run:

   ```powershell
   python -m http.server 8000
   ```

4. Visit <http://localhost:8000/> in a browser.
5. Test a unit's **STUDY UNIT** and **Application** buttons. Expand a key
   idea, submit the quick check, and test the optional detailed reading. Confirm
   that a numbered glossary reference opens its meaning and that the glossary
   table and source-page labels remain hidden. Also test search and category
   filters, exercise feedback, and progress marking.
6. Stop the local server with **Ctrl+C** in the terminal.

The site should be served over HTTP, not opened as a `file://` URL, so linked
JavaScript and browser storage behave as they will after deployment.

## 2. Prepare a public website repository

For a public deployment, use a dedicated repository containing the six
runtime HTML/JavaScript files, the complete `pdfs` folder, and optionally this
guide. Do not publish the whole working folder just to host the site: it also
contains unrelated projects, source presentations, and data files.

1. Create a new GitHub repository, for example
   `academic-english-learning-hub`.
2. Set its visibility to **Public** if anyone with the website link must be able
   to access it without signing in.
3. Copy the six runtime JavaScript/HTML files into the repository root and
   copy the complete `pdfs` folder beside `index.html`. Keep all 14 PDF
   filenames unchanged. Add this guide if you want to publish the deployment
   instructions too.

The published repository root should have this structure:

```text
index.html
course-content.js
pdf-unit-content.js
unit-summaries.js
activity-bank.js
activity-expansion.js
pdfs/
  Unit_01.pdf
  ...
  Unit_14.pdf
```
4. Before publishing, review the files and commit history for private student
   information, credentials, or other material that should not be public. The
   platform needs no secrets or environment variables.
5. Commit and push the files to the repository's `main` branch.

The 14 PowerPoint source files and the original course PDF are not runtime
dependencies. The 14 unit PDFs in `pdfs` are required for the lecture-card
download links.

## 3. Publish with GitHub Pages

1. Open the public repository on GitHub.
2. Select **Settings**, then **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder, then select **Save**.
5. Wait for the Pages deployment to finish. The Pages settings page will show
   the public URL, usually
   `https://<account>.github.io/<repository>/`.
6. Open that URL in a private/incognito browser window to verify public access.
   Confirm that the home page, unit summaries, expandable key ideas, quick
   checks, optional detailed reading, glossary popovers, and activities all
   load. Relative links are used so the site works under the repository path.
7. To publish an update, commit and push the changed website files to `main`.
   GitHub Pages will deploy the new version automatically.
8. After deployment, reload the site with **Ctrl+F5** to bypass cached files.
   In detailed reading, click a blue, underlined glossary reference; its
   definition should appear and scroll into view.

GitHub Pages serves static files over HTTPS. The platform does not need a
backend, database, build step, or dependency installation.

## 4. Alternative: Netlify

1. Create a Netlify account and choose **Add new site** / **Deploy manually**.
2. Upload the folder containing only the six runtime files, or connect the
   dedicated public GitHub repository.
3. Leave the build command empty and set the publish directory to the
   repository root.
4. Deploy and open the generated `https://…netlify.app` URL.
5. Test the same pages and interactions as in the local checklist, including
   downloading a PDF from several lecture cards.

## Updating source content

When a presentation changes, regenerate `course-content.js` from its slide
text and verify that the affected unit still renders all slides. When the PDF
source changes, regenerate `pdf-unit-content.js` and verify the page ranges
and wording against the source. Keep all runtime links relative, and redeploy
the generated files with the site.
