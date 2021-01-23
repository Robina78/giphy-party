
$('form').on('submit', async function (e){
    e.preventDefault();
    const $searchVal = $('#search').val();
    
   const response = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: $searchVal, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}});
   console.log(response.data);

   $('#search').val("");
  getGiphBySearch(response.data)


})


function getGiphBySearch(res) {
    let lengthRes = res.data.length;
    if(lengthRes) {
     const randomIdx = Math.floor(Math.random() * lengthRes);
     const $newCol = $('<div>',{class: 'col-md-4 col-12 mb-4'});
     const $newImg = $('<img>', {src: res.data[randomIdx].images.original.url, class: "w-100"});
        
     $newCol.append($newImg)
     $('#gif-area').append($newCol)
    }
}

$('#remove').on('click', function() {
    $('#gif-area').empty();
})