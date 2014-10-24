$(document).ready(function () {
    $('#btnSubmit').click(function (e) {
        var name = $('#txtName').val();
        var email = $('#txtEmail').val();
        var phone = $('#txtPhone').val();
        var subject = $('#selSubject').val();
        var message = $('#txtMessage').val();
        var contactViaPhone = $('input[type=radio]:checked').val() === 'phone';

        var contactInfo = {
            Name: name,
            Email: email,
            Phone: phone,
            Subject: subject,
            Message: message,
            ContactViaPhone: contactViaPhone
        };

        $.ajax({
            url: 'Contact/SubmitContactInfo/',
            type: 'POST',
            data: contactInfo,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                alert(data);
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        });
    });
});