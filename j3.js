$(document).ready(function(){
  $('#button').click(function(){
    let ten = $('#hoten').val();
    let toan  = $('#toan').val();
    let ly    = $('#ly').val();
    let hoa   = $('#hoa').val();
    let tb    = '?';
    let index = $('#table tr').length;
    let table = $('#table');
    // table.append('<tr> <td>'+index+'</td><td>'+hoTen+'</td><td>'+toan+'</td><td>'+ly+'</td><td>'+hoa+'</td><td>'+tb+'</td></tr>')
    table.append('<tr><td>'+index+'</td><td>'+ten+'</td><td>'+toan+'</td><td>'+ly+'</td><td>'+hoa+'</td><td>'+tb+'</td></tr>');

    reset();
   
  })


$('#d1').click(function(){    
    $('#table tr:gt(0)').each(function(){
        let toan1 = $(this).find('td:nth-child(3)').text();
        let ly1 = $(this).find('td:nth-child(4)').text();
        let hoa1 = $(this).find('td:nth-child(5)').text();
        let tbc  = (parseFloat(toan1) + parseFloat(ly1) + parseFloat(hoa1))/3;
        $(this).find('td:nth-child(6)').text(tbc.toFixed(2));
     })

})

$('#d2').click(function(){
    $('#table tr:gt(0)').each(function(){
        let hsg = $(this).find('td:nth-child(6)').text();
        if(hsg >= 8 && hsg <= 10){
            $(this).css({'color':'red'});
        }
    })
})
function reset(){
$('#hoten').val('');
$('#toan').val('');
$('#ly').val('');
$('#hoa').val('');
}

})