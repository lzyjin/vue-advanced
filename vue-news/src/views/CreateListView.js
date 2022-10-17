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
                // FETCH_LIST함수로부터 return으로 결과 값을 넘겨받아야 then으로 체이닝을 할 수 있다.
                .then(() => {

                    // # 6
                    console.log('fetched');
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
