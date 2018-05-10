<template>
	<div>

		<pic-main></pic-main>

	</div>
</template>

<script>
	import PicMain from '../../components/main.vue'
	export default{
		components: {
			'pic-main':PicMain
		},
		data(){
			return{
				isNowPage: true
			}
		}
	}
</script>
