/**
 * this is a callback function
 */


// console.log("Before");
// getUser(1,(user)=>{
//     console.log(user)
//     getRepoName(user.gitHubUsername,(repo)=>{
//         console.log(repo)
//     })
// })
// console.log("after")


// function getUser(id, callback){
//     setTimeout(()=>{
//         console.log("Reading a user form database")
//         callback({
//             id: id,
//             gitHubUsername:"achsuthan"
//         })
//     },2000) 
// }

// function getRepoName(username,callback){
//     setTimeout(()=>{
//         console.log(`Getting repo of ${username}`)
//         callback(["repo1","repo2","repo3","repo4"])
//     },2000)
// }


/**
 * Named Function
 */

console.log("Before");
getUser(1,getRepoName)
console.log("after")

function getRepoName(user){
    getRepoName(user.gitHubUsername,getCommits)
}

function getCommits(repo){
    getCommits(repo,displayCommits)
}

function displayCommits(commits){
    console.log(commits)
}


function getCommits(repo,callback){
    setTimeout(()=>{
        callback(["a","b","c","d","e"]) 
    },2000)
}


function getUser(id, callback){
    setTimeout(()=>{
        console.log("Reading a user form database")
        callback({
            id: id,
            gitHubUsername:"achsuthan"
        })
    },2000) 
}

function getRepoName(username,callback){
    setTimeout(()=>{
        console.log(username)
        callback(["repo1","repo2","repo3","repo4"])
    },2000)
}

