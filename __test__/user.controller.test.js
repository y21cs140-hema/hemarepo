import bcrypt from 'bcryptjs';
import { createuser, findUserByEmail } from '../models/user.model.js';
import * as userController from '../controllers/user.controller.js'; // Import userController

jest.mock('bcryptjs');
jest.mock('../models/user.model.js', () => ({
    findUserByEmail: jest.fn(),
    createuser: jest.fn()
}));

describe('User Controller', () => {
    let req, res;
    beforeEach(() => {
        req = {
            body: {
                username: 'john doe',
                password: 'testpass',
                email: 'pass@gmail.com',
                gender: 'male'
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should register a new user successfully', async () => {
        findUserByEmail.mockResolvedValue(null); // Use mocked function directly
        bcrypt.hash.mockResolvedValue('hashedPassword');
        createuser.mockResolvedValue(1); // Use mocked function directly
        await userController.registeruser(req, res);
        expect(bcrypt.hash).toHaveBeenCalledWith('testpass', 10);
        expect(createuser).toHaveBeenCalledWith('john doe', 'hashedPassword', 'pass@gmail.com', 'male');
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            status: 'success',
            message: 'user registers successfully',
            userId: 1
        });
    });
    it('should return error if user already exists', async () => {
        findUserByEmail.mockResolvedValue({ id: 1 }); // Use mocked function directly
        await userController.registeruser(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            status: 'error',
            message: 'User already exists'
        });
    });
    it('should handle errors during registration', async () => {
        findUserByEmail.mockRejectedValue(new Error('errorMessage')); // Use mocked function directly
        await userController.registeruser(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            status: 'error',
            message: 'errorMessage'
        });
    });
});

