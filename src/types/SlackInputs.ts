import config from '../../config/config.json';

export type SlackInputs = {
    name: string
    type: string,
    repoName?: string,
}