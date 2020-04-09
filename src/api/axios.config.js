import axios from 'axios'

class HttpRequest {

    requestConfig() {
        this.instance = axios.create({
            baseURL: '',
            timeout: 1000,
            headers: {
                'X-Custom-Header': 'foobar',
                'Content-Type': 'application/json'
            }
        });

        this.requestInfo = {}
    }

    dataToParams(Obj) {
        console.log(Obj);
        if (Obj.method === 'get') {
            this.requestInfo.url = Obj.url;
            this.requestInfo.method = Obj.method;
            this.requestInfo.params = Obj.data
        } else if (Obj.method === 'post') {
            this.requestInfo.url = Obj.url;
            this.requestInfo.method = Obj.method;
            this.requestInfo.data = Obj.data
        }
    }

    request(options) {
        this.requestConfig();
        this.dataToParams(options);
        return this.instance(this.requestInfo)
    }

}


export default new HttpRequest();