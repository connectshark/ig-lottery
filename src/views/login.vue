<script setup>
const url = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}/auth&response_type=code&scope=instagram_basic,pages_show_list,pages_read_engagement`
</script>

<template>
<div class="login">
	<a :href="url"><i class='bx bxl-instagram'></i>授權</a>
</div>

</template>

<style lang="scss" scoped>
.login{
	a{
		font-size: 30px;
		line-height: 2;
		color: #eee;
		text-decoration: none;
		&:hover{
			text-decoration: underline;
		}
	}
}
</style>