'use strict';
$(function(){

  var dropdown_options = [
    { value: "Shanghai",text: "Shanghai" },
    { value: "HongKong",text: "HongKong" },
    { value: "Nanjing", text: "Nanjing" },
    { value: "Guangzhou", text: "Guangzhou" },
    { value: "Chengdu", text: "Chengdu" },
    { value: "Wuhan", text: "Wuhan" },
    { value: "Shenzhen", text: "Shenzhen" },
    { value: "Hangzhou", text: "Hangzhou" },
    { value: "Xi\'an", text: "Xi\'an" },
    { value: "Shenyang", text: "Shenyang" },
    { value: "Tianjing", text: "Tianjing" },
    { value: "Dalian", text: "Dalian" },
    { value: "Qingdao", text: "Qingdao" },
    { value: "Chongqing", text: "Chongqing" },
    { value: "Beijing", text: "Beijing" },
    { value: "Suzhou", text: "Suzhou" },
    { value: "Jinan", text: "Jinan" },
    { value: "Changsha", text: "Changsha" },
    { value: "Zhengzhou", text: "Zhengzhou" },
    { value: "Hefei", text: "Hefei" },
    { value: "Ningbo", text: "Ningbo" },
    { value: "Harbin", text: "Harbin" },
    { value: "Changchun", text: "Changchun" },
    { value: "Wuxi", text: "Wuxi" },
    { value: "Taiyuan", text: "Taiyuan" },
    { value: "Shijiazhuang", text: "Shijiazhuang" },
    { value: "Fuzhou", text: "Fuzhou" }]

  var dropDown = d3.select("#dropdown").append('select');
  dropDown.selectAll("option")
          .data(dropdown_options)
          .enter()
          .append("option")
          .attr("value", function(option) { return option.value;})
          .text(function(option) { return option.text;});
  var val = dropDown.node().value;
  console.log(val)

  //console.log(dropDown.node().value)
   //.on("change", dropdownSelected)

  //d3.select("#dropdown")
  //  .on("change",function(d){
  //    var selected = d3.select("#dropdown").node().value;
  //    console.log( selected );
  //  });
//
  //function dropdownSelected() {
  //  val = dropDown.node().value;
  //  console.log(val);
  //}
  //console.log(dropDown.node().value)

  var width = 938;
  var height = 620;

  var projection = d3.geoEquirectangular()
                         .scale(230)
                         .rotate([-180,0])
                         .center([5, 20])
                         .translate([width / 2, height / 2]);

  var path = d3.geoPath()
               .pointRadius(2)
               .projection(projection);
  var svg = d3.select("#map")
              .append("svg")
              .attr("width", width)
              .attr("height", height);
  //var svg = d3.select("#map")
  //            .append("svg")
  //            .attr("width", width)
  //            .attr("height", height);

  //var dropDown = d3.select("#dropdown");
  //val = dropDown.node().value;
  var legenddata = {"Beijing":['New York', 'Los Angeles', 'Chicago', 'San Francisco','Boston'],
                    "Shanghai":['New York', 'Los Angeles', 'Chicago', 'San Francisco','Boston'],
                    "HongKong":['Los Angeles', 'New York', 'San Francisco', 'Chicago','Seattle'],
                    "Nanjing":['New York', 'Los Angeles', 'Allentown', 'Boston','Chicago'],
                    "Guangzhou":['New York', 'Los Angeles', 'San Francisco', 'Boston','Chicago'],
                    "Chengdu":['New York', 'Los Angeles', 'Chicago', 'Boston','San Francisco'],
                    "Wuhan":['New York', 'Los Angeles', 'San Francisco', 'Boston','Columbus'],
                    "Shenzhen":['New York', 'Los Angeles', 'San Francisco', 'Boston','Chicago'],
                    "Hangzhou":['New York', 'Los Angeles', 'San Francisco', 'Chicago','Boston'],
                    "Xi\'an":['New York', 'Los Angeles', 'Chicago', 'Boston','Lincoln'],
                    "Shenyang":['Los Angeles', 'San Francisco', 'New York', 'Chicago','San Diego'],
                    "Tianjing":['New York', 'Los Angeles', 'Boston', 'Miami','San Francisco'],
                    "Dalian":['Springfield', 'New York', 'Los Angeles', 'San Francisco','Chicago'],
                    "Qingdao":['Los Angeles', 'New York', 'San Francisco', 'Columbus','Boston'],
                    "Chongqing":['Los Angeles', 'New York', 'Lansing', 'Bloomington','Boston'],
                    "Suzhou":['Los Angeles', 'New York', 'Lansing', 'Bloomington','Boston'],
                    "Jinan":['New York', 'Los Angeles', 'Bloomington', 'Boston','Lafayette'],
                    "Changsha":['New York', 'Los Angeles', 'Chicago', 'Boston','San Francisco'],
                    "Zhengzhou":['New York', 'Los Angeles', 'Boston', 'Bloomington','San Francisco'],
                    "Hefei":['Allentown','New York', 'Los Angeles', 'Boston', 'Bloomington'],
                    "Ningbo":['New York', 'Bloomington','Los Angeles', 'Boston', 'Lansing'],
                    "Harbin":['Chicago', 'New York','Los Angeles', 'Boston', 'San Francisco'],
                    "Changchun":['New York', 'Chicago', 'Atlanta', 'Boston','Los Angeles'],
                    "Wuxi":['New York', 'Los Angeles', 'Chicago', 'Boston','San Francisco'],
                    "Fuzhou":['New York', 'Los Angeles', 'Chicago', 'San Francisco','Allentown'],
                    "Taiyuan":['New York', 'Boston', 'Los Angeles', 'Chicago', 'Chamaign'],
                    "Shijiazhuang":['New York', 'Chicago', 'Lansing', 'Boston', 'Los Angeles']
                    };

  var arcdata = {"Shanghai":
                 [[[121.80151876057847,31.152309029553294], [-73.77813909999998,40.64131109999999]],
                 [[121.80151876057847,31.152309029553294], [-118.40246854852198,33.94417425435857]],
                 [[121.80151876057847,31.152309029553294], [-87.90513439065003,41.97652910238031]],
                 [[121.80151876057847,31.152309029553294], [-122.38347034444935,37.61702508680535]],
                 [[121.80151876057847,31.152309029553294], [-71.43752390918567,42.92791399458855]]],
                 "HongKong":
                 [[[113.93501638737635,22.315332828086753], [-73.77813909999998,40.64131109999999]],
                 [[113.93501638737635,22.315332828086753], [-118.40246854852198,33.94417425435857]],
                 [[113.93501638737635,22.315332828086753], [-122.30228972292387,47.44358191272591]],
                 [[113.93501638737635,22.315332828086753], [-122.38347034444935,37.61702508680535]],
                 [[113.93501638737635,22.315332828086753], [-71.43752390918567,42.92791399458855]]],
                 "Nanjing":
                 [[[118.86610214690592,31.73532492961766], [-73.77813909999998,40.64131109999999]],
                 [[118.86610214690592,31.73532492961766], [-118.40246854852198,33.94417425435857]],
                 [[118.86610214690592,31.73532492961766], [-80.2561290571918,40.496051891528495]],
                 [[118.86610214690592,31.73532492961766], [-87.90513439065003,41.97652910238031]],
                 [[118.86610214690592,31.73532492961766], [-71.43752390918567,42.92791399458855]]],
                 "Guangzhou":
                 [[[113.29751655217066,23.3891511573243], [-73.77813909999998,40.641311099999996]],
                 [[113.29751655217066,23.3891511573243], [-118.40246854852198,33.94417425435857]],
                 [[113.29751655217066,23.3891511573243], [-87.90513439065003,41.97652910238031]],
                 [[113.29751655217066,23.3891511573243], [-122.38347034444935,37.61702508680535]],
                 [[113.29751655217066,23.3891511573243], [-71.43752390918567,42.92791399458855]]],
                 "Chengdu":
                 [[[103.95613648169501,30.581071264746427], [-73.77813909999998,40.64131109999999]],
                 [[103.95613648169501,30.581071264746427], [-118.40246854852198,33.94417425435857]],
                 [[103.95613648169501,30.581071264746427], [-87.90513439065003,41.97652910238031]],
                 [[103.95613648169501,30.581071264746427], [-122.38347034444935,37.61702508680535]],
                 [[103.95613648169501,30.581071264746427], [-71.43752390918567,42.92791399458855]]],
                 "Wuhan":
                 [[[114.21244950000005,30.7766171], [-73.77813909999998,40.64131109999999]],
                 [[114.21244950000005,30.7766171], [-118.40246854852198,33.94417425435857]],
                 [[114.21244950000005,30.7766171], [-82.8840306426634,39.9981181922432]],
                 [[114.21244950000005,30.7766171], [-122.38347034444935,37.61702508680535]],
                 [[114.21244950000005,30.7766171], [-71.43752390918567,42.92791399458855]]],
                 "Shenzhen":
                 [[[113.81585275108512,22.64650771478675], [-73.77813909999998,40.64131109999999]],
                 [[113.81585275108512,22.64650771478675], [-118.40246854852198,33.94417425435857]],
                 [[113.81585275108512,22.64650771478675], [-87.90513439065003,41.97652910238031]],
                 [[113.81585275108512,22.64650771478675], [-122.38347034444935,37.61702508680535]],
                 [[113.81585275108512,22.64650771478675], [-71.43752390918567,42.92791399458855]]],
                 "Hangzhou":
                 [[[120.43209737631294,30.235186279041436], [-73.77813909999998,40.64131109999999]],
                 [[120.43209737631294,30.235186279041436], [-118.40246854852198,33.94417425435857]],
                 [[120.43209737631294,30.235186279041436], [-87.90513439065003,41.97652910238031]],
                 [[120.43209737631294,30.235186279041436], [-122.38347034444935,37.61702508680535]],
                 [[120.43209737631294,30.235186279041436], [-71.43752390918567,42.92791399458855]]],
                 "Xi\'an":
                 [[[108.75581134215064,34.442939105442214], [-73.77813909999998,40.64131109999999]],
                 [[108.75581134215064,34.442939105442214], [-118.40246854852198,33.94417425435857]],
                 [[108.75581134215064,34.442939105442214], [-87.90513439065003,41.97652910238031]],
                 [[108.75581134215064,34.442939105442214], [-98.31829949999997, 40.97025]],
                 [[108.75581134215064,34.442939105442214], [-71.43752390918567,42.92791399458855]]],
                 "Shenyang":
                 [[[123.4879744303385,41.634789133958215], [-73.77813909999998,40.64131109999999]],
                 [[123.4879744303385,41.634789133958215], [-118.40246854852198,33.94417425435857]],
                 [[123.4879744303385,41.634789133958215], [-87.90513439065003,41.97652910238031]],
                 [[123.4879744303385,41.634789133958215], [-117.19751102573103,32.73226455701319]],
                 [[123.4879744303385,41.634789133958215], [-71.43752390918567,42.92791399458855]]],
                 "Tianjing":
                 [[[117.35919999999999,39.130406], [-73.77813909999998,40.64131109999999]],
                 [[117.35919999999999,39.130406], [-118.40246854852198,33.94417425435857]],
                 [[117.35919999999999,39.130406], [-122.30228972292387,47.44358191272591]],
                 [[117.35919999999999,39.130406], [-122.38347034444935,37.61702508680535]],
                 [[117.35919999999999,39.130406], [-71.43752390918567,42.92791399458855]]],
                 "Dalian":
                 [[[121.53891378010117,38.96157023002216], [-73.77813909999998,40.64131109999999]],
                 [[121.53891378010117,38.96157023002216], [-118.40246854852198,33.94417425435857]],
                 [[121.53891378010117,38.96157023002216], [-87.90513439065003,41.97652910238031]],
                 [[121.53891378010117,38.96157023002216], [-122.38347034444935,37.61702508680535]],
                 [[121.53891378010117,38.96157023002216], [-97.4287387683976,37.6529279603903]]],
                 "Qingdao":
                 [[[120.3806859490605,36.267757808103866], [-73.77813909999998,40.64131109999999]],
                 [[120.3806859490605,36.267757808103866], [-118.40246854852198,33.94417425435857]],
                 [[120.3806859490605,36.267757808103866], [-82.8840306426634,39.9981181922432]],
                 [[120.3806859490605,36.267757808103866], [-122.38347034444935,37.61702508680535]],
                 [[120.3806859490605,36.267757808103866], [-71.43752390918567,42.92791399458855]]],
                 "Chongqing":
                 [[[106.63801970481096,29.724042224168777], [-73.77813909999998,40.64131109999999]],
                 [[106.63801970481096,29.724042224168777], [-118.40246854852198,33.94417425435857]],
                 [[106.63801970481096,29.724042224168777], [-86.29559519999998, 39.7168593]],
                 [[106.63801970481096,29.724042224168777], [-83.00396814177334,42.40909384319068]],
                 [[106.63801970481096,29.724042224168777], [-71.43752390918567,42.92791399458855]]],
                 "Beijing":
                 [[[116.58817400466103,40.07876633633102], [-73.77813909999998,40.64131109999999]],
                 [[116.58817400466103,40.07876633633102], [-118.40246854852198,33.94417425435857]],
                 [[116.58817400466103,40.07876633633102], [-87.90513439065003,41.97652910238031]],
                 [[116.58817400466103,40.07876633633102], [-122.38347034444935,37.61702508680535]],
                 [[116.58817400466103,40.07876633633102], [-71.43752390918567,42.92791399458855]]],
                 "Suzhou":
                 [[[120.43526739999993, 31.4986257], [-73.77813909999998,40.64131109999999]],
                 [[120.43526739999993, 31.4986257], [-118.40246854852198,33.94417425435857]],
                 [[120.43526739999993, 31.4986257], [-86.29559519999998, 39.7168593]],
                 [[120.43526739999993, 31.4986257], [-82.8840306426634,39.9981181922432]],
                 [[120.43526739999993, 31.4986257], [-71.43752390918567,42.92791399458855]]],
                 "Jinan":
                 [[[117.21600339999998,36.8572006], [-73.77813909999998,40.64131109999999]],
                 [[117.21600339999998,36.8572006], [-118.40246854852198,33.94417425435857]],
                 [[117.21600339999998,36.8572006], [-86.29559519999998, 39.7168593]],
                 [[117.21600339999998,36.8572006], [-82.8840306426634,39.9981181922432]],
                 [[117.21600339999998,36.8572006], [-71.43752390918567,42.92791399458855]]],
                 "Changsha":
                 [[[113.21405420325205,28.189921861945066], [-73.77813909999998,40.64131109999999]],
                 [[113.21405420325205,28.189921861945066], [-118.40246854852198,33.94417425435857]],
                 [[113.21405420325205,28.189921861945066], [-87.90513439065003,41.97652910238031]],
                 [[113.21405420325205,28.189921861945066], [-122.38347034444935,37.61702508680535]],
                 [[113.21405420325205,28.189921861945066], [-71.43752390918567,42.92791399458855]]],
                 "Zhengzhou":
                 [[[113.84183130284451,34.52630271989567], [-73.77813909999998,40.64131109999999]],
                 [[113.84183130284451,34.52630271989567], [-118.40246854852198,33.94417425435857]],
                 [[113.84183130284451,34.52630271989567], [-122.30228972292387,47.44358191272591]],
                 [[113.84183130284451,34.52630271989567], [-122.38347034444935,37.61702508680535]],
                 [[113.84183130284451,34.52630271989567], [-71.43752390918567,42.92791399458855]]],
                 "Hefei":
                 [[[117.30419701588772,31.77985767957784], [-73.77813909999998,40.64131109999999]],
                 [[117.30419701588772,31.77985767957784], [-118.40246854852198,33.94417425435857]],
                 [[117.30419701588772,31.77985767957784], [-80.2561290571918,40.496051891528495]],
                 [[117.30419701588772,31.77985767957784], [-87.90513439065003,41.97652910238031]],
                 [[117.30419701588772,31.77985767957784], [-71.43752390918567,42.92791399458855]]],
                 "Ningbo":
                 [[[121.46181938848366,29.820823190686056], [-73.77813909999998,40.64131109999999]],
                 [[121.46181938848366,29.820823190686056], [-118.40246854852198,33.94417425435857]],
                 [[121.46181938848366,29.820823190686056], [-86.29559519999998, 39.7168593]],
                 [[121.46181938848366,29.820823190686056], [-83.00396814177334,42.40909384319068]],
                 [[121.46181938848366,29.820823190686056], [-71.43752390918567,42.92791399458855]]],
                 "Harbin":
                 [[[126.2369830308627,45.62060117232452], [-73.77813909999998,40.64131109999999]],
                 [[126.2369830308627,45.62060117232452], [-118.40246854852198,33.94417425435857]],
                 [[126.2369830308627,45.62060117232452], [-87.90513439065003,41.97652910238031]],
                 [[126.2369830308627,45.62060117232452], [-122.38347034444935,37.61702508680535]],
                 [[126.2369830308627,45.62060117232452], [-71.43752390918567,42.92791399458855]]],
                 "Changchun":
                 [[[125.69045681299836,43.99301147957697], [-73.77813909999998,40.64131109999999]],
                 [[125.69045681299836,43.99301147957697], [-118.40246854852198,33.94417425435857]],
                 [[125.69045681299836,43.99301147957697], [-87.90513439065003,41.97652910238031]],
                 [[125.69045681299836,43.99301147957697], [-84.42539743360473,33.64052908073521]],
                 [[125.69045681299836,43.99301147957697], [-71.43752390918567,42.92791399458855]]],
                 "Wuxi":
                 [[[120.43526739999993, 31.4986257], [-73.77813909999998,40.64131109999999]],
                 [[120.43526739999993, 31.4986257], [-118.40246854852198,33.94417425435857]],
                 [[120.43526739999993, 31.4986257], [-87.90513439065003,41.97652910238031]],
                 [[120.43526739999993, 31.4986257], [-122.38347034444935,37.61702508680535]],
                 [[120.43526739999993, 31.4986257], [-71.43752390918567,42.92791399458855]]],
                 "Fuzhou":
                 [[[119.6680438209992,25.931823314814313], [-73.77813909999998,40.64131109999999]],
                 [[119.6680438209992,25.931823314814313], [-118.40246854852198,33.94417425435857]],
                 [[119.6680438209992,25.931823314814313], [-87.90513439065003,41.97652910238031]],
                 [[119.6680438209992,25.931823314814313], [-122.38347034444935,37.61702508680535]],
                 [[119.6680438209992,25.931823314814313], [-83.00396814177334,42.40909384319068]]],
                 "Taiyuan":
                 [[[112.62589153931525,37.754511779151215], [-73.77813909999998,40.64131109999999]],
                 [[112.62589153931525,37.754511779151215], [-118.40246854852198,33.94417425435857]],
                 [[112.62589153931525,37.754511779151215], [-87.90513439065003,41.97652910238031]],
                 [[112.62589153931525,37.754511779151215], [-122.38347034444935,37.61702508680535]],
                 [[112.62589153931525,37.754511779151215], [-71.43752390918567,42.92791399458855]]],
                 "Shijiazhuang":
                 [[[114.6922665989016,38.27814091311202], [-73.77813909999998,40.64131109999999 ]],
                 [[114.6922665989016,38.27814091311202], [-118.40246854852198,33.94417425435857]],
                 [[114.6922665989016,38.27814091311202], [-86.29559519999998, 39.7168593]],
                 [[114.6922665989016,38.27814091311202], [-83.00396814177334,42.40909384319068]],
                 [[114.6922665989016,38.27814091311202], [-71.43752390918567,42.92791399458855]]]
                };


  function loaded(error, countries, airports) {



    svg.append("g")
       .attr("class", "countries")
       .selectAll("path")
       .data(topojson.feature(countries, countries.objects.countries).features)
       .enter()
       .append("path")
       .attr("d", path);

    svg.append("g")
       .attr("class", "airports")
       .selectAll("path")
       .data(topojson.feature(airports, airports.objects.airports).features)
       .enter()
       .append("path")
       .attr("id", function(d) {return d.id;})
       .attr("d", path);

    var svgtext1 = svg.append("text");
    var svgtext2 = svg.append("text");
    var svgtext3 = svg.append("text");
    var svgtext4 = svg.append("text");
    var svgtext5 = svg.append("text");
    var svgtext6 = svg.append("text");
    var svgarray = [svgtext2, svgtext3, svgtext4, svgtext5, svgtext6]

    svgtext1.attr("x", 400)
           .attr("y", 350)
           .text("The top 5 areas "+ val+" students study at:")
           .style("fill", "white");

    for (var i = 0; i < legenddata[val].length; i++) {
      svgarray[i].attr("x", 400)
           .attr("y", 350+(i+1)*20)
           .text((i+1)+"."+ legenddata[val][i])
           .style("fill", "white");
    }


    function transition(plane, route) {
      var l = route.node().getTotalLength();
      repeat();
      function repeat() {
          plane.transition()
           .duration(5000)
           .attrTween("transform", delta(route.node()))
           .on("end", repeat);
      };

    };

    function delta(path) {
      var l = path.getTotalLength();
      return function(i) {
        return function(t) {
          //var p = path.getPointAtLength(t * l);
          //return "translate(" + p.x + "," + p.y + ")";
          var p = path.getPointAtLength(t * l);
          var t2 = Math.min(t + 0.05, 1);
          var p2 = path.getPointAtLength(t2 * l);

          var x = p2.x - p.x ;
          var y = p2.y - p.y ;
          var r = 90 - Math.atan2(-y, x) * 180 / Math.PI;

          var s = Math.min(Math.sin(Math.PI * t) * 0.7, 0.3);
          return "translate(" + p.x + "," + p.y + ") scale(" + s + ") rotate(" + r + ")";
        };
      };
    };


    //transition(plane, route);
    for (var i = 0; i < arcdata[val].length; i++) {
      //console.log(path);
      var route = svg.append("path")
           .datum({type: "LineString", coordinates: arcdata[val][i]})
           .attr("class", "route")
           .attr("d", path)
      var plane = svg.append("path")
               .attr("class", "plane")
               .attr("d", "m25.21488,3.93375c-0.44355,0 -0.84275,0.18332 -1.17933,0.51592c-0.33397,0.33267 -0.61055,0.80884 -0.84275,1.40377c-0.45922,1.18911 -0.74362,2.85964 -0.89755,4.86085c-0.15655,1.99729 -0.18263,4.32223 -0.11741,6.81118c-5.51835,2.26427 -16.7116,6.93857 -17.60916,7.98223c-1.19759,1.38937 -0.81143,2.98095 -0.32874,4.03902l18.39971,-3.74549c0.38616,4.88048 0.94192,9.7138 1.42461,13.50099c-1.80032,0.52703 -5.1609,1.56679 -5.85232,2.21255c-0.95496,0.88711 -0.95496,3.75718 -0.95496,3.75718l7.53,-0.61316c0.17743,1.23545 0.28701,1.95767 0.28701,1.95767l0.01304,0.06557l0.06002,0l0.13829,0l0.0574,0l0.01043,-0.06557c0,0 0.11218,-0.72222 0.28961,-1.95767l7.53164,0.61316c0,0 0,-2.87006 -0.95496,-3.75718c-0.69044,-0.64577 -4.05363,-1.68813 -5.85133,-2.21516c0.48009,-3.77545 1.03061,-8.58921 1.42198,-13.45404l18.18207,3.70115c0.48009,-1.05806 0.86881,-2.64965 -0.32617,-4.03902c-0.88969,-1.03062 -11.81147,-5.60054 -17.39409,-7.89352c0.06524,-2.52287 0.04175,-4.88024 -0.1148,-6.89989l0,-0.00476c-0.15655,-1.99844 -0.44094,-3.6683 -0.90277,-4.8561c-0.22699,-0.59493 -0.50356,-1.07111 -0.83754,-1.40377c-0.33658,-0.3326 -0.73578,-0.51592 -1.18194,-0.51592l0,0l-0.00001,0l0,0z");

      transition(plane, route);

    };

  };

  queue().defer(d3.json, "data/countries.topo.json")
         .defer(d3.json, "data/airports_rev.topo.json")
         .await(loaded);

  dropDown.on("change", function(){
    // remove using class
    d3.select("#map").selectAll('.route').remove();
    d3.select("#map").selectAll('.plane').remove();
    // remove using label
    d3.select("#map").selectAll('text').remove();
    val = dropDown.node().value;
    console.log(val);
    queue().defer(d3.json, "data/countries.topo.json")
         .defer(d3.json, "data/airports_rev.topo.json")
         .await(loaded);
  });
})
