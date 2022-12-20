new Vue({
    el: '#app',
    data: {
        firstVar: 'Hello world',
        arrayList: ['one', 'two', 'three'],
        url: 'https://www.google.dk/',
        classes: ['one', 'two'],
        name: 'Adnan',
        amount: 0,
        rich: null //if null it will not show
    },

    //methods
    methods: {
        firstMethod(firstParameter){
            return `first parameter: ${firstParameter} and first var: ${this.firstVar}... just a little bit more advanced`
        },
        count(){
            this.amount++

            if(this.amount > 3){
                this.rich = 'you are rich'
            }
        }
    },

    //when the page loads
    created(){
        this.classes.push('three')
    }
})