import { expect, test } from 'vitest'
import {handler as getUsersHandler} from '../handlers/users'

test('getUsers handler', async () => {
    const result = await getUsersHandler()
    console.log('result', result)
    expect(result.statusCode).toBe(200)
    expect(result.body.users).not.toBe(null)
})