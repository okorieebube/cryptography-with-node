const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

function signup(email, password) {
    const salt = randomBytes(16).toString("hex");
    const hashedPassword = scryptSync(password, salt, 64).toString("hex");

    const user = { email, password: `${salt}:${hashedPassword}` };

    // users.push(user);

    return user;
}

function login(email, password) {
    // const user = users.find(v => v.email === email);
    let _salt = "e55da807bc7eacb5170b9960adb23405";
    let _hashedPassword =
        "19105ccdedfaaa36fe40eb93f466ae6327248e5f38a11a8960567615b9fd723fe98f75760c60f8082f19ecec6e570c466f668d21476756c8d9c081f27352f612";


    const user = {
        email: "okorieebube1@gmail.com",
        password: `${_salt}:${_hashedPassword}`,
    };

    const [salt, key] = user.password.split(":");
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, "hex");
    console.log({ keyBuffer, hashedBuffer })
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return "login success!";
    } else {
        return "login fail!";
    }
}
// console.log(signup("okorieebube1@gmail.com", "1234abcd"));
console.log(login('okorieebube1@gmail.com', '1234abcd'));
