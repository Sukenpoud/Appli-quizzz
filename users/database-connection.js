import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

export class DatabaseConnection {

    static connection = null;

    static getConnection() {
        if (this.connection !== null) {
            return this.connection;
        }
        const db = new JsonDB(new Config('db-users.json', true, true, '/'));
        this.connection = db;
        return this.connection;
    }
}