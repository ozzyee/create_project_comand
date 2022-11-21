import {SlackPayload} from "../../../types/slackPayload";
import {SlackInputs} from "../../../types/SlackInputs";
import config from '../../../../config/config.json';
import {TRepoDetails} from "../types/repoValues";

export function getInputValues(input: SlackPayload): TRepoDetails {
    // get input values from slack payload
    const stringSplit = input.text.split(",");

    // get input values from slack payload and add to object
    const _values: any = {}
    stringSplit.forEach((string) => {
        const valueSplit = string.split(":");
        _values[valueSplit[0].trim()] = valueSplit[1].trim();
    })

    // cast the object to the correct type
    const values = _values as SlackInputs

    // if ether of the values are undefined, throw error
    if (!values.name || !values.type) {
        throw new Error("Missing required fields");
    }

    // it the type is wp (WordPress) then set the repo name with a prefix of 'wp'
    if (values.type === "wp") {
        values.repoName = `wp-${values.name}`;
    }

    // return the values
    return <TRepoDetails>{
        repoName: values.repoName ?? values.name,
        repoDescription: config.repoMsg,
        repoVisibility: config.reposIsPublic,
        owner: config.repoOwner,
        includeAllBranches: config.repoIncludeAllBranches,
        template: values.type,
        chanelName: values.name
    }
}