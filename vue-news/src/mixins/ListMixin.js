import bus from "@/utils/bus";

export default {
    // 재사용할 컴포넌트 옵션 & 로직
    created() {
        bus.$emit('start:spinner');

        // #1 데이터 호출
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then((res) => {
                // #5
                console.log(5);
                console.log('listmixin에서', res);
                console.log('fetched');
                bus.$emit('end:spinner');
            })
            .catch(err => {
                console.log(err);
            });
    },

}
