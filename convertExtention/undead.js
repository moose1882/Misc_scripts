var copy = $('body').clone()
$('th:contains("Died")').parent().hide()
$('th:contains("Born")').parent().hide()
$('th:contains("Died")').parent().hide()
$('th:contains("death")').parent().hide()
$('th:contains("Resting place")').parent().hide()
$('td:contains("death")').parent().hide()
$('span:contains("Death")').parent().hide()

$('p').not('.infobox p').first().html(function() {
	return $(this).html().replace('Gable', 'Brut!')
})

var hidden = ['died','remains','funeral','death','autopsy','suicide','cremated','interred','mausoleum']
hidden.forEach(function(word) {
	$('p:contains('+word+')').hide()
	$('li:contains('+word+')').hide()
	$('span:contains('+word+')').hide()	
})

$('p').each(function() {
    var html = $(this).html()
    return $(this).html(html.replace('Clark', 'Manny'))
    return $(this).html(html.replace('Gable', 'Brut!'))
    return $(this).html(html.replace(/(&nbsp;| )– [0-9a-zA-Z, ]+\)/, ')'))
})	
chrome.runtime.onMessage.addListener(function() {
	$('body').html($(copy))
})
