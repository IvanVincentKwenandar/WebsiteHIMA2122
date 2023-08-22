function get_news(){
    $.ajax({
        url: "api/get_news.php",
        method: "GET",
        success: function(data){
            
            
            //$("#news-container").html(' ');
            data.forEach(function(news){
                var row = $(`<div class="card mb-3 bg-dark" style="max-width: 750px;">
                
            </div>`);
                
                var sect1 = $(`<div class="col-md-12">

                </div>`);
                var sect2 = $(`<div class="row g-0">
                  
                </div>`);
                var body = $("<div class='card-body'></div>")
                var title = news['judul'];
                var desc = news['desc'];
                var file = news['file'];
                var time = news['time'];

                var header = $("<h5 class='card-title'>"+title+"</h5>");
                time = $(`<p class="card-text" id="uploadTime"><small class="text-muted">`+time+"</small></p>");
                var isi =$("<p class='card-text' id='isiNews'>"+desc+"</p>");

                header.appendTo(body);
                if(file != '-'){
                    file = $("<img src='"+file+"' style='width:100%'>");
                    file.appendTo(body);
                }
                isi.appendTo(body);
                
                

                
                time.appendTo(body);
                body.appendTo(sect1);
                sect1.appendTo(sect2);
                sect2.appendTo(row);
                
                $("#news-container").append(row);
            });
            
        }
    })
}

get_news();