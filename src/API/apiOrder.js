import {get} from  '../Utils/https' //, post, put, remove

export function getAllOrders() {
    return get("/order/withsensors")
}
