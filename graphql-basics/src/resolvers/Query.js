const Query = {
    me() {
        return {
            id: '1',
            name: 'Tej',
            email: 'tej@example.com',
            password: 'abcd1234'
        }
    },
    post() {
        return {
            id: '01',
            title: 'Post 1',
            body: '.....',
            published: true
        }
    },
    users(parent, args, { db }, info) {

        if(!args.query) {
            return db.users
        }
        return db.users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))
    },
    posts(parent, args, { db }, info) {

        if(!args.query) {
            return db.posts
        }
        
        return db.posts.filter(post => post.title.toLocaleLowerCase().includes(args.query.toLocaleLowerCase()))
    },
    comments(parent, args, { db }, info) {
        return db.comments
    }
}

export { Query as default }