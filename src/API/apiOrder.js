import {get, post, put, remove} from  '../Utils/https'

export function getAllSensors() {
    return get("/sensors")
}
