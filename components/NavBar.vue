<template>
	<nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<NuxtLink class="navbar-item" to="/">
				<p class="subtitle is-4 has-text-weight-semibold">FundForNeeds</p>
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
				<NuxtLink class="navbar-item" to="/home">
					Home
				</NuxtLink>
				<NuxtLink class="navbar-item">
					Explore
				</NuxtLink>
				<NuxtLink class="navbar-item">
					About
				</NuxtLink>

				<createProject v-if="user" />

				<div class="navbar-item" v-if="!user">
					<div class="buttons">
						<NuxtLink class="button is-primary" to="/login">
							Log in
						</NuxtLink>
						<NuxtLink class="button is-primary is-outlined" to="/login">
							Sign Up
						</NuxtLink>
					</div>
				</div>

				<div class="navbar-item has-dropdown is-hoverable" v-if="user">
					<NuxtLink class="navbar-link">
						More
					</NuxtLink>

					<div class="navbar-dropdown is-boxed is-right">
						<NuxtLink class="navbar-item">
							My Profile
						</NuxtLink>
						<NuxtLink class="navbar-item">
							Settings
						</NuxtLink>
						<NuxtLink class="navbar-item" @click="logout">
							Logout
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
const showNav = ref(false)
const client = useSupabaseClient()
const user = useSupabaseUser()

const logout = async () => {
	const { error } = await client.auth.signOut()

	if (error) {
		console.error(error)
	} else {
		await navigateTo('/confirm')
	}
}
</script>