$(document).ready(function(){
    $.ajax({
        url: "http://localhost:8080/api/category",
        method: "get"
    }).done(function(result){
        console.log("server tra ve ", result.data)
        var listCategory = result.data
        var html = ""
        for(i=0;i<listCategory.length;i++){
            // var jsonRole = JSON.stringify(listRole[i]);
            // html += `<option value="${listRole[i].id}">${listRole[i].name}</option>`;
            html += `<tr>
                        <td>${listCategory[i].id}</td>
                        <td>${listCategory[i].name}</td>
                        <td>${listCategory[i].desc}</td>
                        <td>
                            <a href="#" class="btn btn-sm btn-primary">Sửa</a>
                            <a href="#" class="btn btn-sm btn-danger">Xóa</a>
                        </td>
                    </tr>`;
        }
        $('#category').append(html)
        $("table[id=example] > tbody > tr:first-child").remove();
        
    })

    $(".btn-save").click(function(){
        var name = $("#name").val()
        var disc = $("#desc").val()
        $.ajax({
            url: "http://localhost:8080/api/category/add-category",
            method: "post",
            data: {
                name: name,
                disc: disc
            }
        }).done(function(data){
            console.log("server tra ve ", data),
            localStorage.setItem('token', JSON.stringify(data))
            
        })
    })

})