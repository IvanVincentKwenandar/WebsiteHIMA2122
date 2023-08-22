function add_news(){
    
    var fd = new FormData();

    //File
    var file = $('#inputFile')[0].files;
    var file_name = $('#inputFile').val();

    var title = $('#title').val();
    var desc = $('#desc').val();


    var ekstension = ['JPG','JPEG','PNG', 'PDF','jpg','jpeg','png', 'pdf'];

    // Check file selected or not
    if(file.length > 0  ){
        fd.append('file',file[0]);
        fd.append('title',title);
        fd.append('desc', desc);
        fd.append('addFile',1);

        var ext_file = file_name.split('.').pop();


        if(ekstension.indexOf(ext_file) != -1){
           
                $.ajax({
                    url: 'api/add_news.php',
                    data:fd,
                    method:'POST',
                    contentType: false,
                    processData: false,

                    success:function(data){
                        alert("success");
                        get_news();
                        
                    },
                    error:function($xhr, textStatus, errorThrown) {
                        alert("Access Denied");
                    }
                })
        }else{
            alert("Please Choose the right extension");
        }

    }else{
        fd.append('title',title);
        fd.append('desc', desc);
        fd.append('addFile',0);

        $.ajax({
            url: 'api/add_news.php',
            data:fd,
            method:'POST',
            contentType: false,
            processData: false,

            success:function(data){
                alert("success");
                get_news();
                
            },
            error:function($xhr, textStatus, errorThrown) {
                alert("Access Denied");
            }
        })
    }
    
}