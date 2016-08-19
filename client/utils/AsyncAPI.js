/**
 * Just an example of async api.
 */

export default class AsyncAPI
{
    /**
     * Do some async job and return the result.
     * Here, the function must with the keyword static.
     */
    static async doSomeAsyncJob(p_num = 1)
    {
        return new Promise((resolve, reject) =>
        {
            setTimeout(resolve, 1000);
        }).then(() =>
        {
            // Here's a fake result.
            return p_num;
        });
    }
}
