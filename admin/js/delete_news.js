function delete_news(id){
    $.ajax({
        url: "api/delete_news.php",
        method: 'POST',
        data: {
            id:id
        },
        async: false,
        success: function(data){
            alert("Success");
            get_news();
        }
    })
}