$('input[type="range"]').rangeslider({polyfill: false});

$(".chosen-select").chosen({
    disable_search: true,
    inherit_select_classes: true
  }
);

$(document).ready(function() {
    $("#list_option").html($('#list option:selected').text());
    $("#list").width($("#list_select").width());
    $('#list').change(function() {
      $("#list_option").html($('#list option:selected').text());
      $(this).width($("#list_select").width());
    });
    $('.personal_information input').each(function() {
      if ($(this).val() !== '') {
        $(this).closest('.form__input_container').find('.form__input_label').css('visibility', 'visible');
      }
    });
    $('.personal_information input').click(function() {
      if ($(this).val() == "") {
        $(this).closest('.form__input_container').find('.form__input_label').css('visibility', 'visible');
      }
    });
    $('.personal_information input').blur(function() {
      if ($(this).val() == "") {
        $(this).closest('.form__input_container').find('.form__input_label').css('visibility', 'hidden');
      } else {
        $(this).closest('.form__input_container').find('.form__input_label').css('visibility', 'visible');
      }
    });
});

$(document).ready(function() {
  let detector = new MobileDetect(window.navigator.userAgent);
  let select = $('#chosen_select');
  let container = $('.form__select_container');
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    select.show('');
    select.addClass('mobile_select');
    container.addClass('form__select_container_mobile');

} else {
  select.hide('');
  container.removeClass('form__select_container_mobile');
}
});
