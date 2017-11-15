<template>
    <div id="wrap" class="clearfix overflow mg-auto">
        <div class="apply-nav overflow mg-auto area">
            <div class="overflow clearfix apply-top border-bom">
                <router-link to="/home" tag="a" class="apply-return">返回</router-link>
                <h2>精彩专题详情</h2>
                <a href="search/default.htm" class="apply-sou" style="visibility:hidden">搜索</a>
                <a href="#" class="apply-pup">弹出</a>
            </div>
            <div class="i-icon mg-auto overflow area clearfix" id="apply-pup-icon">
                <ul class="clearfix">
                    <router-link to="/winter" tag="li"><a href="javascript:;" class="i-icon-tao"><img src="../assets/img/app_01.png"></a></router-link>
                    <router-link to="/summer" tag="li"><a href="javascript:;" class="i-icon-game"><img src="../assets/img/app_02.png"></a></router-link>
                    <router-link to="/other" tag="li"><a href="javascript:;" class="i-icon-bizhi"><img src="../assets/img/app_03.png"></a></router-link>
                    <router-link to="/news" tag="li"><a href="javascript:;" class="i-icon-zhuan"><img src="../assets/img/app_04.png"></a></router-link>
                </ul>
            </div>
        </div>

        <div class="crumbs">
            <router-link to="/home" tag="a">首页</router-link> > <router-link to="/news" tag="a">应用专题</router-link> > 详情
        </div>
        <div class="special overflow clearfix area mg-auto">
            <div class="special-img area clearfix">
                <img src="../assets/images/3.jpg" title="" alt="">
            </div>
            <div class="special-detail clearfix">
                <h2>经典游戏合集 致逝去的"六一"</h2>
                <div class="clearfix detail-wrap">
                    <p class="clearfix">二十年过去了，不知道魂斗罗老了没有呢，超级马里奥不知道与公主在一起没有呢？草稚京与八神庵这对好基友的肥皂还够用吗？曾几何时，这些陪伴着我们童年的游戏角色们，不知道是否过的开心呢？还记得偷拿零用钱去游戏厅打拳皇的日子吗？还曾想起攒着每天的早餐钱去买一盒游戏卡带的时光吗？又到一年儿童节，曾经陪伴我们的游戏角色们，他们是跟我们一样老了，还是依旧能打能跳呢？致我们逝去的六一，不知能否唤起你珍藏在心底的回忆，朋友，工作累了，就让心歇歇吧，小时候玩过的游戏大集合，或高兴，会回忆，或流泪都值得回顾一次，当然，打个电话给儿时的好友，一起玩会更不错哦！</p>
                </div>
            </div>
        </div>

        <!--底部-->
        <div style="margin-top:15px;display: block;border-bottom: solid 1px #FFF;border-top: solid 1px #cacaca;text-indent: -9999px;height: 0px;">line</div>
        <div style="width: 100%; height: 3.8em; line-height: 3.8em; text-align: center; color:#666">省心购幼教品手机版</div>

    </div>
</template>
<script>

</script>
<style>
    .crumbs{height: 3em;line-height: 3em;width: 100%;padding-left: 1em;font-family: microsoft yahei;font-size: 1.5em;color: #696666;}
    .crumbs a{color:#65BAF1;}
</style>