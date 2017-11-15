import home from './components/home.vue';
import detail from './components/detail.vue';
import winter from './components/winter.vue';
import other from './components/other.vue';
import news from './components/news.vue';
import summer from './components/summer.vue';
import show from './components/show.vue';



const routes = [
    {path:'/home',component:home},
    {path:'/summer',component:summer},
    {path:'/winter',component:winter},
    {path:'/news',component:news},
    {path:'/other',component:other},
    {path:'/detail/:aid',component:detail},
    {path:'/show',component:show},
    {path:'/',redirect:'/home'}
];

export default routes;
