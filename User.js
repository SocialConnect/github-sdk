// @flow

import { request } from './Client'

// flow types
import type { FetchOptions } from './Client';
import type {
    UserEntity,
} from './definitions';

    
type getUserByIdParams = {
    id: string,
}

export function getUserById(params: getUserByIdParams, options:? FetchOptions): Promise<UserEntity> {
    if (params["id"] == null) {
        throw new Error("Missing required parameter id when calling getUserById");
    }

    const baseUrl = `/users/{id}`.replace(`{${"id"}}`, `${params.id}`);
    delete params.id;

    return request(baseUrl, params, "GET", options);
}
    
type getUserParams = {
}

export function getUser(params: getUserParams, options:? FetchOptions): Promise<UserEntity> {
    const baseUrl = "/user";

    return request(baseUrl, params, "GET", options);
}
