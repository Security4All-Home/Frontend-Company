import {get, post, put, remove} from  '../Utils/https'

export function getAllSensors() {
    return get("/sensor")
}

export function editSensor(body) {
    return put("/sensor", body)
}

export function addSensor(body) {
    return post("/sensor", body)
}

export function removeSensor(body) {
    return remove("/sensor", body)
}