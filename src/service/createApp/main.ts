import {ApiInput} from "../../types/apiInput";
import {getInputValues} from "./helper/getInputValues";
import {BuildRepoService} from "./methods/buildRepo";
import {LogLevel, WebClient} from "@slack/web-api";
import {slackChanelService} from "./methods/createSlackChanel";


export class CreateAppService {
    static async createApp({req, res}: ApiInput) {
        // get input values from slack payload and build up values for repo
        const repoValues = getInputValues(req.body);

        // create repo with input values
        // const response = await BuildRepoService.buildRepo(repoValues);

        // create a new atlassian jira project

        // create slack chanel with input values
        // const slackResponse = await slackChanelService.createSlackChanel(repoValues.chanelName);
    }
}