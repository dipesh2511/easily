const users = [
    {
        uid: 'user1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
    },
    {
        uid: 'user2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'securePass456'
    },
    {
        uid: 'user3',
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'myPassword789'
    },
    {
        uid: 'user4',
        name: 'Himanshu',
        email: 'himanshu@gmail.com',
        password: '121212'
    },
    {
        uid: 'user5',
        name: 'Dipesh Pohanekar',
        email: 'dipeshpohanekar1997@gmail.com',
        password: '12345'
    }
];
function check(email,password){
    return users.find((user) => {
        return user.email == email && user.password == password;
    });
}
export default class UserModel {

    static checkCredential(email, password) {
        let result = check(email,password);
        return result;
    }
    static addUser(name, email, password) {
        users.push({
            uid: `user${users.length + 1}`,
            name: name,
            email: email,
            password: password
        });
        let result = check(email,password);
        console.log(result);
        return result;
    }
}

