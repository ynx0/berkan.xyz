$(document).ready(function() {
	$('#pagepiling').pagepiling({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        sectionsColor: ['#ce983a', '#7b572f', '#485013', '#253c87', '#a22729', '#102877', '#111111'],
        navigation: {
            'position': 'right',
            'tooltips': ['Home', 'Mole Project', 'Space Invaders', 'SmartLib', 'Titan Power Up', 'Techno Titans', 'The Game Palace']
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
