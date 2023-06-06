jQuery(document).ready(function()
{
    $('#userForm').submit(function(e) {
        e.preventDefault(); 
    var formData={
      name:$("#name").val(),
       class:$("#class").val(),
        marks:$("#marks").val(),
       collegeName:$("#collegename").val(),
        city:$("#city").val(),
    } 
       console.log(formData.name)
        addUser(formData);
    
        $('#name').val('');
        $('#email').val('');
      });
})