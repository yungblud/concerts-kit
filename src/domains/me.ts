import HttpRequest from "../HttpRequest";

export default class Me {
    getMe() {
        return new HttpRequest().request({
            method: "GET",
            url: '/me'
        })
    }
}