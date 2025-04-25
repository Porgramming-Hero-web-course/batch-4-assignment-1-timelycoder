"use strict";
{
    const updateProfile = (profileObj, partialUpdated) => {
        return Object.assign(Object.assign({}, profileObj), partialUpdated);
    };
}
