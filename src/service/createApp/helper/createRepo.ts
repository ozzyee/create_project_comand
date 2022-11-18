import config from '../../../../config/config.json';
import {TRepoDetails} from "../types/repoValues";
import "isomorphic-fetch"

export const createRepo = async ({
    repoName,
    repoDescription,
    repoVisibility,
    owner,
    includeAllBranches,
    template
}: TRepoDetails) => {
    const apiBaseUrl = process.env.GITHUB_API_URL;
    const token = process.env.GITHUB_TOKEN;
    const _template = config.templates[template].location;
    const url = `${apiBaseUrl}/${_template}/generate`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            "owner": owner,
            "name": repoName,
            "description": repoDescription,
            "private": repoVisibility,
            "include_all_branches": includeAllBranches
        })
    })
    console.log(response.status);

    if (response.status === 422) {
        return {
            msg: "Repo already exists",
            status: 422
        };
    }

    if (response.status === 201) {
        return {
            msg: "Repo created",
            statusCode: 201
        }
    }
}

