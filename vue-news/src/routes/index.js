import Vue from 'vue';
import VueRouter from 'vue-router';
import JobsView from "@/views/JobsView";
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import ItemView from "@/views/ItemView";
import UserView from "@/views/UserView";

Vue.use(VueRouter);

export const router = new VueRouter({
    // mode history는 url에 #(해쉬값)이 붙지 않도록 함
    mode:'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path: url 주소
            // component: url 주소로 이동했을 때 표시될 컴포넌트
            path: '/news',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
    ]
});
