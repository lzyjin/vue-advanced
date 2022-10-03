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
    // mode:'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path: url 주소
            // component: url 주소로 이동했을 때 표시될 컴포넌트
            path: '/news',
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/item',
            component: ItemView,
        },
        {
            path: '/user',
            component: UserView,
        },
    ]
});
