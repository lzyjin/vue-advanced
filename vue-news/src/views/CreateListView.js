import ListView from "@/views/ListView";
import bus from "@/utils/bus";

// HOC(하이 오더 컴포넌트)
// 단점: 많이 쓸수록 컴포넌트 깊이가 깊어져 통신하기가 힘들어짐
export default function createListView(name) {
// export default function createListView() {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        // name: 'HOC Component', // 뷰 devtool에서 확인용
        name,

        created() {
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    bus.$emit('end:spinner');
                })
                .catch(err => {
                    console.log(err);
                });
        },

        render(createElement) {
            return createElement(ListView);
        }
    };
}
