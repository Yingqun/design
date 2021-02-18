var googleMap = {
    show: function() {
        console.log('开始渲染谷歌地图');
    }
}
var baiduMap = {
    show: function() {
        console.log('开始渲染百度地图');
    }
}

// var renderMap1 = function(type) {
//     if(type == 'google') {
//         googleMap.show();
//     }else if (type == 'baidu') {
//         baiduMap.show();
//     }
// }
// renderMap1('google');
// renderMap2('baidu');

//多肽模式 抽离出来
var renderMap2 = function( map ) {
    if(map.show instanceof Function) {
        map.show()
    }
}
renderMap2( googleMap );
renderMap2( baiduMap );