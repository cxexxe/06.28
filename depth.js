document.addEventListener('DOMContentLoaded', function() {
    // Hide .listSort
    var listSort = document.querySelector('.listSort');
    listSort.style.display = 'none';

    // Click event for .btnListup
    document.querySelector('.btnListup').addEventListener('click', function() {
        listSort.style.display = listSort.style.display === 'none' ? 'block' : 'none';
    });

    // Click event for input[type='radio'] inside .listSort
    var radioButtons = document.querySelectorAll('.listSort input[type="radio"]');
    radioButtons.forEach(function(radio) {
        radio.addEventListener('click', function() {
            // Get the label text of the selected radio button
            var labelFor = radio.getAttribute('id');
            var label = document.querySelector(`label[for="${labelFor}"]`).innerText;
            document.querySelector('.btnListup span').textContent = label;

            // Hide .listSort
            listSort.style.display = 'none';
        });
    });
});

