$(document).ready(function() {
    //inicialización del tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //modal
    $('#myModal').on('shown.bs.modal', function() {
        $('#myInput').focus()
    })

    $('#myModal2').on('shown.bs.modal', function() {
        $('#myInput').focus()
    })

});