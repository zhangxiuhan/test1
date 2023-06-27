import Vue from 'vue'

//价格式化
Vue.filter('formartMoney',(val)=> {
    if(!val){
        return ''
    };//如果传入的值为undefined或空则返回空
    const regex = /(\d)(?=(\d{3})+(?!\d))/g;
    return String(val).replace(regex, "$1,");
})

//日期格式化

Vue.filter('formartDate',(val, formart)=> {
    if(!val){
        return ''
    };//如果传入的值为undefined或空则返回空
    //formart格式规则 
    if ('xxxx.mm.dd'==formart) {
        let tempArray = val.split('-');
        return tempArray[0] + '.' + tempArray[1] + '.' + tempArray[2];
        
    } else {
        let tempArray = val.split('-');
        return tempArray[0] + '年' + tempArray[1] + '月' + tempArray[2]+ '日';
    }
})
