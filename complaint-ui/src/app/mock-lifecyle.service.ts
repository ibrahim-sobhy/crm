import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const lifecycles = [
            {"id":1,"name":"Billing"},
            {"id":2,"name":"Technical"},
            {"id":3,"name":"Provisioning"}
        ];
        return {lifecycles};
    }
}