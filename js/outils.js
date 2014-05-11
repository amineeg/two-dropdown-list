jQuery().ready(function(){
	var tabMarque=[];
	$.getJSON('file.json', function(data) {
		$.each(data, function(index, val) {
			 tabMarque[index]=val;
		});
	});

	$('#Marque').change(function(event) {
		$marque=$(this).val();
		$htmlOption='<option value="0">Choix du serie</option>';
		if($marque!=0)
		{
			$.each(tabMarque[$marque], function(key, value) {
				 $htmlOption+='<option value="'+value[0]+'">'+value[1]+'</option>';
			});
		}
		$('#Serie').html($htmlOption);
	});
});


