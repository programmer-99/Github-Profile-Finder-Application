var username
var data

var sname =  document.querySelector("#name");
var company =  document.querySelector("#company");
var bio =  document.querySelector("#bio");
var ids =  document.querySelector("#ids");
var followers =  document.querySelector("#followers");
var repository =  document.querySelector("#repository");
var following =  document.querySelector("#following");
var btn = document.getElementById("btn")

var innerMain =document.getElementById("innerMain")
var search = document.getElementById("search")

innerMain.style.display = "none"

btn.addEventListener('click', function()
{
    username = ("https://api.github.com/users/" + document.getElementById("username").value)
    
    if(username ==="https://api.github.com/users/")
    {
        alert("Please enter username")
    }
    else
    {
        
        fetch(username)
            .then(function(data)
            {
                return data.json()
            })
            .then(function(res)
            {
                data = res
                if(data.name === undefined)
                {
                    alert("user not found")
                }
                else
                {
                    innerMain.style.display="block"
                    search.style.display="none"
                    sname.innerHTML = data.name
                    company.innerHTML = data.company
                    ids.innerHTML =data.location
                    bio.innerHTML =data.bio
                    followers.innerHTML =data.followers
                    repository.innerHTML =data.public_repos
                    following.innerHTML =data.following
                    document.getElementById("avatar").src = data.avatar_url;
                }
               
            })
    }
})



