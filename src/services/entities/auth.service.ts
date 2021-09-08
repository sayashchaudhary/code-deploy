import bcrypt from "bcrypt";
import { User } from "../../models/user.model";
import { IUser } from "../../interface/user/user";
import { ErrorHandler } from "../../handlers/error.handler";

export class AuthService {

  static getInstance(): AuthService {
    return new AuthService();
  }

  async signUp(newUser: IUser): Promise<any> {

    const user = await User.findOne({
      where: {
        email: newUser.email
      }
    })

    if (!user) {
      const saveUser = await User.create({
        ...newUser,
        password: await this.hashPassword(newUser.password)
      })
      return {
        id: saveUser.id,
        role: saveUser.role,
        name: saveUser.name,
        email: saveUser.email,
        phoneNumber: saveUser.phoneNumber
      }
    } else {
      throw new ErrorHandler('User already exist', 400)
    }
  }

  async login(email: string, password: string) {

    const user = await User.findOne({
      where: {
        email
      }
    });

    if (user) {
      const isPasswordCorrect = bcrypt.compare(password, user.password);

      if (isPasswordCorrect) {
        return {
          id: user.id,
          role: user.role,
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber
        };
      } else {
        throw new ErrorHandler('Incorrect Password!', 400);
      }
    } else {
      throw new ErrorHandler('User not found!', 400);
    }
  }

  private hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err: Error, salt: string) => {
        if (!err) {
          bcrypt.hash(password, salt, (err: Error, hash: string) => {
            if (err) reject(err);
            else resolve(hash);
          });
        }
      });
    });
  }
}

export const authService = AuthService.getInstance();
