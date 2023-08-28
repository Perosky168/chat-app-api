import express, { Express } from 'express';
import { ChatAppServer } from './setupServer';
import databaseConnention from './setupDatabase';
import { config } from './config';

class Application {
  public start(): void {
    this.loadConfig();
    databaseConnention();
    const app: Express = express();
    const server: ChatAppServer = new ChatAppServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
    config.cloudinaryConfig();
  }
}

const application: Application = new Application();
application.start();
