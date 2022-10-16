import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from "@/views/ItemView";
import UserView from "@/views/UserView";
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
// import createListView from "@/views/CreateListView";

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
            path: '/news',
            name: 'news',
            component: NewsView,
            // component: createListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobsView'),
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
