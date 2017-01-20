/**
 * An example of async api.
 */

/**
 * Do some async job then return the result.
 */
export function doSomeAsyncJob(p_num = 1)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(resolve, 1000);
    }).then(() =>
    {
        // Fake result.
        return p_num;
    });
}

export default {
    doSomeAsyncJob
};
