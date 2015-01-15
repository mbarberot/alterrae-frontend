import Faker from 'faker';

export default function() {
	return {
        username: Faker.internet.userName(),
        password: Faker.internet.password(),
        email: Faker.internet.email()
    };
}
