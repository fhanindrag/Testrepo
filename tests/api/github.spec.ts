import { test, expect } from '@playwright/test';
import testData from '../../data/testData.json';
import { GitHubService } from '../../services/GitHubService';

test('API_001: GitHub public repository API returns repository details',
    async ({ playwright }) => {

        const apiContext = await playwright.request.newContext({
            ignoreHTTPSErrors: true
        });

        try {
            const githubService = new GitHubService(apiContext);

            const response = await githubService.getRepository(
                testData.github.owner,
                testData.github.repository
            );

            expect(response.status()).toBe(200);

            const responseBody = await response.json();

            expect(responseBody.full_name).toBe(
                'microsoft/playwright'
            );
        } finally {
            await apiContext.dispose();
        }
    }
);