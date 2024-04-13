import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { User2Module } from './user2/user2.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user2/entity/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule,
     User2Module,
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ROOTA',
      database: 'nestjs',
      entities: [UserEntity],
      synchronize: true,
    }),
     AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
