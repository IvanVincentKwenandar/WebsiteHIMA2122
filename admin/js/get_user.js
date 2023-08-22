function get_user(){

    $.ajax({
        url: 'api/get_user.php',
        method: 'GET',
        success: function (data) {
            $("#nama").html(data['nama']);
            $("#divisi").html(data['departement']);
            $("#jabatan").html(data['jabatan']);
            
        },
        error: function ($xhr, textStatus, errorThrown) {
            alert($xhr.responseJSON['error']);
        }
    });


}

get_user();