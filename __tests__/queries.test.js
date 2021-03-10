const request = require('supertest')

let queries = require('../queries')
let db = queries.db

const app = require('../index')
describe('Test getAllPosts', () => {
    it('Should get posts', async (done) => {
        const res = await request(app)
            .get('/posts')
        expect(res.statusCode).toEqual(200)
        done()
    })
})

describe('Test getPostsByImpacterId', () => {
    it('Should get posts by the impacter with impacter_id 1', async (done) => {
        const res = await request(app)
            .get('/impacters/1/posts')
        expect(res.statusCode).toEqual(200)
        done()
    })
})

describe('Test getPostById', () => {
    it('Should get the post with post_id 1', async (done) => {
        const res = await request(app)
            .get('/posts/1')
        expect(res.statusCode).toEqual(200)
        done()
    })
})

afterAll(done => {
    db.destroy()
    done()
})
