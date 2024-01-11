// Loader 
$(window).on("load", function () {
  $(".loader_body").delay(1500).fadeOut(1000)
})



// Dark & Light Themes 
$(".theme").click(function () {
  // $(this).toggleClass("theme-bg");
  $("html").toggleClass("light_theme");
});

// Theme Icon Change 

$(".theme").click(function () {
  $(this).find("i").toggleClass("bx bx-sun bx bx-moon");
});

// sun white 
// moon black 
$(".theme").click(function () {
  $(this).find(".bx-sun").addClass("sun");
  $(this).find(".bx-moon").removeClass("sun");
});


// $('.theme').on('click', 'box-icon[name=moon]', function(){

//     $(this).attr('name','sun');
//     $(this).text('sun');

// });
// $('.theme').on('click', 'box-icon[name=sun]', function(){

//     $(this).attr('name','moon');
//     $(this).text('moon');

// });



// Logo Change
var flag = 0;
$(".theme").click(function () {
  if (flag == 0) {
    $(".logo_img").attr("src", "img/logo_b.png");
    flag = 1;
  }
  else if (flag == 1) {
    $(".logo_img").attr("src", "img/logo_w.png");
    flag = 0;
  }
});



// Full Screen 
// Toggle logo 
$("#full_screen").click(function (e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.children('i').hasClass('bx bx-fullscreen')) {
    $this.children('i').removeClass('bx bx-fullscreen');
    $this.children('i').addClass('bx bx-exit-fullscreen');
  }
  else if ($this.children('i').hasClass('bx bx-exit-fullscreen')) {
    $this.children('i').removeClass('bx bx-exit-fullscreen');
    $this.children('i').addClass('bx bx-fullscreen');
  }
});


// Full Screen 
// sidebar 
$("#full_screen").click(function () {
  $(".sidebar").toggleClass("full_sidebar")
})

// main_banner
$("#full_screen").click(function () {
  $(".main_banner").toggleClass("full_main_banner")
})


//Toggle fullscreen
const fullscreenButton = document.getElementById('full_screen');

fullscreenButton.addEventListener('click', () => {
  if (document.fullscreenElement) {
    // If already in fullscreen, exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  } else {
    // If not in fullscreen, request fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  }
});


// Sidebar hide
$(".menu_logo").click(function () {
  $(".sidebar_parent").toggleClass("toggle_sidebar");
});



// banner full width
$(".menu_logo").click(function () {
  $(".main_banner").toggleClass("toggle_right");
});


// footer full width
$(".menu_logo").click(function () {
  $("footer").toggleClass("full_width");
});



// for drop down eliminate 
$("#main_section").click(function () {
  $(".message_dd").css("display", "none");
  $(".noti_dd").css("display", "none");
  $(".country_dd").css("display", "none");
  $(".profile_dd").css("display", "none");
})

// Coutnry dd
$(".country").click(function () {
  $(".country_dd").fadeToggle(50);
  $(".message_dd").css("display", "none");
  $(".noti_dd").css("display", "none");
  $(".profile_dd").css("display", "none");
});

// Message dd
$(".message").click(function () {
  $(".message_dd").fadeToggle(50);
  $(".country_dd").css("display", "none");
  $(".noti_dd").css("display", "none");
  $(".profile_dd").css("display", "none");
});

// Notification dd 
$(".notification").click(function () {
  $(".noti_dd").fadeToggle(50);
  $(".country_dd").css("display", "none");
  $(".message_dd").css("display", "none");
  $(".profile_dd").css("display", "none");
});

// Profile dd 
$(".profile").click(function () {
  $(".profile_dd").fadeToggle(50);
  $(".country_dd").css("display", "none");
  $(".message_dd").css("display", "none");
  $(".noti_dd").css("display", "none");
});


// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('.sidebar .side-dropdown');
const sidebar = document.getElementsByClassName('sidebar');

allDropdown.forEach(item => {
  const a = item.parentElement.querySelector('a:first-child');
  a.addEventListener('click', function (e) {
    e.preventDefault();

    if (!this.classList.contains('active')) {
      allDropdown.forEach(i => {
        const aLink = i.parentElement.querySelector('a:first-child');

        aLink.classList.remove('active');
        i.classList.remove('show');
      })
    }

    this.classList.toggle('active');
    item.classList.toggle('show');
  })
})


// MAIN BANNER HEADING GRAPH
Apex.grid = {
  padding: {
    right: 0,
    left: 0
  }
}

Apex.dataLabels = {
  enabled: false
}

var randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// data for the sparklines that appear below header area
var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

// the default colorPalette for this dashboard
//var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
var colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0']

var con_spark1 = {
  chart: {
    id: 'sparkline1',
    group: 'sparklines',
    // background: '#f3ccff9c',
    type: 'area',
    height: 90,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight',
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Sales',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(24).keys()].map(n => `2018-09-0${n + 1}`),
  yaxis: {
    min: 0
  },
  xaxis: {
    type: 'datetime',
  },
  colors: ['#775dde'],
  title: {
    text: '$424,652',
    offsetX: 20,
    style: {
      fontSize: '18px',
      cssClass: 'apexcharts-yaxis-title'
    }
  },
  subtitle: {
    text: 'Sales',
    offsetX: 20,
    style: {
      fontWeight: '700',
      fontSize: '13px',
      cssClass: 'apexcharts-yaxis-title'
    }
  }
}

var con_spark2 = {
  chart: {
    id: 'sparkline2',
    group: 'sparklines',
    // background: '#f3ccff9c',
    type: 'area',
    height: 90,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Expenses',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(24).keys()].map(n => `2018-09-0${n + 1}`),
  yaxis: {
    min: 0
  },
  xaxis: {
    type: 'datetime',
  },
  colors: ['#775dde'],
  title: {
    text: '$235,312',
    offsetX: 20,
    style: {
      fontSize: '18px',
      cssClass: 'apexcharts-yaxis-title'
    }
  },
  subtitle: {
    text: 'Expenses',
    offsetX: 20,
    style: {
      fontWeight: '700',
      fontSize: '13px',
      cssClass: 'apexcharts-yaxis-title'
    }
  }
}

var con_spark3 = {
  chart: {
    id: 'sparkline3',
    group: 'sparklines',
    // background: '#f3ccff9c',
    type: 'area',
    height: 90,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Profits',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(24).keys()].map(n => `2018-09-0${n + 1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0
  },
  colors: ['#5135c3'],
  title: {
    text: '$135,965',
    offsetX: 20,
    style: {
      fontSize: '18px',
      fontWeight: '700',
      cssClass: 'apexcharts-yaxis-title'
    }
  },
  subtitle: {
    text: 'Profits',
    offsetX: 20,
    style: {
      fontWeight: '700',
      fontSize: '13px',
      cssClass: 'apexcharts-yaxis-title'
    }
  }
}

var monthlyEarningsOpt = {
  chart: {
    type: 'area',
    height: 260,
    background: '#eff4f7',
    sparkline: {
      enabled: true
    },
    offsetY: 20
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    type: 'solid',
    opacity: 1,
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  yaxis: {
    min: 0,
    max: 130
  },
  colors: ['#dce6ec'],

  title: {
    text: 'Total Earned',
    offsetX: -30,
    offsetY: 100,
    align: 'right',
    style: {
      color: '#7c939f',
      fontSize: '16px',
      cssClass: 'apexcharts-yaxis-title'
    }
  },
  subtitle: {
    text: '$135,965',
    offsetX: -30,
    offsetY: 100,
    align: 'right',
    style: {
      color: '#7c939f',
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title'
    }
  }
}


new ApexCharts(document.querySelector("#con_spark1"), con_spark1).render();
new ApexCharts(document.querySelector("#con_spark2"), con_spark2).render();
new ApexCharts(document.querySelector("#con_spark3"), con_spark3).render();

var monthlyEarningsChart = new ApexCharts(document.querySelector("#monthly-earnings-chart"), monthlyEarningsOpt);


// DASHBOARD 
window.Apex = {
  chart: {
    foreColor: '#ccc',
    toolbar: {
      show: false
    },
  },
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'dark'
  },
  grid: {
    borderColor: "#535A6C",
    xaxis: {
      lines: {
        show: true
      }
    }
  }
};

var spark1 = {
  chart: {
    id: 'spark1',
    group: 'sparks',
    type: 'line',
    height: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 2,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark2 = {
  chart: {
    id: 'spark2',
    group: 'sparks',
    type: 'line',
    height: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 2,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
  }],
  stroke: {
    curve: 'smooth'
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  markers: {
    size: 0
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark3 = {
  chart: {
    id: 'spark3',
    group: 'sparks',
    type: 'line',
    height: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 2,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark4 = {
  chart: {
    id: 'spark4',
    group: 'sparks',
    type: 'line',
    height: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 2,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

new ApexCharts(document.querySelector("#spark1"), spark1).render();
new ApexCharts(document.querySelector("#spark2"), spark2).render();
new ApexCharts(document.querySelector("#spark3"), spark3).render();
new ApexCharts(document.querySelector("#spark4"), spark4).render();


// PIE CHART 
window.Apex = {
  chart: {
    foreColor: '#ccc',
    toolbar: {
      show: false
    },
  },
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'dark'
  },
  grid: {
    borderColor: "#535A6C",
    xaxis: {
      lines: {
        show: true
      }
    }
  }
};




var optionsLine = {
  chart: {
    height: 328,
    type: 'line',
    zoom: {
      enabled: false
    },
    dropShadow: {
      enabled: true,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  //colors: ["#3F51B5", '#2196F3'],
  series: [{
    name: "Music",
    data: [1, 15, 26, 20, 33, 27]
  },
  {
    name: "Photos",
    data: [3, 33, 21, 42, 19, 32]
  },
  {
    name: "Files",
    data: [0, 39, 52, 11, 29, 43]
  }
  ],
  title: {
    text: 'Media',
    align: 'left',
    offsetY: 25,
    offsetX: 20
  },
  subtitle: {
    text: 'Statistics',
    offsetY: 55,
    offsetX: 20
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9
    }
  },
  grid: {
    show: true,
    padding: {
      bottom: 0
    }
  },
  labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
  xaxis: {
    tooltip: {
      enabled: false
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -20
  }
}






var chartLine = new ApexCharts(document.querySelector('#line-adwords'), optionsLine);
chartLine.render();

var optionsCircle4 = {
  chart: {
    type: 'radialBar',
    height: 380,
    width: 380,
  },
  plotOptions: {
    radialBar: {
      size: undefined,
      inverseOrder: true,
      hollow: {
        margin: 5,
        size: '48%',
        background: 'transparent',

      },
      track: {
        show: false,
      },
      startAngle: -180,
      endAngle: 180

    },
  },
  stroke: {
    lineCap: 'round'
  },
  series: [71, 63, 77],
  labels: ['June', 'May', 'April'],
  legend: {
    show: true,
    floating: true,
    position: 'right',
    offsetX: 60,
    offsetY: 240
  },
}

var chartCircle4 = new ApexCharts(document.querySelector('#radialBarBottom'), optionsCircle4);
chartCircle4.render();