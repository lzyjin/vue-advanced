import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from "@/views/ItemView";
import UserView from "@/views/UserView";
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
import bus from "@/utils/bus";
import {store} from "@/store";
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
            beforeEnter: (to, from, next) => {
                console.log('to', to);
                console.log('from', from);
                // next를 호출해야만 페이지로 이동할 수 있다.
                // next();

                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log(5);
                        console.log('fetched');
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
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
