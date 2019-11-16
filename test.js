$('th:contains("Died")').parent().hide()
$('th:contains("death")').parent().hide()
$('th:contains("Resting place")').parent().hide()

$('td:contains("death")').parent().hide()

$('span:contains("Death")').parent().hide()

$('p').not('.infobox p').first().html(function() {
	return $(this).html().replace('was', 'is')
})

var hidden = ['died','remains','funeral','death','autopsy','suicide','cremated','interred','mausoleum']
hidden.forEach(function(word) {
	$('p:contains('+word+')').hide()
	$('li:contains('+word+')').hide()
	$('span:contains('+word+')').hide()	
})

$('p').each(function() {
    var html = $(this).html()
    $(this).html(html.replace('was survived by', 'lives with'))
    $(this).html(html.replace(/(&nbsp;| )– [0-9a-zA-Z, ]+\)/, ')'))
})


$("<html><head></head><div class='overlay' style='height: 100%; width: 100%; position: fixed; z-index: 1; left: 0; top: 0; background-color: rgb(0,0,0); background-color: rgba(0,0,0, 0.9); overflow-x: hidden; transition: 0.5s;'><div class='popup-overlay active' style='position: absolute; padding: 2em; font-family: Helvetica; background: #ffffff; top: 5%; width: 50%; height: 50%; left: 25%; background-color: lightblue; color: rgb(10,10,50); visibility: visible; text-align: center;'><!--Creates the popup content--> <div class='popup-content active' style='visibility: visible;'>    <h2>How much time do you want to spend here?</h2>    <input type='number'> <span>minutes<br><br>   <!--popup's close button-->    <button class='go' style='display: inline-block; vertical-align: middle; border-radius: 3px; margin: .20rem; font-size: 1rem; color: #fff; font-weight: bold; background: rgb(10,10,80); border: none; padding: 0.5em;'>Go</button>    </span></div></div></div><script>$('.go, .popup').on('click', function(){$('.popup-overlay, .popup-content').removeClass('active');$('.popup-overlay, .popup-content').css('visibility', 'hidden');});</script></html>").appendTo(document.body);

$('.go, .popup').on('click', function(){
	$('.popup-overlay, .popup-content').removeClass('active');
	$('.popup-overlay, .popup-content').css('visibility', 'hidden');
	$('.overlay').css('visibility', 'hidden');
});