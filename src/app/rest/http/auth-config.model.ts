export class AuthConfig {

    globalHeaders: Array<Object>;

    constructor(config?) {
        this.globalHeaders = config.globalHeaders || [{'Content-Type': 'application/json'}];
    }
}