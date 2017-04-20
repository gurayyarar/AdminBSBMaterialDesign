$(function () {
    $('.js-basic-example').DataTable({
        responsive: true
    });

    //Exportable table    
    $('.js-exportable').DataTable({
        "bAutoWidth": false,
        "bScrollCollapse": true,
        "bProcessing": true,
        deferRender: true,
        dom: 'Bfrtlip',
        "responsive": true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });

    $('.js-exportable').wrap('<div class="dataTables_scroll" />');
    $('.js-basic-example').wrap('<div class="dataTables_scroll" />');
});
