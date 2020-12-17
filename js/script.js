jQuery(document).ready(function ($) {


    jQuery('#get-weather').on('click', function () {

        const zipcode = '10312';
        const apiKey = 'd636d1643ef0d31c83cfa378324cd157';
        const country = 'us';
        const weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&appid=${apiKey}`;


        axios.get(weatherApiUrl).then(function (response) {

            const {weather, main, name} = response.data;
            const {temp, feels_like} = main;
            const { description, icon} = weather[0];
            tempFarenheight = Math.floor((temp - 273.15) * (9/5) + 32);
            console.log(tempFarenheight);
            console.log(response.data);

            const weatherHtml = `<div class="container bg-info">
            <div class="row">
            <h4>${name}</h4>
            </div>
            <div class="row">
                <div class="col">
                    <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
                </div>
                <div class="col">
                    <p>Today: ${description}</p>
                     <p>Temperature: ${tempFarenheight}&#176;</p>
                </div>
            </div>
        </div>`;
        $('#response-weather').html(weatherHtml);

        }).catch(function (error) {
            // Something better should happen here
        });


        /*  const id = $(this).attr('data-id');
         
         const loaderImage = `<img src="/images/ajax-page-loader.gif" alt="Loading Page"><p>Retreiving Information</p>`;
 
         // Empty #console div
         $('#console').html('');
 
         // Show loader image and text
         $('#console').html(loaderImage);
 
 
         axios.get(consoleUrl).then(function (response) {
 
             //Clear loader image and text
             $('#console').html('');
 
             const { id, name, price, country, releaseYear, image } = response.data;
 
             // Insert the Information details card into #console div
             $('#console').html(`
             <div class="container">
                 <div class="card border-dark" style="width: 18rem;">
                     <img src="${image}" alt="Photo of ${name}">
                     <div class="card-body">
                         <p class="m-0">Name: ${name}</p>
                         <p class="m-0">Price: $${price}</p>
                         <p class="m-0">Country: ${country}</p>
                         <p class="m-0">Release Year: ${releaseYear}</p>
                     </div>
                 </div>
             </div>`); */
        /* 
                }).catch(function (error) {
                    // Something better should happen here
                    alert(error);
                }); */
    });
});