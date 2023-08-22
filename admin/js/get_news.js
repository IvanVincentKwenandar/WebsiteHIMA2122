function get_news(){

    $.ajax({
        url: 'api/get_news.php',
        method: 'GET',
        success: function (data) {
            var co = 1;
            $("#newstable").html(' ');
            data.forEach(function(news){
                var row = $("<tr scope='row'></tr>");
                var col1 = $("<td>"+ co + "</td>");
                var col2 = $("<td>" + news['time'] + "</td>");                       
                var col4 = $("<td>" + news['judul'] + "</td>");
                var col5 = $("<td>" + news['desc']+"</td>");
                var col6;
                if(news['file']=='-'){
                    col6 = $("<td>-</td>");

                }else{
                    col6 = $("<td><a href='../" + news['file']+"'>file</td>");
                }
                var col7 = $("<td><button type='button' class='btn btn-danger btn-sm m-0' onclick='delete_news("+news['id']+")'>Delete</button>");
                
                col1.appendTo(row);
                col2.appendTo(row);
                
                col4.appendTo(row);
                col5.appendTo(row);
                col6.appendTo(row);
                col7.appendTo(row);
                co++;
                $("#newstable").append(row);
            });
            
        },
        error: function ($xhr, textStatus, errorThrown) {
            alert($xhr.responseJSON['error']);
        }
    });


}

get_news();