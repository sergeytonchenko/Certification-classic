export const collectData = function(){ 
    $('input, select').change(function() {

        let data = {
            params: {
                brand: [],
                manufacturer: $('#marka').val(),
                model: '',
                year: Number($('#filter-year').val()),
                price: [Number($('#price-from').val()), Number($('#price-to').val())]
            },
            pagination: {
                sort: $('#sort').val(),
                perPage: Number($('#per_page').val()),
                page: Number($('.pages__link--active').attr('page'))
            }             
        };

        $('input:checkbox:checked').each(function(){
            data.params.brand.push($(this).val());
        });

        if ($('#marka').val() != '') {
            data.params.model = $('#marka').val()
        }





        //Вывод адресной строки
        const { params, pagination } = data;
        const merge = {...params, ...pagination};
        merge.toString = function () {
            return `?page=${this.page}
                    &year=${this.year}
                    &price=${this.price}
                    &model=${this.model}
                    &manufacturer=${this.manufacturer}
                    &brand=${this.brand}
                    &sort=${this.sort}
                    &per-page=${this.perPage}`
        }
        history.pushState({}, '', merge.toString().replace(/\s+/g, ' ').trim()) 
        
        // Альтернативный вариант   
            // const queryParamsObj = new URLSearchParams(merge);        
            // history.pushState({}, '', queryParamsObj.toString().replace(/\s+/g, ' ').trim())      
        
            // Вывод формы в консоль
        console.log(data); 
    }); 
};