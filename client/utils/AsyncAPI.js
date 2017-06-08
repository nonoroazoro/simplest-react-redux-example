/**
 * An example of async api.
 */

/**
 * Do some async job then return the result.
 */
export function doSomeAsyncJob(p_num = 1)
{
    return new Promise(
        (resolve) => setTimeout(() => resolve(p_num), 1000)
    );
}

export default {
    doSomeAsyncJob
};
