// Array to store photos
var photos = [];

// Function to add a new photo
function addPhoto() {
  var photoUrl = prompt("Enter the URL of the photo:");
  
  if (photoUrl) {
    var photo = document.createElement("div");
    photo.className = "photo";
    photo.innerHTML = "<img src='" + photoUrl + "' alt='Photo'>";
    
    var photoGallery = document.getElementById("photo-gallery");
    photoGallery.appendChild(photo);
    
    photos.push(photoUrl);
  }
}

// Event listener for the Add Photo button
var addPhotoButton = document.getElementById("add-photo-button");
addPhotoButton.addEventListener("click", addPhoto);