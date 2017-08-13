//产品对象
/*对象内如何使用对象的属性和方法：this，对象外如何使用：先实例化，后用点语法*/
function Product() {
    /*属性 行为*/
    this.name ='';
    this.price='';
    this.description = '';
    this.youhuijia='';
    this.zhekou = ''
    this.sales = ''
    this.image=''
}
Product.prototype={
    bindDom:function(){
        var str=''
        str+='<dl>'
            str+='<dt><a><img src="'+this.image+'" width="384" height="225" /></a></dt>'
            str+='<dd>'
                str+='<span><a><em>'+this.zhekou+'折/</em>'+this.name+'</a></span>'
            str+='</dd>'
            str+='<dd class="price">'
                str+='<em>￥'+this.price+'</em>'
                str+='<del>￥'+this.youhuijia+'</del>'
                str+='<i>售量：'+this.sales+'</i>'
            str+='</dd>'
        str+='</dl>'
        return str;
    },
    bindEvents:function(){

    }
}

/*搭积木开发 -- 代码可读性极高*/
window.onload=function() {
  /*假设这是ajax获取的json数据 -- 假设这是后台给你的数据*/
    var products= [
        {name:' 韩国补水神器',price:98,youhuijia:128,sales:100,zhekou:3.5,image:'img/boutque13_r2_c2.jpg'},
        {name:' 韩国补水神器',price:300,youhuijia:328,sales:300,zhekou:3.5,image:'img/boutque11_r2_c2.jpg'},
        {name:' 韩国补水神器',price:240,youhuijia:420,sales:200,zhekou:3.5,image:'img/boutque10_r2_c2.jpg'},
        {name:' 韩国补水神器',price:120,youhuijia:240,sales:400,zhekou:3.5,image:'img/boutque07_r2_c2.jpg'},
        {name:' 韩国补水神器',price:68,youhuijia:100,sales:500,zhekou:3.5,image:'img/boutque15_r2_c2.jpg'},
        {name:' 韩国补水神器',price:320,youhuijia:500,sales:1000,zhekou:3.5,image:'img/boutque16_r2_c2.jpg'},
        {name:' 韩国补水神器',price:288,youhuijia:600,sales:60,zhekou:3.5,image:'img/boutque01_r2_c2.jpg'},
        {name:' 韩国补水神器',price:168,youhuijia:200,sales:120,zhekou:3.5,image:'img/boutque06_r2_c2.jpg'},
        {name:' 韩国补水神器',price:248,youhuijia:300,sales:240,zhekou:3.5,image:'img/boutque08_r2_c2.jpg'},
        {name:' 韩国补水神器',price:198,youhuijia:300,sales:360,zhekou:3.5,image:'img/boutque09_r2_c2.jpg'},
        {name:' 韩国补水神器',price:238,youhuijia:300,sales:400,zhekou:3.5,image:'img/boutque04_r2_c2.jpg'},
        {name:' 韩国补水神器',price:68,youhuijia:100,sales:300,zhekou:3.5,image:'img/boutque05_r2_c2.jpg'},
    ]

    /*前端代码*/
    /*前后台开发不影响，我们不必等待后端人员给我们数据*/
    var str=''
    for(var i = 0,len=products.length;i<len;i++) {
        var product = new Product()
        product.name=products[i].name;
        product.price=products[i].price;
        product.youhuijia=products[i].youhuijia;
        product.zhekou=products[i].zhekou;
        product.sales=products[i].sales;
        product.image=products[i].image;
        str+= product.bindDom()
    }
    var container = document.getElementById('container')
    container.innerHTML=str
}

