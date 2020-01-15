import {get,post} from  '../Utils/https'

export function getAllSensors() {
    return get("/achievement/all")
}

export function addAchievement(body) {
    return post("/achievement/",body)
}