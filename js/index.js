let map;
let markers = [];
let infoWindow;
let locationSelect;


fetch('temp-data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
    appendLocation(data);
    showPartnerDetails(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});


function appendData(data) {
var mainContainer = document.getElementById("partners-list");
for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 
    `
        <div class="partner-container">
        <span class="partner-name">${data[i].firstName + ' ' + data[i].lastName}</span>
        <p class="loan-info">${data[i].loanContent}</p>
        <i class="fas fa-chevron-circle-right"></i>
        <p class="partner-visit">${data[i].visit}</p>
        </div>
            
        `
    mainContainer.appendChild(div);
}
}

function appendLocation(data) {
    var mainContainer = document.getElementById("stops-container");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 
        `
        <tr>
        <td>${data[i]}</td>
        <td>${data[i].loanContent}</td>
        <td>${data[i].visit}</td>
        <td></td>
        </tr>

            
                
            `
        mainContainer.appendChild(div);
    }
    }

function showPartnerDetails(data){
    let partner = document.querySelectorAll(".partners-list");
    var details = document.getElementById("partner-details");
    partner.forEach((elem, idx)=>{
        elem.addEventListener('click'), ()=>{

                var div = document.createElement("div");
                div.innerHTML = 
                `
                <tr>
                <td>${data[idx].firstName + ' ' + data[idx].lastName}</td>
                <td>${data[idx].loanContent}</td>
                <td>${data[idx].visit}</td>
                <td></td>
                </tr>

                        
                    `
                details.appendChild(div);



        }
    })
}



initMap = () => {
    var chennai = {lat: 13.0333388, lng: 80.2483276};
    map = new google.maps.Map(document.getElementById('map'), {
        center: chennai,
        zoom: 15,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });
    infoWindow = new google.maps.InfoWindow
}

