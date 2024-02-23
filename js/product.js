$(document).ready(function(){
    $.ajax({
        url: "http://localhost:8080/api/product",
        method: "get"
    }).done(function(result){
        console.log("server tra ve ", result.data)
        var listProduct = result.data
        var html = ""
        for(i=0;i<listProduct.length;i++){
            html += `<tr>
            <td>${i + 1}</td>
            <td><img class = "image" src="${listProduct[i].image}" alt="IMG-PRODUCT"></td>
            <td>${listProduct[i].title}</td>
            <td>${listProduct[i].import_price}</td>
            <td>${listProduct[i].retail_price}</td>
            <td>${listProduct[i].color}</td>
            <td>${listProduct[i].storage}</td>
            <td>${listProduct[i].memory}</td>
            <td>${listProduct[i].quantity}</td>
            <td>${listProduct[i].import_date}</td>
            <td>${listProduct[i].category}</td>
            <td>
                <a href="#" class="btn btn-sm btn-primary">Sửa</a>
                <a href="#" class="btn btn-sm btn-danger">Xóa</a>
                <a href="user-details.html" class="btn btn-sm btn-info">Xem</a>
            </td>
        </tr>`;
        }
        $('#productdata').append(html)
    })
    $.ajax({
        url: "http://localhost:8080/api/product/add-product",
        method: "get"
    }).done(function(result){
        //console.log("server tra ve ", result.data)
        var listRole = result.data
        var html = ""
        for(i=0;i<listRole.length;i++){
            // var jsonRole = JSON.stringify(listRole[i]);
            html += `<option value="${listRole[i].id}">${listRole[i].name}</option>`;
            //console.log(html);
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
                url: "http://localhost:8080/api/product/add-product",
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