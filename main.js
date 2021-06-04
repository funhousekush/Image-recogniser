Webcam.set(
{
    height: 350,
    width: 300,
    image_format:"jpg",
    jpg_quality: 90,

    constraints:
    {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_kushsnap()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}