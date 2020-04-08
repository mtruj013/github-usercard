/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/mtruj013')
.then(response =>{
  // Object.values(response.data).forEach(objData =>{
  //   parentElement.append(makeCards(objData))
  // })

  const makeCard = makeCards(response.data);
  parentElement.append(makeCard);
  //console.log(response);
})
.catch(error => {
  console.log("the data was not returned :(", error)
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tippitytapp",
  "mrsimpson3000",
  "easpaas",
  "devjaymoe",
  "Riley-Robinson"
];

followersArray.forEach(follower =>{
  axios.get(`https://api.github.com/users/${follower}`)
  .then(response =>{
    parentElement.append(makeCards(response.data));
    console.log(response);
  })
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

//grab parent element
const parentElement = document.querySelector('.cards');

function makeCards(objData){

  //create new elements
  const containerDiv = document.createElement('div'),
        containerDivImg = document.createElement('img'),
        cardInfoDiv = document.createElement('div'),
        name = document.createElement('h3'),
        username = document.createElement('p'),
        location = document.createElement('p'),
        profile = document.createElement('p'),
        link = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p');

  //add content
  containerDivImg.src = objData.avatar_url;
  name.textContent = objData.name;
  username.textContent = objData.login;
  location.textContent  = objData.location;
  profile.textContent = "Profile";
  link.textContent = objData.url;
  followers.textContent = objData.followers;
  following.textContent = objData.following;
  bio.textContent = objData.bio || "No bio";

  //add classes
  containerDiv.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  //append elements
  containerDiv.append(containerDivImg);
  containerDiv.append(cardInfoDiv);
  cardInfoDiv.append(name);
  cardInfoDiv.append(username);
  cardInfoDiv.append(location);
  cardInfoDiv.append(profile);
  profile.append(link);
  cardInfoDiv.append(followers);
  cardInfoDiv.append(following);
  cardInfoDiv.append(bio);
  

  //return the component
  return containerDiv;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
