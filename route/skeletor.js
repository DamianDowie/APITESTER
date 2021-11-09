const router = require('express').Router();

let users = [{
    id: 0,
    name: "Damian",
    surname: "Dowie",
    age: 23,
    phone_number: 111,
    timestamp: Date.now()
}, {
    id: 1,
    name: "Steve",
    surname: "John",
    age: 50,
    phone_number: 1411,
    timestamp: "Mon Nov 08 2021 19:47:48 GMT+0200 (South Africa Standard Time)"
}, {
    id: 2,
    name: "Josh",
    surname: "mayer",
    age: 21,
    phone_number: 13611,
    timestamp: "Mon Nov 08 2021 19:47:48 GMT+0200 (South Africa Standard Time)"
}]

router.put('/users/:id', async (req, res) => {

    let id = req.params.id;
    if (id && typeof id != 'undefined') {

        for (let i in users) {
            if (users[i].id == id) {

                let username = users[i].name;
                let usersurname = users[i].surname;
                let usertimestamp = users[i].timestamp;
                let userage = users[i].age;
                let phone_number = users[i].phone_number;

                (req.body.name && typeof req.body.name != 'undefined' && req.body.name != null) ? users[i].name = req.body.name : username = username;
                (req.body.surname && typeof req.body.surname != 'undefined' && req.body.surname != null) ? users[i].surname = req.body.surname : usersurname = usersurname;
                (req.body.timestamp && typeof req.body.timestamp != 'undefined' && req.body.timestamp != null) ? users[i].timestamp = req.body.timestamp : usertimestamp = usertimestamp;
                (req.body.age && typeof req.body.age != 'undefined' && req.body.age != null) ? users[i].age = req.body.age : userage = userage;
                (req.body.phone_number && typeof req.body.phone_number != 'undefined' && req.body.phone_number != null) ? users[i].phone_number = req.body.phone_number : phone_number = phone_number;

                return res.send(`UPDATED USER ID ${id}`);
            }
        }

        return res.status(404).send({ message: "No user found" })
    } else {
        return res.send("id no specified")
    }



});
router.get('/users', async (req, res) => {
    users[0].timestamp = new Date(Date.now());
    return res.send(users)
});
router.get('/users/:id', async (req, res) => {
    let currentTime = new Date(Date.now());
    users[0].timestamp = currentTime;

    let id = req.params.id;
    if (!id || typeof id == 'undefined') {

        return res.status(418).send({ message: "Incorrent params" });
    }
    for (let i in users) {
        if (users[i].id == id) {

            return res.send(users[i])
        }
    }
    return res.status(404).send({ message: "No user found" })
})
router.delete('/users/:id', async (req, res) => {
    let id = req.params.id;

    if (!id || typeof id == 'undefined') {

        return res.status(418).send({ message: "Incorrent params" });
    } else {

        for (let i in users) {

            if (id == users[i].id) {

                if (id == 0) {
                    return res.status(403).send({ message: "Cant delete main user" });
                }

                delete users[i]
                return res.status(200).send({ message: `User was deleted` })

            }
        }


        return res.status(404).send({ message: "no user found" });
    }
})
router.post('/users/', async (req, res) => {

    let currentTime = new Date(Date.now());
    users[0].timestamp = currentTime;


        let username = "";
        let usersurname = "";
        let usertimestamp = "";
        let userage = 0;
        let phone_number = 0;
        (req.body.name && typeof req.body.name != 'undefined' && req.body.name != null) ? username = req.body.name : username = username;
        (req.body.surname && typeof req.body.surname != 'undefined' && req.body.surname != null) ? usersurname = req.body.surname : usersurname = usersurname;
        (req.body.timestamp && typeof req.body.timestamp != 'undefined' && req.body.timestamp != null) ? usertimestamp = req.body.timestamp : usertimestamp = new Date(Date.now());;
        (req.body.age && typeof req.body.age != 'undefined' && req.body.age != null) ? userage = req.body.age : userage = userage;
        (req.body.phone_number && typeof req.body.phone_number != 'undefined' && req.body.phone_number != null) ? phone_number = req.body.phone_number : phone_number = phone_number;

        for(let i in users){
            if(users[i].id == id){
                return res.status(403).send({message:"User with that ID exists"})
            }
        }
        users.push({
            id: users.length,
            name: username,
            surname: usersurname,
            age: userage,
            phone_number: phone_number,
            timestamp: usertimestamp
        })

        return res.send(`UPDATED USER ID ${id}`);

})

module.exports = router;