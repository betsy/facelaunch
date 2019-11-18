

var url = window.location.href;
chrome.storage.sync.get(null, function(items) {
	console.log(items);
	if(jQuery.isEmptyObject(items)) return;
	var allKeys = Object.keys(items);
	var i;
    for (i = 0; i < allKeys.length; i++) {
    	console.log(allKeys[i]);
    	if(url.includes(allKeys[i]))
			$("<html><head><link href='https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap' rel='stylesheet'></head><div class='overlay' style='height: 100%; width: 100%; position: fixed; z-index: 1; left: 0; top: 0; background-image: url(https://images.unsplash.com/photo-1549074862-6173e20d02a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80); background-size:cover; overflow-x: hidden; transition: 0.5s;'><div class='popup-overlay active' style='position: absolute; padding: 2em; font-family: Roboto; font-style: light; background: #ffffff; top: 5%; width: 50%; height: 50%; left: 25%; background-color: #75B3C7; color: #ffffff; visibility: visible; text-align: center;'><!--Creates the popup content--> <div class='popup-content active' style='visibility: visible;'>    <div id='initial'>    <h2 style='font-size: 32px;'>How much time would you like to spend here?</h2>          <input id='input-minutes' type='number' style='padding: 12px 20px; margin: 8px auto; box-sizing: border-box; font-family: Roboto; font-style: light; font-size: 24px; border: 2px solid gray; border-radius: 4px;'> <span> <p class='min-text' style='font-size: 24px;'> minutes. </p><br><br>   <!--popup's close button-->    <button class='go' style='display: inline-block; vertical-align: middle; border-radius: 3px; margin: .20rem; font-size: 1rem; color: #fff; font-weight: bold; background: rgb(10,10,80); border: none; border-radius: 4px; padding: 12px 20px;'>Let's go</button>    </span></div>   <div id='timeup' style='visibility: hidden;'><h2 style='font-size: 32px;'>Time's up! What would you like to do next?</h2>   <button class='exit' style='display: inline-block; vertical-align: middle; border-radius: 3px; margin: .20rem; font-size: 1rem; color: #fff; font-weight: bold; background: rgb(10,10,80); border: none; border-radius: 4px; padding: 12px 20px;'>Exit</button>   <button class='snooze' style='display: inline-block; vertical-align: middle; border-radius: 3px; margin: .20rem; font-size: 1rem; color: #fff; font-weight: bold; background: rgb(60,60,100); border: none; border-radius: 4px; padding: 12px 20px;'>I'm almost done</button>   <button class='addTime' style='display: inline-block; vertical-align: middle; border-radius: 3px; margin: .20rem; font-size: 1rem; color: #fff; font-weight: bold; background: rgb(60,60,100); border: none; border-radius: 4px; padding: 12px 20px;'>Add more time</button></div></div></div><script>$('.go, .popup').on('click', function(){$('.popup-overlay, .popup-content').removeClass('active');$('.popup-overlay, .popup-content').css('visibility', 'hidden');});</script></div></html>").appendTo(document.body);
    }


	var time_remaining = -1;

	function outOfTime() {
	  $('.popup-overlay, .popup-content').addClass('active');
	  $('.popup-overlay, .popup-content').css('visibility', 'visible');
	  $('.overlay').css('visibility', 'visible');
	  $('#initial').css('display', 'none');
	  $('#timeup').css('visibility', 'visible');
	}


	$('.go, .popup').on('click', function(){
		$('.popup-overlay, .popup-content').removeClass('active');
		$('.popup-overlay, .popup-content').css('visibility', 'hidden');
		$('.overlay').css('visibility', 'hidden');
		$('#initial').css('display', 'block');
		$('#timeup').css('visibility', 'hidden');
		time_remaining = $('#input-minutes').val();
		setTimeout(outOfTime, time_remaining*1000);
	});

	$('.exit, .popup').on('click', function(){
		window.location.href="https://en.wikipedia.org/wiki/Special:Random";
	});

	$('.snooze, .popup').on('click', function(){
		$('.popup-overlay, .popup-content').removeClass('active');
		$('.popup-overlay, .popup-content').css('visibility', 'hidden');
		$('.overlay').css('visibility', 'hidden');
		$('#initial').css('display', 'block');
		$('#timeup').css('visibility', 'hidden');
		time_remaining = 5;
		setTimeout(outOfTime, time_remaining*1000);
	});

	$('.addTime, .popup').on('click', function(){
		$('#initial').css('display', 'block');
		$('#timeup').css('visibility', 'hidden');
	});

});
