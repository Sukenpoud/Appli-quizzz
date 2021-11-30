import { UserDao } from './users.dao';
import { UserModel, UserWithToken } from './user.model';

const uuid = require('uuid')
const jwt = require('jsonwebtoken');

export class UsersService {
    userDAO: UserDao = new UserDao()

    getUserById(userID) {
        const user = this.userDAO.getByID(userID);
        if (!user) {
            throw new UnknownUserError('unknown book')
        }
        return this.userDAO.getByID(userID);
    }

    createUser(user: UserWithToken) {
        if (!this.checkUserToCreateIsValid(user)) {
            throw new Error('invalid user');
        }

        const userToCreate = {
            ...user,
            id: uuid.v4()
        }

        return this.userDAO.create(userToCreate);
    }

    login(email, password): UserWithToken {
        if (!email || !password) {
            throw new Error('all inputs are required');
        }

        const user = this.userDAO.getByEmail(email);
        if (user && user.password === password) {
            const token = jwt.sign(
                user,
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            )

            return {
                ...user,
                token
            }
        } else {
            throw new Error('all inputs are required');
        }
    }

    checkUserToCreateIsValid(user: UserModel) {
        return user && user.email && user.password && user.firstName && user.lastName
    }

}