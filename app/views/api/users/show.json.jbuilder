json.partial! "/api/users/user", {user: @user}

#Sets the @user from user show method in users controller to the partial
#user pointing to the user object
