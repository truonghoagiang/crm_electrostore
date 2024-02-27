$(document).ready(function(){
    $.ajax({
        url: "http://localhost:8080/api/user",
        method: "get"
    }).done(function(result){
        console.log("server tra ve ", result.data)
        var listUser = result.data
        var html = ""
        for(i=0;i<listUser.length;i++){
            html += `<tr>
            <td>${i + 1}</td>
            <td>${listUser[i].fullname}</td>
            <td>${listUser[i].email}</td>
            <td>${listUser[i].password}</td>
            <td>${listUser[i].phone}</td>
            <td>${listUser[i].role}</td>
            <td>
                <a href="#" class="btn btn-sm btn-primary">Sửa</a>
                <a href="#"  id-user="${listUser[i].id}" class="btn btn-sm btn-danger btn-delete">Delete</a>
                <a href="user-details.html" class="btn btn-sm btn-info">Xem</a>
            </td>
        </tr>`;
        }
        $('#user-data').append(html)
    })

    $.ajax({
        url: "http://localhost:8080/api/user/add-user",
        method: "get"
    }).done(function(result){
        var listRole = result.data
        var html = ""
        for(i=0;i<listRole.length;i++){
            // var jsonRole = JSON.stringify(listRole[i]);
            html += `<option value="${listRole[i].id}">${listRole[i].name}</option>`;
        }
        $('#role').append(html)
        
    })
    $(document).on('change','#role',function(){
        var fullname = $("#fullname").val();
        var email= $("#email").val();
        var password = $("#password").val();
        var phone= $("#phone").val();
        var role = $('#role option:selected').val();
        console.log(role);

        $(".btn-add").click(function(){
            $.ajax({
                url: "http://localhost:8080/api/user/add-user",
                method: "POST",
                data: {
                    fullname: fullname,
                    email: email,
                    password: password,
                    phone: phone,
                    idRole: role
                }
            })
        })
    }) 
})

$(document).on("click",".btn-delete", function(){
    var id = $(this).attr("id-user");
    var This = $(this);  
    var currentRow = $(this).closest("tr");      
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/api/user/delete/" + id,
        success: function(){
            currentRow.remove();
        }
    })
})