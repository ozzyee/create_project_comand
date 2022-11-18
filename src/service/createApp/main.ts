import {ApiInput} from "../../types/apiInput";
import {getInputValues} from "./helper/getInputValues";
import {BuildRepoService} from "./methods/buildRepo";

export class CreateAppService {
    static async createApp({req, res}: ApiInput) {
        // get input values from slack payload and build up values for repo
        const repoValues = getInputValues(req.body);

        // create repo with input values
        const response = await BuildRepoService.buildRepo(repoValues);


    }
}