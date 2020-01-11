import {get, put} from  '../Utils/https'

export function getAllUsers() {
    return get("/user")
}

export function editUser(body) {
    return put("/user", body)
}

