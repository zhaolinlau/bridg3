<template>
	<nav class="navbar is-dark is-transparent is-spaced" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<NuxtLink class="navbar-item subtitle is-4 has-text-weight-semibold">
				FundForNeeds
			</NuxtLink>

			<NuxtLink role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="appBar"
				@click="showNav = !showNav" :class="{ 'is-active': showNav }">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</NuxtLink>
		</div>

		<div id="appBar" class="navbar-menu " :class="{ 'is-active': showNav }">
			<div class="navbar-end">
				<NuxtLink class="navbar-item is-tab">
					Home
				</NuxtLink>
				<NuxtLink class="navbar-item is-tab">
					Explore
				</NuxtLink>
				<NuxtLink class="navbar-item is-tab">
					About
				</NuxtLink>
				<div class="navbar-item" v-if="user">
					<button class="button is-primary">
						<strong>Create a Project</strong>
					</button>
				</div>

				<div class="navbar-item" v-if="!user">
					<div class="buttons">
						<NuxtLink class="button is-primary" to="/login">
							Log in
						</NuxtLink>
						<NuxtLink class="button is-primary is-light" to="/login">
							Sign Up
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
const showNav = ref(false);

const user = useSupabaseUser()
</script>