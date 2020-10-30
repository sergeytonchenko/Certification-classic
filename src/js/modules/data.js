export const collectData = function(){ 
    $('input, select').change(function() {

        let data = {
            params: {
                brand: [],
                manufacturer: $('#marka').val(),
                model: $('#filter-model').val(),
                year: Number($('#filter-year').val()),
                price: [Number($('#price-from').val()), Number($('#price-to').val())]
            },
            pagination: {
                sort: $('#sort').val(),
                perPage: Number($('#per_page').val()),
                page: 2
            }
        };

        $('input:checkbox:checked').each(function(){
            data.params.brand.push($(this).val());
        });
              
        console.log(data);
        
    }); 
};