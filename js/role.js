$(document).ready(function(){
    $.ajax({
        url: "http://localhost:8080/api/role",
        method: "get"
    }).done(function(result){
        console.log("server tra ve ", result.data)
        var listRole = result.data
        var html = ""
        for(i=0;i<listRole.length;i++){
            html += `<tr>
                        <td>${listRole[i].id}</td>
                        <td>${listRole[i].name}</td>
                        <td>${listRole[i].desc}</td>
                        <td>
                            <a href="#" class="btn btn-sm btn-primary">Edit</a>
                            <a href="#" id-role=${listRole[i].id} class="btn btn-sm btn-danger btn-delete">Delete</a>
                        </td>
                    </tr>`;
        }
        $('#roledata').append(html)
        
    })

    $(".btn-save").click(function(){
        var name = $("#name").val()
        var desc = $("#desc").val()
        $.ajax({
            url: "http://localhost:8080/api/role/add-role",
            method: "post",
            data: {
                name: name,
                desc: desc
            }
        }).done(function(data){
            console.log("server tra ve ", data),
            localStorage.setItem('token', JSON.stringify(data))
            
        })
    })

})
$(document).on("click",".btn-delete", function(){
    var id = $(this).attr("id-role");
    var This = $(this);  
    var currentRow = $(this).closest("tr");      
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/api/role/delete/" + id,
        success: function(){
            currentRow.remove();
        }
    })
})