<template id="index">
	<div>
		<div class="header">
			<headerBar :title="tit"></headerBar>
			<tabBar :curpage="pagecode"></tabBar>
		</div>
		<div  class="main">
			<div>这是我的主页</div>
			<p>{{msg}}</p>
		</div>
	</div>
</template>
<style lang="sass">

</style>
<script >
	export default {
		data(){
			return {
				msg:'this is my index pages！',
				tit:'主页',
				pagecode:'tcrh'
			}
		},
		components:{
			headerBar:require('../../components/headerBar.vue'),
			tabBar:require('../../components/tabBar.vue')
		}
	}
</script>