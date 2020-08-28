const { User } = require('../../src/app/models');

describe('Authentication', () => {
    it('should sum two number', async () => {
        const user = await User.create({
            name: "Felipe",
            email: "fe.marchioli@gmail.com",
            password_hash: "123123"
        });

        console.log(user);

        expect(user.email).toBe('fe.marchioli@gmail.com');
    });
})