function tomarFoto()
{
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        correctOrientation: true
});
}

function onSuccess(imageURI) {
	plugins.crop(successCrop, failCrop, imageURI, { quality: 100 });
}

function onFail(message) {
    alert('Failed because: ' + message);
}

function successCrop(newPath)
{
	var image = document.getElementById('myImage');
    image.src = newPath;
}

function failCrop(error)
{
	alert('Failed because: ' + error);
}