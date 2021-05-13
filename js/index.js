var map;
let markers = [];
let infoWindow;
let locationSelect;


fetch('temp-data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
  
})
.catch(function (err) {
    console.log('error: ' + err);
});


function appendData(data) {
let mainContainer = document.getElementById("partners-list");
for (let i = 0; i < data.length; i++) {
    let temp = data[i];
    let div = document.createElement("div");
    div.innerHTML = 
    `
        <div class="partner-container" id = ${temp.id} tabindex= ${temp.id}  style = "display:flex;">

        <div>
        <span class="partner-name">${data[i].firstName + ' ' + data[i].lastName}</span>
        <p class="loan-info">${data[i].loanContent} | ${data[i].mobile}</p>
       
        <span class></span>
        <p class="partner-visit">${data[i].visit}</p>
        </div>

        <i class="fas fa-chevron-circle-right fa-lg icon"></i>
        
    

        </div>    
        `
    mainContainer.appendChild(div);
    document.getElementById(temp.id).onclick = () => {
        showPartnerDetails(temp);
        showLocation(temp);
    }
}
}


function showPartnerDetails(data){
    console.log(data);
    console.log(data["stop-1"]["lat"]);
    // let partner = document.querySelectorAll(".partners-list");
    let details = document.getElementById("partner-detail");
   
                        details.innerHTML = 
                        `
                        <span class="main-name">PARTNER DETAILS</span>
                        <div class="partner-details">
                        <table>
                            <tr>
                                <th class="table-name">NAME</th>

                                <th class="table-name" >PARTNER ID</th>
                                <th class="table-name">MOBILE NUMBER</th>
                                <th class="table-name">STATUS</th>
                            </tr>
                            <tr>
                            <td class="table-details">${data.firstName + ' ' + data.lastName}</td>
                            <td class="table-details">${data.loanContent}</td>
                            <td class="table-details">${data.mobile}</td>
                            <td class="table-details">${data.visit}</td>
                            </tr>
                
                        </table>
                        <button class="call-btn"> <span>Call Partner</span> </button>
                        </div>
            
                            `
                        // details.appendChild(div);
            
            
            
                }
            
        
        function showLocation(data) {
            let details = document.getElementById("stops-container");
            // for (let i = 0; i < data.length; i++) {
                // let div = document.createElement("div");
                details.innerHTML = 
                `
                <div class="stop-1">

                <table>
                    <tr>
                        <th class="table-name" style="padding-left: 2.0rem; white-space: nowrap;">STOP NO.</th>
                        <th class="table-name">LAT</th>
                        <th class="table-name">LONG</th>
                        <th class="table-name">TIME</th>
                    </tr>
                    <tr>
                            <td class="table-details">${data.id}</td>
                            <td class="table-details">${data["stop-1"]["lat"]}</td>
                            <td class="table-details">${data["stop-1"]["long"]}</td>
                            <td class="table-details">${data["stop-1"]["time"]}</td>
                            <td></td>
                            </tr>
                </table>
            </div>
                    `  
                    
                // mainContainer.appendChild(div);
            }
            // }
        
        
        initMap = () => {
            let chennai = {lat: 13.0333388, lng: 80.2483276};
    map = new google.maps.Map(document.getElementById('map'), {
        center: chennai,
        zoom: 15,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });
    infoWindow = new google.maps.InfoWindow
    createMarker();
}

const createMarker = () => {
    let icon = {
        url: "../assets/Pin.png", // url
        scaledSize: new google.maps.Size(35, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    let marker = new google.maps.Marker({
        position: {lat:13.0333388,
        lng: 80.2483276 },
        map : map,
        icon: icon
    })
   
}
