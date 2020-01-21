import config from '../config/config';
import axios from 'axios';
//
export function post(uri, data) {
    return axios.post(endpoint(uri), data);
}

export function put(uri, data) {
    return axios.put(endpoint(uri), data, { headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoic2QyIiwiYWdlbnQiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNzkuMC4zOTQ1LjExNyBTYWZhcmkvNTM3LjM2IiwiaWRVc2VyIjo3LCJpYXQiOjE1Nzk2MjUyMzcsImV4cCI6MTU3OTYyNzAzN30.KZBJAWqpeV2vdIuShqPO2wqtLgGJ9kh4Pz7GL5gkLqs"}});
}

export function remove(uri, data) {
    return axios.delete(endpoint(uri), data);
}

export function get(uri) {
    return axios.get(endpoint(uri));
}
//
export function endpoint(uri) {
    return config.BASE_URL + uri;
}