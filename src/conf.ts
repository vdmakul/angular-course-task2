import {environment} from './environments/environment';
import {InjectionToken} from '@angular/core';

export const GITHUB_URL: string = environment.githubUrl;
export const GITHUB_URL_TOKEN: InjectionToken<string> = new InjectionToken(GITHUB_URL);
