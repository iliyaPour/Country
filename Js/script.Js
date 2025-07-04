
    document.getElementById('cinput').addEventListener('keypress', function (e){
    if (e.key === 'Enter') {
        e.preventDefault();
        flag(); 
    }});


  function flag(){

            const data = null;
            const xhr = new XMLHttpRequest();

        
            xhr.addEventListener('readystatechange', function (){
                if (this.readyState === this.DONE) {

                   let flag_image = document.getElementById('flag_image');
                    let cname = document.getElementById('cname');

                    let res = JSON.parse(this.responseText)
                    flag_image.src = res[0].flags.png;
                    cname.innerText = res[0].altSpellings[1];

                    
                    let capital_name = document.getElementById('capital');
                    let borders_name = document.getElementById('borders');
                    let continents_name = document.getElementById('continent');
                    let currency_name = document.getElementById('currency');
                    let language_name = document.getElementById('language');
                    let timezone_name = document.getElementById('timezone');
                    let population_name = document.getElementById('population');
                    let map = document.getElementById('location');
                    let a = document.querySelector('a');



                    capital_name.innerText = "Capital: " + res[0].capital[0];
                    borders_name.innerText = "Borders: " + (res[0].borders ? res[0].borders.join(', ') : 'None');
                    continents_name.innerText = "Continent: " + res[0].continents;
                    currency_name.innerText = "Currency: " + Object.keys(res[0].currencies).map(key => res[0].currencies[key].name).join(', ');        
                    language_name.innerText = "Language: " + Object.keys(res[0].languages).map(key => res[0].languages[key]); 
                    timezone_name.innerText = "Timezone: " + res[0].timezones.join(', ');
                    population_name.innerText = "Population: " + res[0].population.toLocaleString();
                    a.href = res[0].maps.openStreetMaps;

                    if(a.href != ""){
                        document.getElementById('location_div').style.display = "flex";
                    }

                }});





            let country_name = document.getElementById('cinput').value;

            xhr.open("GET", "https://restcountries.com/v3.1/name/" + country_name);

            xhr.send(data);
        }



        function toggle(){
            document.body.classList.toggle("light");
        }


