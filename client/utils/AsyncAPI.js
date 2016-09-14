/**
 * Just an example of async api.
 */

/**
 * Do some async job and return the result.
 */
async function doSomeAsyncJob(p_num = 1)
{
    return await new Promise((resolve, reject) =>
    {
        setTimeout(resolve, 1000);
    }).then(() =>
    {
        // Here's a fake result.
        return p_num;
    });
}

// Using ES6 export table.
export default {
    doSomeAsyncJob
};
