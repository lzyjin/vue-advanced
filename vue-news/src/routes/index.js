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
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/user/:id', // Dynamic Route Matching
            // 동적 세그먼트는 콜론(:)으로 표시한다.
            // 라우트가 일치하면 동적 세그먼트의 값은 모든 컴포넌트에서 this.$route.params로 표시된다.
            // 동일한 라우트에서 여러 동적 세그먼트를 가질 수 있다.
            // ex) /user/:username/post/:post_id -> /user/evan/post/123 -> { username: 'evan', post_id: '123 }
            component: UserView,
        },
    ]
});
