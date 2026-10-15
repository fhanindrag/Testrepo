# SauceDemo Playwright UI + GitHub API Automation

A beginner-friendly TypeScript mini project with **2 SauceDemo UI tests** and **1 public GitHub REST API test**. Uses Playwright Test, Page Object Model, service layer, JSON test data, HTML/JUnit reports and GitHub Actions.

> SauceDemo is the UI under test. GitHub REST API is a separate public API example; this project does **not** claim that SauceDemo has a public REST API.

## Setup (Windows CMD / VS Code terminal)

```cmd
npm install
npx playwright install chromium
```

## Commands

```cmd
npm test
npm run test:ui
npm run test:api
npm run test:headed
npm run test:chromium
npx playwright test tests/ui/login.spec.ts --headed
npx playwright test tests/ui/cart.spec.ts --headed
npx playwright test tests/api/github.spec.ts
npm run typecheck
npm run report
```

## What each layer does

- `tests/ui`: the 2 UI scenarios and assertions.
- `tests/api`: the GitHub API scenario and assertions.
- `pages`: Page Object Model methods for login and cart interactions.
- `services`: reusable HTTP client for GitHub REST API.
- `data/testData.json`: login credentials, product name, API repository name.
- `config/appConfig.ts`: configurable application/API base URLs.
- `playwright.config.ts`: runner, browser, retries, HTML/JUnit reporting, screenshot/video/trace on failure.
- `.github/workflows/playwright.yml`: CI on pushes and pull requests to `main`, plus manual trigger.

## GitHub CI setup

1. Create a new GitHub repository.
2. Push the project to its `main` branch.
3. Go to GitHub > Actions > Playwright UI and API Tests to see the workflow.
4. On each push or pull request to `main`, GitHub installs dependencies, installs Chromium, typechecks and runs all three tests.
5. Open the workflow run's **Artifacts** to download the HTML report and test results.

## Notes

- Demo credentials `standard_user` / `secret_sauce` are stored in `data/testData.json` because they are public demo credentials. For real environments, use GitHub Actions Secrets and environment variables instead.
- API requests use Playwright's built-in `request` fixture; no browser is needed for the API test.
- GitHub's public API is rate limited. If a `403` occurs due to rate limiting, rerun later or use an authenticated token configured securely.
- If UI markup changes, update selectors in `pages/` only.
- GitHub Actions currently uses `npm install` because this generated sample does not include a lockfile. Run `npm install` locally and commit the generated `package-lock.json`; then you can switch CI to `npm ci` for reproducible installs.
