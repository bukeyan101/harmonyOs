import Router from '@system.router'

var pickerValue1 = null;
var pickerValue2 = null;

export default {
    data: {
        picker1range: ['1', '2', '3'],
        picker2range: ['较慢', '较快', '舒缓'],
    },
    clickAction() {
        // console.log("我被点击了")
        Router.replace({
            uri: 'pages/xunlian/xunlian',
            params:{'data1':pickerValue1,'data2':pickerValue2}
        })
    },
    onInit() {
        console.log('主页面onInit')
    },
    onReady() {
        console.log('主页面onReady')
    },
    onShow() {
        console.log('主页面onShow')
    },
    onDestroy() {
        console.log('主页面onDestroy')
    },
    changeAction(pv) {
        console.log('left' + pv.newValue)
        pickerValue1=pv.newValue
    },
    changeAction2(pv) {
        console.log('left' + pv.newValue)
        pickerValue2=pv.newValue
    }
}
