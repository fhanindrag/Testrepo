import { type APIRequestContext, type APIResponse } from '@playwright/test';
import { appConfig } from '../config/appConfig';

export class GitHubService {
  constructor(private readonly request: APIRequestContext) {}

  async getRepository(owner: string, repository: string): Promise<APIResponse> {
    return this.request.get(
      `${appConfig.githubApiBaseUrl}/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repository)}`,
      { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'saucedemo-playwright-ui-api-demo' } }
    );
  }
}
