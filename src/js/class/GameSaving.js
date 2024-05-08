export default class GameSaving {
  constructor(data) {
    this.id = JSON.parse(data).id;
    this.created = JSON.parse(data).created;
    this.userInfo = new UserInfo(JSON.parse(data).userInfo);
  }
}

class UserInfo {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.level = data.level;
    this.points = data.points;
  }
}