<template>
	<div class="hero is-fullheight">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline has-text-centered">
					<div class="column is-12">
						<p class="title">
							Hi {{ user.email }} <br> Welcome to FundForNeeds!
						</p>
					</div>

					<div class="column is-12">
						<LogoutButton />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const user = useSupabaseUser()
</script>