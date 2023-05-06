$(document).ready(function () {
    var params = {
        origin: '*',
        action: 'parse',
        page: 'Visa_requirements_for_Indonesian_citizens',
        section: 2,
        prop: 'text',
        format: 'json'
      };
      
      $.getJSON('https://en.wikipedia.org/w/api.php', params).then(res => {
        var $table = $(res.parse.text['*']).find('table').eq(3)
        $('body').append($table)
      })
});