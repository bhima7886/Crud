jQuery(document).ready(function()
{
    $("#table").hide();
    const myArray=[];
   $(document).on('click','#submit',function(e)
   {
          e.preventDefault();
           var formData={
            Id:$("#txtId").val(),
            name:$("#txtName").val(),
            city:$("#txtCity").val(),
            year:$("#txtYear").val()
         }
        myArray.push(formData)
        console.log("Array",myArray)
   })

   $("#btn-read").on("click",function()
   {
      $("#table").show();
        myArray.forEach(function(item)
        {
           var row=$("<tr></tr>").attr("id","rowId");
           var cellId=$("<td></td>").text(item.Id).attr("id","cellId");
           var cellName=$("<td></td>").text(item.name).attr("id","cellId");
           var cellCity=$("<td></td>").text(item.city).attr("id","cellId");
           var cellYear=$("<td></td>").text(item.year).attr("id","cellId");
           
           row.append(cellId,cellName,cellCity,cellYear)
           $("#table").append(row);
            })
   })

})