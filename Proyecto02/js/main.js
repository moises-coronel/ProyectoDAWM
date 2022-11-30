
(function ($) {
    "use strict";
let myChart1;
let myChart2;
let myChart3;
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";


    


    
    


    //llamando datos
    fetch('https://ghibliapi.herokuapp.com/films')
  .then((response) => response.json())
  .then((data) => {
    //director
   let arr_director=data.map(function(elem){
    return elem.director;
  })
  let arr_nombres=data.map(function(elem){
    return elem.original_title_romanised;
  })
  let arr_anio=data.map(function(elem){
    return elem.release_date;
})
let arr_score=data.map(function(elem){
    return elem.rt_score;
})
let arr_time=data.map(function(elem){
    return elem.running_time;
})
llenarTabla(arr_nombres,arr_score,arr_time,arr_anio, arr_director);
graficar(arr_nombres,arr_score,arr_time,arr_anio);
  //console.log(arr_director);
//filtrar directores
  var uniqueDir = [];
arr_director.forEach(function (item) {
	if(!uniqueDir.includes(item)){
		uniqueDir.push(item);
	}
});
//console.log(uniqueDir);
  let res=document.querySelector('#floatingSelect');
            res.innerHTML='';
            res.innerHTML=`<option value="TODOS">TODOS</option>`;
    for(let i in uniqueDir){
       res.innerHTML+=`<option value="${uniqueDir[i]}">${uniqueDir[i]}</option>`;
       //console.log(arr_director[i]);
    }
    
    const selectElement = document.querySelector('#floatingSelect');

    selectElement.addEventListener('change', (event) => {
        let datos= data.filter(e=>e.director==`${event.target.value}`); // fltramos datos segun director
    //console.log(datos);
    let arr_nombres1=datos.map(function(elem){
        return elem.original_title_romanised;
      })
      let arr_anio1=datos.map(function(elem){
        return elem.release_date;
    })
    let arr_score1=datos.map(function(elem){
        return elem.rt_score;
    })
    let arr_time1=datos.map(function(elem){
        return elem.running_time;
    })
    let arr_director1=datos.map(function(elem){
        return elem.director;
    })
    if (`${event.target.value}`==='TODOS'){
        llenarTabla(arr_nombres,arr_score,arr_time,arr_anio, arr_director);
        graficar(arr_nombres,arr_score,arr_time,arr_anio);
    }else{
        llenarTabla(arr_nombres1,arr_score1,arr_time1,arr_anio1, arr_director1);
        graficar(arr_nombres1,arr_score1,arr_time1,arr_anio1);
    
    }
    
    
    });
    
   
})
.catch((error) => {
  console.error('Error:', error);
});
function llenarTabla(arr_nombres,arr_score,arr_time,arr_anio, arr_director){
    let res=document.querySelector('#datos');
    res.innerHTML='';
    for (let i in arr_nombres){
        res.innerHTML+= `<tr>
        <th scope="row">${i}</th>
        <td>${arr_nombres[i]}</td>
        <td>${arr_director[i]}</td>
        <td>${arr_anio[i]}</td>
        <td>${arr_score[i]}</td>
        <td>${arr_time[i]}</td>
        </tr>`
    } 
    /** 
     
 */
}

function graficar(arr_nombres,arr_score,arr_time,arr_anio){
    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    if (myChart1) {
        myChart1.destroy();
    }
 myChart1 = new Chart(ctx1, {
    type: "bar",
    data: {
        labels: arr_nombres,
        datasets: [{
                label: "Puntaje",
                data: arr_score.map(Number),
                backgroundColor: "rgba(235, 22, 22, .7)",
                
            },
            {
                label: "Duración",
                data: arr_time.map(Number),
                backgroundColor: "rgba(235, 22, 22, .5)"
            }
        ]
        },
    options: {
        responsive: true
    }
});
 // Single Line Chart
 var ctx3 = $("#line-chart").get(0).getContext("2d");
 if (myChart3) {
    myChart3.destroy();
}
  myChart3 = new Chart(ctx3, {
     type: "line",
     data: {
         labels: arr_nombres,
         datasets: [{
             label: "Año",
             fill: false,
             backgroundColor: "rgba(235, 22, 22, .7)",
             data: arr_anio.map(Number)
         }]
     },
     options: {
         responsive: true
     }
 });

// Salse & Revenue Chart
var ctx2 = $("#salse-revenue").get(0).getContext("2d");
if (myChart2) {
    myChart2.destroy();
}
myChart2 = new Chart(ctx2, {
 type: "line",
 data: {
     labels: arr_nombres
     ,
     datasets: [{
             label: "Puntaje",
             data: arr_score.map(Number),
             backgroundColor: "rgba(235, 22, 22, .5)",
             
         }
     ]
     },
 options: {
     responsive: true
 }
});
}
    
/**
  
 */
    
})(jQuery);

