
const scrollToBottom = (node) => {
    node.scrollTop = node.scrollHeight;
}

addMessage = (message) => {
    date = new Date(message.date);    
    const table = document.getElementById('tableList');

    html = '<div  class="list-group-item list-group-item-action"><div class="d-flex w-100 justify-content-between"><div class="text-success">';
    html += '<b>'+message.user+'</b></div>';
    html += '<small class="text-muted">'+date.toLocaleDateString('pt-BR')+" "+date.toLocaleTimeString('pt-BR')+'</small></div>';
    html += '<p class="mb-1">'+message.message+'</p></div>';

    table.innerHTML += html;
    scrollToBottom(table); // The specified node scrolls to the bottom.
}

async function loadApi(){
    const res =  await fetch("http://localhost:3000/tableJson").then((data) => data.json())
    res.messages.map(message => {
        addMessage(message)
    }) 
}
loadApi()   

$("#sendMessage").submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: '/add',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify( { "user": $('#user').val(), "message": $('#message').val() } ),
        processData: false,
        success: function( data, textStatus, jQxhr ){
            console.log(data.success);
            location.reload();
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
})