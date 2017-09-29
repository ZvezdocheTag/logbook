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

export const getPost = (postID, travelId) => {
    return delay(500).then(() => {
        if(
            typeof postID === "undefined"
        ) {
            throw new Error(`Unknow user `)
        } else {
           
            let post = fakeDatabase
                .travels.filter(item => item.id === travelId)[0]
                .posts.filter(item => item.id === postID)[0]

            return post
        }
    })
}

export const sendTravel = (data) => {
    return delay(500).then(() => {
        // if(typeof userID === "undefined" || userID === null) {
        if(false) {
            throw new Error(`Unknow user `)
        } else {
            
            fakeDatabase.travels.unshift({...data, id: v4()})
            return {...data, id: v4()}
        }
    })
}

export const sendPost = (data, travelID) => {
    return delay(500).then(() => {
        if(typeof travelID === "undefined" || travelID === null) {
            throw new Error(`Unknow user `)
        } else {
            let getTravel = fakeDatabase
            .travels
            .filter(item => item.id === travelID)[0]

            getTravel.posts.unshift(data);
            console.log("DATA PUSH", data)
            return data         
        }
    })
}

