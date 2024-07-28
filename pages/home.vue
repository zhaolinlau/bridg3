<template>
	<NavBar />
	<div class="hero is-fullheight-with-navbar home-bg">
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
				<div class="flex flex-row">
					<div class="card m-4 basis-1/3">
						<div class="card-image">


							<div class="relative">
								<figure class="image is-4by3 w-full">
									<img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="Placeholder image" />
								</figure>
								<button class="button is-primary text-white absolute top-0 rounded-2xl mx-2 my-5 py-1">Primary</button>
							</div>

						</div>
						<div class="card-content">
							<div class="media">
								<div class="media-left">
									<figure class="image is-48x48">
										<img class="is-rounded" src="https://bulma.io/assets/images/placeholders/96x96.png"
											alt="Placeholder image" />
									</figure>
								</div>
								<div class="media-content">
									<p class="font-semibold is-4">John Smith</p>
									<p class="font-medium text-slate-400 is-6">@johnsmith</p>
								</div>
								<div class="media-right">
									<button class="button is-success is-light text-green-700">Completed</button>
								</div>
							</div>

							<div class="content flex flex-col">
								<div>
									<h5 class="font-semibold m-0">Donation</h5>
									<p class="text-end font-medium text-xs">100%</p>
								</div>
								<div>
									<progress class="progress is-success" value="100" max="100">
										100%
									</progress>
								</div>
								<div class="flex flex-row justify-between font-medium text-xs py-1">
									<p><span class="text-green-600">900 Tokens</span> raised of <span class="text-green-600">900
											Tokens</span> Goal</p>
									<p><span class="text-green-600">5 Days Left</span></p>
								</div>
								<div class="flex justify-center mt-3">
									<button class="button is-success is-outlined py-1 w-28 rounded-lg">View</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero">
		<div class="hero-body">
			<div class="container">
				<p class="title has-text-centered">
					Latest Projects
				</p>
				<div class="columns is-multiline">
					<template v-for="project in projects" :key="project">
						<div class="column is-4 is-12-touch">
							<Card style="width: 25rem; overflow: hidden">
								<template #header>
									<NuxtImg alt="user header" src="https://bulma.io/assets/images/placeholders/1280x960.png" />
								</template>
								<template #title>{{ project.title }}</template>
								<template #subtitle>Created on {{ project.created_at }}</template>
								<template #content>
									<p>
										{{ project.content }}
									</p>
								</template>
								<template #footer>
									<div class="flex gap-4 mt-1">
										<Button label="View" unstyled class="w-full button is-primary"
											@click="navigateTo(`/donate/${project.id}`)" />
									</div>
								</template>
							</Card>
						</div>
					</template>

				</div>
			</div>
		</div>
	</div>

	<div class="hero">
		<div class="hero-body">
			<div class="container is-flex is-justify-content-center">
				<NuxtLink class="button is-primary text-white">
					View All Projects
				</NuxtLink>
			</div>
		</div>
	</div>

	<footer id="footer" class="bg-green-800 text-white text-xl">
		<section class="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
			<div>
				<h2>About</h2>
				<nav class="hidden md:flex flex-col gap-2 font-light text-base" aria-label="footer">
					<a href="#" class="hover:opacity-90">About</a>
					<a href="#" class="hover:opacity-90">Contact Us</a>
					<a href="#" class="hover:opacity-90">Information</a>
				</nav>
			</div>
			<div>
				<h2>Contact Us</h2>
				<nav class="hidden md:flex flex-col gap-2 font-light text-base" aria-label="footer">
					<a href="#" class="hover:opacity-90">About</a>
					<a href="#" class="hover:opacity-90">Contact Us</a>
					<a href="#" class="hover:opacity-90">Information</a>
				</nav>
			</div>
			<div class="flex flex-col justify-end sm:gap-2 font-normal text-base">
				<p class="text-right">FundForNeeds Copyright &copy; <span id="year">2022</span></p>
				<p class="text-right">All Rights Reserved</p>
			</div>
		</section>
	</footer>
</template>

<script setup>
const user = useSupabaseUser()
const client = useSupabaseClient()
let { data: projects } = await client
	.from('project')
	.select('*')
	.order("created_at", { ascending: false })
</script>

<style>
.home-bg {
	background-image: url('/img/home_bg.png');
	background-repeat: no-repeat;
	background-size: cover;
}
</style>