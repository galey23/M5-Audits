# Ward Audit Hub

A dependency-free static audit website designed for GitHub Pages. All calculations happen in the browser. The site does not send audit data to GitHub or to a backend.

## Included audit pages

- `id-bracelet.html` - ID Bracelet Observation Tool
- `vip.html` - Visual Infusion Phlebitis (VIP) Observation Tool
- `nr.html` - Nursing Report (NR) Observation Tool
- `rx-chart.html` - Patient Rx Chart Observation Tool

## What it does

- one page per audit type
- large Yes/No/N/A-style controls suitable for tablet use
- live compliance calculation
- criterion-level compliance against a configurable target (default 95%)
- case-level compliance
- edit/delete cases before export
- browser local-storage autosave
- CSV export containing:
  - audit summary
  - criterion-level results
  - raw case-level responses
- print-friendly results page
- no external libraries, analytics or network calls

## Important information-governance design

The form asks only for an anonymised case / bed reference. Do **not** enter patient names, ID numbers, hospital numbers, dates of birth or other patient-identifiable information. Draft data is stored in the browser's local storage until the audit is reset. This is convenient, but on shared computers the user should export the CSV and reset the audit after use.

Before clinical deployment, obtain any local IT / information-governance approval required by your organisation.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `ward-audits`.
2. Upload all files from this folder to the repository root.
3. In GitHub, open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. GitHub will show the Pages address when deployment is ready.

## Local test

You can open `index.html` directly in a modern browser. For the closest match to GitHub Pages, run any simple local static web server from this directory.

## Changing an audit

Audit definitions are near the top of `app.js` inside the `AUDITS` object. Each criterion uses:

```js
f("uniqueId", "Criterion label", ["Yes", "No", "N/A"], "Yes")
```

The last value is the compliant/pass value. For a context-only question that should be exported but not scored:

```js
f("uniqueId", "Context question", ["Yes", "No"], null, false)
```
