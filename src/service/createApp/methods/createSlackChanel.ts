import {LogLevel, WebClient} from "@slack/web-api";

export class slackChanelService {
    static async createSlackChanel(chanelName: string) {
        const web = new WebClient(process.env.SLACK_TOKEN, {
            logLevel: LogLevel.DEBUG
        });

        return await web.conversations.create({
            name: chanelName
        })
    }
}