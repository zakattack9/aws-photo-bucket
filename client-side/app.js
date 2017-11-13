// endpoint for lambda https://1zguq18qmj.execute-api.us-west-2.amazonaws.com/dev/users/photos
$('button').click(function(){
	$.ajax({
		url: "https://1zguq18qmj.execute-api.us-west-2.amazonaws.com/dev/users/photos",
		type: 'GET',
		success: data => data.message.Contents.map(currVal => generateImg(`https://s3-us-west-2.amazonaws.com/photo-bucket-tmp-prjct/${currVal.Key}`)),
		dataType: 'JSON'
	})
});

let generateImg = image => {
	$("#pictures").append($(`<img class="image" src="${image}"/>`).hide().fadeIn(500));
}

