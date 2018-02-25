export class AuthConfig {

    public globalHeaders: Array<Object>;

    constructor() {
        this.globalHeaders = [{'Content-Type': 'application/json'}];
    }
}
