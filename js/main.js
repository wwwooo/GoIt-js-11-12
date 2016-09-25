$(function() {
    var html = $('#item_tmpl').html();
    var data = {
        name: 'Малиновская Ксения Александровна',
        work: 'Домохозяйка',
        reasons: ['Хорошо оплачиваемая работа', 'Женщин в IT мало', 'Требует постоянного развития'],
        login_skype: 'ksenia.malinovskaya',
        link_facebook: 'https://www.facebook.com/malinovsvska',
        feedback: 'Что посеешь, то из пруда'
    };
    var content = tmpl(html, data);

    $('body').append(content);
});
