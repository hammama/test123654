function hideTextArea(param) {
    switch (param) {
        case 'oceane':
            $('.summer-os').attr('class', 'summer-os d-none justify-content-center mt-2');
            document.getElementById("stateos").className = "d-flex justify-content-center mt-10 text-success";
            break;
        case 'robot':
            $('.summer-robo').attr('class', 'summer-robo d-none justify-content-center mt-2');
            document.getElementById("staterobo").className = "d-flex justify-content-center mt-10 text-success";
            break;
		case 'anritsu':
            $('.summer-anr').attr('class', 'summer-anr d-none justify-content-center mt-2');
            document.getElementById("stateanri").className = "d-flex justify-content-center mt-10 text-success";
            break;
	
        default: break;
    }
}
function showTextArea(param) {
    switch (param) {
        case 'oceane':
            $('.summer-os').attr('class', 'summer-os d-block justify-content-center mt-2');
            $('#descriptionos').summernote();
            document.getElementById("stateos").className = "d-flex justify-content-center mt-10 text-danger";
            break;
        case 'robot':
            $('.summer-robo').attr('class', 'summer-robo d-block justify-content-center mt-2');
            $('#descriptionRobot').summernote();
            document.getElementById("staterobo").className = "d-flex justify-content-center mt-10 text-danger";
            break;
		case 'anritsu':
            $('.summer-anr').attr('class', 'summer-anr d-block justify-content-center mt-2');
            $('#descriptionanr').summernote();
            document.getElementById("stateanri").className = "d-flex justify-content-center mt-10 text-danger";
            break;
			
        default: break;
    }
}

function summernote() {
    $('.description').summernote();
}

function send(title) {
    //here you can make a post query to your php side, and the php will send the email
    console.log('oceane description: ', document.getElementById("descriptionos").value);
    console.log('robot description: ', document.getElementById("descriptionRobot").value);
	console.log('anritsu description: ', document.getElementById("descriptionanr").value);
	

    var data = {
        "type": title,
        "oceaneDescription": document.getElementById("descriptionos").value,
        "robotDescription": document.getElementById("descriptionRobot").value
		"anritsuDescription": document.getElementById("descriptionanr").value
    };

    console.log('data: ', data);

    /***
     * in post function you will send data to index.php then you'll add condition ex: isset($_POST['title'])
     * then you'll add php code to send email to your static emails
     */
    /*
    $.post("/", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
    */
}