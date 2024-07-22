import Router from '@system.router'
var p1=null
var p2=null
var p=null
var timer1=null
var timer2=null
var p2s=null
var count=0
export default {
    data: {
        huxi:'吸气',
        seconds:0,
        isShow:true,
        // p2s:0,
    },
    // onInit() {
    //     this.title = this.$t('strings.world');
    // },
    clickAction(){
        // console.log("我被点击了")
        Router.replace({
            uri:'pages/index/index'
        })
    },
    run1(){
        this.seconds--;
        if (this.seconds==0) {
            clearInterval(timer1)
            timer1=null
        }
    },
    run2(){
        count++;

    },
    onInit(){
        console.log('主页面onInit')
        console.log('data1'+this.data1)
        console.log('data2'+this.data2)
        p1=this.data1
        p2=this.data2
        if (p1=='1') {
            p=60
        }else if (p1=='2'){
            p=120
        }else if (p1=='3'){
            p=180
        }
        else
        if (p2=='较慢') {
            p2s=6
        } else  if (p2=='较快') {
            p2s=4
        } else if (p2=='舒缓') {
            p2s=2
        }
        this.seconds=p
    },
    onReady(){
        console.log('主页面onReady')
    },
    onShow(){
        console.log('主页面onShow')
        timer1= setInterval(this.run1,1000)
        timer2= setInterval(this.run2,p2s*1000)
    },
    onDestroy(){
        console.log('主页面onDestroy')
    },

}
