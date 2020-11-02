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

        let dataUrl = Object.assign({}, data);

        dataUrl.toString = function () {
                return `?page=${this.params.year}
                        &year=${this.params.year}
                        &price=${this.params.price}
                        &model=${$(this.params.model)}
                        &manufacturer=${$(this.params.manufacturer)}
                        &brand=${$(this.params.brand)}
                        &sort
                        &per-page`;
            }
                
        
        console.log(dataUrl.toString().replace(/\s+/g, ' ').trim());
        history.pushState({}, '', dataUrl.toString().replace(/\s+/g, ' ').trim())      
        console.log(data);
        
        
    }); 
};