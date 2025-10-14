const api="841d50b1"
//search bar
const searchInput = document.getElementById('text');
const searchBtn=document.getElementById("searchBtn");

//movie section
const movieGrid=document.querySelector(".movie-grid");
const img=document.getElementById('img');
const title = document.getElementById('title');
const paragraph= document.getElementById('paragraph');
const movieDetail = document.getElementById('movie-details');
searchBtn.addEventListener('click',function(){
  const movieName = encodeURIComponent(searchInput.value.trim());

  console.log("Hello")
  if(movieName===""){
    alert('Please Enter The Movie Name ');
    return;
  }
  searchMovies(movieName);
  localStorage.setItem("lastSearch",movieName);
})

// searchInput.addEventListener('keydown',function(e){
//   const key =e.key
//   if(key==="Enter"){
    
//   }
// })


async function searchMovies(movieName){
  const url = `https://www.omdbapi.com/?s=${movieName}&apikey=${api}`;

  try{
    const responce = await fetch(url);
    if(!responce.ok){
      alert("Something went wrong while fetching data!");
      return;
    }
    const jsonData= await responce.json(); 
    
    if (jsonData.Response==="False"){
      movieGrid.innerHTML=`<p>${jsonData.Error}</p>`;
      return;
    }
    displayMovies(jsonData.Search);
    
  } 
  catch(error){
    alert(error.message);
  }

}

function displayMovies(movie){
  movieGrid.innerHTML='';
  movieGrid.classList.remove("hidden"); 
  movieDetail.classList.add("hidden"); 
  
  movie.forEach(movie=>{
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML=`
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x270?text=No+Image"}" alt="">
              <div class="overlay"> 
                <h3>${movie.Title}</h3> 
                <p>${movie.Year}</p> 
              </div>        
    `
    card.addEventListener('click',()=>{showMovieDetail(movie.imdbID)});
    movieGrid.appendChild(card);
  })
   
}

async function showMovieDetail(imdbID){
  
  const detail= `https://www.omdbapi.com/?i=${imdbID}&apikey=${api}`;

  try{
    const response= await fetch(detail);
    const data = await response.json();
    movieDetail.innerHTML=`
    <span class="close-btn" id="closeBtn">&times;</span>
    <h1>${data.Title} | ${data.Year}</h1>
    <img src="${data.Poster}" alt="${data.Title}" style="width:200px; float:right; margin-left:20px;">
    <p><b>Genre:</b> ${data.Genre}</p>
    <p><b>Director:</b> ${data.Director}</p>
    <p><b>Actors:</b> ${data.Actors}</p>
    <p><b>Plot:</b> ${data.Plot}</p>
    <p><b>Language:</b> ${data.Language}</p>
    <p><b>IMDB Rating:</b> ⭐ ${data.imdbRating}</p>
    `;
    movieDetail.style.display="block";
    document.getElementById("closeBtn").addEventListener("click", () => {
     movieDetail.style.display = "none";
    });
  }catch(error){
      console.log("Error: ",error);
  }
    
    
      
}
window.addEventListener("DOMContentLoaded", () => {
  const lastSearch = localStorage.getItem("lastSearch");
  if (lastSearch) {
    searchInput.value = decodeURIComponent(lastSearch);
    searchMovies(lastSearch);
  }
});

