
//TO DO: checks the downstream database to see:
    // if the postId is liked by the logged in user


export function checkIfLiked (postId) {
    return( postId > 1 ? true : false )
}