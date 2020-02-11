// Demo user data
const users = [
    {
        id: '1',
        name: 'Tej',
        email: 'tej@example.com',
        password: 'abcd1234'
    },
    {
        id: '2',
        name: 'Pankaj',
        email: 'pankaj@example.com',
        password: 'abcd1234'
    },
    {
        id: '3',
        name: 'Mike',
        email: 'mike@example.com',
        password: 'abcd1234'
    }
]

// Demo post data
const posts = [
    {
        id: '01',
        title: 'Post 1',
        body: '..........',
        published: true,
        author: '1',
        comments: '001'
    },
    {
        id: '02',
        title: 'Post 2',
        body: '..........',
        published: true,
        author: '1',
        comment: '001'
    },
    {
        id: '03',
        title: 'Post 3',
        body: '..........',
        published: false,
        author: '2',
        comment: '002'
    }
]

// Demo comment data
const comments = [
    {
        id: '001',
        text: 'Comment 1',
        author: '1',
        post: '01'
    },
    {
        id: '002',
        text: 'Comment 2',
        author: '1',
        post: '01'
    },
    {
        id: '003',
        text: 'Comment 3',
        author: '2',
        post: '02'
    }
]

const db = {
    users,
    posts,
    comments
}

export { db as default }