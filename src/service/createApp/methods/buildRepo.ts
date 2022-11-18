import {createRepo} from "../helper/createRepo";
import {TRepoDetails} from "../types/repoValues";

export class BuildRepoService {
    static async buildRepo(values: TRepoDetails) {
        return await createRepo(values);
    }
}