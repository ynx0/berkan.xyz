$(document).ready(function() {
	$('#pagepiling').pagepiling({
        anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: ['#ce983a', '#485013', '#253c87', '#a22729'],
        navigation: {
            'position': 'right',
            'tooltips': ['Home', 'Space Invaders', 'SmartLib', 'Titan Power Up']
        },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });
});

