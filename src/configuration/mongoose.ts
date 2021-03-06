import * as Mongoose from 'mongoose';
import CONFIG from './../configuration';

export default class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    static connect(): Mongoose.Collection {
        const options = { promiseLibrary: global.Promise };
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once('open', () => {
            console.log('Conectado ao mongodb.');
        });
        this.mongooseInstance = Mongoose.connect(CONFIG.MONGO_URL, options);
        return this.mongooseInstance;
    }
}
