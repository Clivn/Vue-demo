<template>
    <div id="wrap" class="clearfix overflow mg-auto">
        <div class="i-head mg-auto overflow area border-bom">
            <h1>省心购幼教品</h1>
        </div>

        <!--焦点图开始-->
        <div class="swiper-container overflow" style="height: 327px;">
            <div class="swiper-wrapper" id="swiper-wrapper">
                <!--<div v-for="item in img" class="swiper-slide" style="height: 327px; width: 640px;">
                   <a href="#"><img :src="item.url" alt="#" title="#" width="640px" height="327px"></a>
               </div>-->
                <div class="swiper-slide" style="height: 327px; width: 640px;">
                    <a href="#"><img src="../assets/images/banner.jpg" alt="#" title="#" width="640px" height="327px"></a>
                </div>
                <div class="swiper-slide" style="height: 327px; width: 640px;">
                    <a href="#"><img src="../assets/images/banner2.jpg" alt="#" title="#" width="640px" height="327px"></a>
                </div>
            </div>
            <div class="pagination"></div>
        </div>

        <!--焦点图结束-->

        <!--快捷菜单开始-->
        <div class="i-icon mg-auto overflow area clearfix">
            <ul class="clearfix">
                <!--<li><a href="pro-list.html" class="i-icon-tao"><img src="../assets/img/app_01.png"></a></li>-->
                <router-link :to="item.route" tag="li" v-for="item in arr1"><a href="javascript:;" class="i-icon-tao"><img :src="item.img"></a></router-link>

            </ul>
        </div>
        <!--快捷菜单结束-->

        <!--最热开始-->
        <div class="i-tab mg-auto overflow area clearfix">
            <div class="i-tab-title">
                <h2>热销产品</h2>
                <div class="tab-btn" id="tab1">
                    <p class="mg-auto clearfix">
                        <a href="javascript:;" class="tab-cur">推荐</a>
                        <a href="javascript:;">分类</a>
                    </p>
                </div>
            </div>
            <div class="tab-content clearfix overflow" id="con1">
                <div class="clearfix tab-con" style="display:block">
                    <ul class="clearfix">
                        <router-link :to="val.route" tag="li" v-for="(val,index) in arr2">
                            <a href="javascript:;" class="tab-con-href"><div class="img"><img :src="val.img" ><i class="hoticon"></i></div></a>
                            <a href="javascript:;" class="tab-title-href">{{val.title}}</a>
                        </router-link>

                    </ul>
                </div>


                <div class="clearfix tab-con2 tab-con-info">
                    <ul class="clearfix">
                        <li>
                            <a class="tab-con-href2 clearfix">
                                <div class="img2"><img src="../assets/img/loading.png" original="../assets/images/qbx_logo.jpg" alt="" title=""></div>
                                <h4>丘比熊</h4>
                                <p><i></i></p>
                            </a>
                        </li>      <li>
                        <a class="tab-con-href2 clearfix">
                            <div class="img2"><img src="../assets/img/loading.png" original="../assets/images/abn_logo.jpg" alt="" title=""></div>
                            <h4>艾宾尼</h4>
                            <p><i></i></p>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--最热结束-->

        <!--底部-->
        <div style="margin-top:15px;display: block;border-bottom: solid 1px #FFF;border-top: solid 1px #cacaca;text-indent: -9999px;height: 0px;">line</div>
        <div style="width: 100%; height: 3.8em; line-height: 3.8em; text-align: center; color:#666">省心购幼教品手机版</div>


    </div>
</template>
<script>
    /*import '../assets/js/com';
     import '../assets/js/lazyload';
     import '../assets/js/jquery-1.10.1.min';
     import '../assets/js/jquery';*/
    import '../assets/css/slide.css';
    /*import '../assets/css/apply.css';
     import '../assets/css/public.css'
     import '../assets/css/share.css';*/
    export default {
        data(){
            return {
                img:[],
                arr1:[],
                arr2:[]
            }
        },
        mounted(){
            /*this.$http.get('src/data/swiper.data').then((res)=>{
                //console.log(res.data);
                this.img = res.data;
            }).catch((res)=>{
                alert(res.state);
            });*/
            this.$http.get('src/data/home.data').then((res)=>{
                console.log(res.data.list);
                this.arr1 = res.data.list;
                this.arr2 = res.data.show;
            }).catch((res)=>{
                alert(res.state);
            });
            /*$("img").lazyload({
             effect      : "fadeIn"
             });
             });*/
            var newSlideSize = function slideSize(){
                var w = Math.ceil($(".swiper-container").width()/1.96);
                $(".swiper-container,.swiper-wrapper,.swiper-slide").height(w);
            };
            newSlideSize();
            $(window).resize(function(){
                newSlideSize();
            });
            var mySwiper = new Swiper('.swiper-container',{
                pagination: '.pagination',
                loop:true,
                autoplay:3000,
                paginationClickable: true,
                onSlideChangeStart: function(){
                    //回调函数
                }
            });
            /*cTab("#tab1","#con1");
             cTab("#tab2","#con2");*/
        }
    }

</script>
<style>

</style>