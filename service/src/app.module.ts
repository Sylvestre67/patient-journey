import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const mongo = {
  user: 'root',
  pwd: 'root',
  host: 'localhost',
  name: 'patient_journey',
};

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb://${mongo.user}:${mongo.pwd}@${mongo.host}/${mongo.name}?authSource=admin`,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
