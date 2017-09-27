import { v4 } from 'node-uuid'
import fakeDatabase from './db'

const delay = (ms) => 
    new Promise(resolve => setTimeout(resolve, ms))


export const getTravel = (travelID) => {
    return delay(500).then(() => {
        if(
            
            typeof travelID === "undefined"
        ) {
            throw new Error(`Unknow user `)
        } else {
            return fakeDatabase
            .travels
            .filter(item => item.id === travelID)
        }
    })
}

export const getTravels = (id) => {
    return delay(500).then(() => {
        if(typeof id === "undefined" || id === null) {
            throw new Error(`Unknow user `)
        } else if(id === "all") {
            return fakeDatabase.travels
        } else {
            return fakeDatabase.travels.filter(item => item.id === id)[0]
        } 
    })
}

export const getPost = (postID) => {
    return delay(500).then(() => {
        if(
            typeof postID === "undefined"
        ) {
            throw new Error(`Unknow user `)
        } else {
            return fakeDatabase
            .posts
            .filter(item => item.id === postID)
        }
    })
}

export const getPosts = (id) => {
    return delay(500).then(() => {
        if(typeof id === "undefined" || id === null) {
            throw new Error(`Unknow user `)
        } else if(id === "all") {
            return fakeDatabase.posts
        } else {
            
            return fakeDatabase
                .posts
                .filter(item => item.id === id)
        }
    })
}

export const sendTravel = (data) => {
    return delay(2500).then(() => {
        // if(typeof userID === "undefined" || userID === null) {
        if(false) {
            throw new Error(`Unknow user `)
        } else {
            console.log("DATA PUSH")
            fakeDatabase.travels.unshift({...data, id: v4()})
            return {...data, id: v4()}
        }
    })
}

export const sendPost = (data, userID) => {
    return delay(500).then(() => {
        if(typeof userID === "undefined" || userID === null) {
            throw new Error(`Unknow user `)
        } else {
            return fakeDatabase.posts.push(data)
        }
    })
}

