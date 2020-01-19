import {get} from  '../Utils/https' //, post, put, remove

export function getAllPackages() {
    return get("/packages")
}
