import express, { Router } from 'express';
import { SignUp } from '../controllers/signup';
import { signIn } from '../controllers/signin';
import { SignOut } from '../controllers/signout';

class AuthRoutes {
  private router: Router;
  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.post('/signup', SignUp.prototype.create);
    this.router.post('/signin', signIn.prototype.read);

    return this.router;
  }

  public signoutRoutes(): Router {
    this.router.get('/signout', SignOut.prototype.update);

    return this.router;
  }
}

export const authRoutes: AuthRoutes = new AuthRoutes();
