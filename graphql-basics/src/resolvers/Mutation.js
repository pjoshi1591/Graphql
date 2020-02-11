import uuidv4 from 'uuid/v4'

const Mutation = {
    createUser(parent, { data }, { db }, info) {
        const emailTaken = db.users.find(user => user.email === data.email)

        if(emailTaken) {
            throw new Error('Email has been taken!')
        }

        const user = {
            id: uuidv4(),
            ...data
        }
        db.users.push(user)
        return user
    },
    updateUser(parent, { id, data }, { db }, info) {
        const user = db.users.find(user => user.id === id)

        if(!user) {
            throw new Error('User not found!')
        }

        if(typeof data.email === 'string') {
            const emailTaken = db.users.some(user => {
                user.email === data.email
            })

            if(emailTaken) {
                throw new Error('Email has been taken!')
            }

            user.email = data.email
        }

        if(typeof data.name === 'string') {
            user.name = data.name
        }

        if(typeof data.password === 'string') {
            user.password = data.password
        }

        return user

    },
    createPost(parent, args, { db }, info) {
        const userExists = db.users.find(user => user.id === args.author)

        if(!userExists) {
            throw new Error('User not found!')
        }

        const post = {
            id: uuidv4(),
            ...args
        }

        db.posts.push(post)

        return post
    },
    createComment(parent, args, { db }, info) {
        const postExists = db.posts.find(post => post.id === args.post)
        const userExists = db.users.find(user => user.id === args.author)

        if(!postExists || !userExists) {
            throw new Error('User or Post not found!')
        }

        const comment = {
            id: uuidv4(),
            ...args
        }

        db.comments.push(comment)
        return comment
    }
}

export { Mutation as default }