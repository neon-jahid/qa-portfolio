import { Check, Database, RefreshCw, Wrench } from 'lucide-react';

/**
 * Interactive "Automation in Practice" panel.
 *
 *   tree  — flat list; `depth` drives the ├─ / └─ guides in treeGuides.js and
 *           `file` links a node to an entry in `files` by id
 *   files — `code` is highlighted by the tokenizer in CodeBlock.jsx
 *           (plain JS/JSON in, colours out)
 *   run   — simulated terminal output; `ok: false` renders in the fail colour
 */
export const automationSuite = {
    intro: 'A Playwright suite built on the Page Object Model: locators live in page classes, data lives in fixtures, and specs stay short enough to read as documentation.',
    structureLabel: 'Project Structure',
    focusLabel: 'Testing Focus',

    tree: [
        { name: 'tests', depth: 0, kind: 'folder' },
        { name: 'e2e', depth: 1, kind: 'folder' },
        { name: 'login.spec.js', depth: 2, kind: 'spec', file: 'spec' },
        { name: 'pages', depth: 2, kind: 'folder' },
        { name: 'login.page.js', depth: 3, kind: 'file', file: 'page' },
        { name: 'fixtures', depth: 1, kind: 'folder' },
        { name: 'test-data.json', depth: 2, kind: 'data', file: 'data' },
        { name: 'utils', depth: 1, kind: 'folder' },
    ],

    focus: [
        { label: 'Reusable POM Locators', icon: Wrench },
        { label: 'Clear & Assertive Tests', icon: Check },
        { label: 'Stable & Parameterized Data', icon: Database },
        { label: 'Regression & CI/CD Ready', icon: RefreshCw },
    ],

    files: [
        {
            id: 'spec',
            name: 'login.spec.js',
            path: 'tests/e2e/login.spec.js',
            lang: 'js',
            code: `import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import users from '../fixtures/test-data.json';

test.describe('Login', () => {
  test('valid credentials reach the dashboard', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.signIn(users.valid);

    await expect(page).toHaveURL(/dashboard/);
  });

  test('invalid password shows an error', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.signIn(users.invalid);

    await expect(login.error).toBeVisible();
  });
});`,
        },
        {
            id: 'page',
            name: 'login.page.js',
            path: 'tests/e2e/pages/login.page.js',
            lang: 'js',
            code: `export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByLabel('Email');
    this.password = page.getByLabel('Password');
    this.submit = page.getByRole('button', { name: 'Sign in' });
    this.error = page.getByRole('alert');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async signIn({ email, password }) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }
}`,
        },
        {
            id: 'data',
            name: 'test-data.json',
            path: 'tests/fixtures/test-data.json',
            lang: 'json',
            code: `{
  "valid": {
    "email": "qa@example.com",
    "password": "Pa55w0rd!"
  },
  "invalid": {
    "email": "qa@example.com",
    "password": "wrong-password"
  }
}`,
        },
    ],

    command: 'npx playwright test',
    run: [
        { text: 'valid credentials reach the dashboard', time: '1.4s', ok: true },
        { text: 'invalid password shows an error', time: '1.1s', ok: true },
        { text: 'empty fields block submission', time: '0.9s', ok: true },
        { text: 'session persists after reload', time: '1.5s', ok: true },
    ],
    summary: { passed: 4, failed: 0, time: '4.9s' },
};
