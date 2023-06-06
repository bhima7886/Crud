jQuery(document).ready(function() {
  var apiUrl = 'http://localhost:3000/student/get-record/'; 
  //var apiPostUrl=`http://localhost:3000/student/add-record`;
  var apiDeleteUrl=`http://localhost:3000/student/delete-record`;
  var apiUpdateUrl=`http://localhost:3000/student/update-record`;

 
  function getUsers() {
    $.ajax({
      url: apiUrl,
      type: 'GET',
      success: function(data) {
        updateTable(data);
        console.log(data)
      },
      error: function(error) {
        console.error('Error fetching users:', error);
      }
    });
  }


  function addUser(formData) {
  var userData =formData

    $.ajax({
      "url": "http://localhost:3000/student/add-record",
      "type": 'POST',
       "data": userData,
      success: function(response) {
        alert(response)
        getUsers();

      },
      error: function(error) {
        console.error('Error adding user:', error);
      }
    });
  }


  function deleteUser(id) {
    $.ajax({
      url: apiDeleteUrl + '/' + id,
      type: 'DELETE',
      success: function() {
        getUsers();
      },
      error: function(error) {
        console.error('Error deleting user:', error);
      }
    });
  }


  function updateUser(id, name, Class,marks,collegeName,city) {
    var userData = { name: name, Class: Class ,marks:marks,collegeName:collegeName,city:city};

    $.ajax({
      url: apiUpdateUrl + '/' + id,
      type: 'PUT',
      data: userData,
      success: function() {
        getUsers();
      },
      error: function(error) {
        console.error('Error updating user:', error);
      }
    });
  }


  function updateTable(users) {
    var tableBody = $('#userTable tbody');
    tableBody.empty(); 
  
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      var row = $('<tr>');
      row.append($("<td>").text(user._id))
      row.append($('<td>').text(user.name));
      row.append($('<td>').text(user.class));
      row.append($("<td>").text(user.marks));
      row.append($("<td>").text(user.collegeName))
      row.append($("<td>").text(user.city));
      row.append($('<td>').html('<button class="updateBtn" data-id="' + user._id + '">Update</button> <button class="deleteBtn" data-id="' + user._id + '">Delete</button>'));
      tableBody.append(row);
    }
  }

 
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

 
  $(document).on('click', '.deleteBtn', function() {
    var id = $(this).data('id');
    console.log(id)
    deleteUser(id);
  });

  $(document).on('click', '.updateBtn', function() {
    var id = $(this).data('id');
    console.log(id)
    var name = prompt('Enter updated name:');
    var  Class = prompt('Enter updated Class:');
    var marks= prompt('Enter updated marks:');
    var collegeName= prompt('Enter updated collegeName:');
    var city = prompt('Enter updated city:');

    if ((id,name,Class) && (marks,collegeName,city)) {
      updateUser(id, name, Class,marks,collegeName,city);
    }
  });

  getUsers();
});
