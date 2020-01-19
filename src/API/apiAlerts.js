import {get} from  '../Utils/https'

export function getAlerts() {
    return get("/alerts")
}