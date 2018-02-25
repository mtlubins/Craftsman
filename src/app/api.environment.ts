export class Environment {
  private _apiPath: string;
  get apiPath(): string {
    return this._apiPath;
  }
  set apiPath(theApiPath: string) {
    this._apiPath = theApiPath;
  }
}
