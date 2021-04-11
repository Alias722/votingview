

for(var i = 2;i < 9;++i){
    if($('#'+i+'.pagination').text() <= 0){
        $('#'+i+'.pagination').hide()
    }
}