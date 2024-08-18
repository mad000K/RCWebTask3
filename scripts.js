$(document).ready(function() {
    $('.interactive-item').on('click', function() {
        alert('Ви клікнули на ' + $(this).find('img').attr('alt'));
    });

    $('#add-item-form').on('submit', function(event) {
        event.preventDefault();

        var itemName = $('#item-name').val();
        var itemImage = $('#item-image').val();

        var newItem = `
            <div class="added-item">
                <img src="${itemImage}" alt="${itemName}">
                <p>${itemName}</p>
            </div>
        `;

        $('#added-items').append(newItem);

        $('#item-name').val('');
        $('#item-image').val('');
    });
});
