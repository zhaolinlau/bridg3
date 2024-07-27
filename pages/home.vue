<template>
	<div class="hero is-fullheight home-bg">
		<div class="hero-head">
			<NavBar />
		</div>
		<div class="hero-body">
			<div class="container has-text-centered theme-dark">
				<p class="title">
					Join FundForNeeds
				<p class="subtitle">
					Your Platform to Raise for Worthy Causes
				</p>
				</p>
			</div>
		</div>
	</div>

	<div class="hero">
		<div class="hero-body">
			<div class="container">
				<p class="title has-text-centered">
					Completed Projects
				</p>
			</div>
		</div>
	</div>

	<div class="hero">
		<div class="hero-body">
			<p class="title has-text-centered">
				Latest Projects
			</p>
			<div class="columns is-multiline">
				<div class="column is-4">
					<div class="card">
						<div class="card-image">
							<figure class="image is-4by3">
								<img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="Placeholder image" />
							</figure>
						</div>
						<div class="card-content">
							<div class="media">
								<div class="media-left">
									<figure class="image is-48x48">
										<img src="https://bulma.io/assets/images/placeholders/96x96.png" alt="Placeholder image" />
									</figure>
								</div>
								<div class="media-content">
									<p class="title is-4">One Chain</p>
									<p class="subtitle is-6">Kuala Lumpur, Malaysia</p>
								</div>
							</div>

							<div class="content">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
								iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
								<a href="#">#responsive</a>
								<br />
								<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero">
		<div class="hero-body">
			<div class="container is-flex is-justify-content-center">
				<NuxtLink class="button is-primary">
					View All Projects
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
const user = useSupabaseUser()

watch(user, async () => {
	if (user.value) {
		await navigateTo('/')
	}
}, { immediate: true })
</script>

<style>
.home-bg {
	background-image: url('img/home_bg.png');
	background-repeat: no-repeat;
	background-size: cover;
}
</style>