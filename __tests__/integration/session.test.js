const { User } = require('../../src/app/models');

describe('Authentication', () => {
    it('Authenticate a user', async () => {
        const user = await User.create({
            name: "Felipe",
            email: "fe.marchioli@gmail.com",
            password_hash: "123123"
        });

        console.log(user);

        expect(user.email).toBe('fe.marchioli@gmail.com');
    });
})
