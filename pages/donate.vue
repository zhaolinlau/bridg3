<template>
    <div class="hero">
		<div class="hero-head bg-gray-400">
			<NavBar />
		</div>
	</div>

    <section class="max-w-5xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <div class="basis-1/2">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-16by9">
                    <img
                        src="https://bulma.io/assets/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                    />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">Donations</p>
                            <p class="subtitle is-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam rerum quam eum odit. Eos, eum a. Eum, eaque autem.</p>
                        </div>
                    </div>

                    <div class="content flex flex-row justify-between">
                        <div class="flex flex-col">
                            <p class="m-0 text-lg text-green-600">Raised</p>
                            <p class="m-0 text-xl text-green-700">700 Tokens</p>
                            <p class="text-base text-gray-400">18 Funders</p>
                        </div>
                        <div class="flex flex-col justify-center">
                            <div class="flex flex-row justify-between gap-2 my-1 text-sm"><p class="m-0 text-gray-500">Created Date</p><span>27-07-2024</span></div>
                            <div class="flex flex-row justify-between gap-2 text-sm"><p class="m-0 text-gray-500">End Date</p><span>01-08-2024</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="basis-1/2 flex flex-col ms-8 rounded-lg bg-slate-50 shadow-lg">
            <div class="flex flex-col h-fit my-auto p-4">
                <div class="text-3xl font-semibold">Total Tokens</div>
                <div><input class="input" type="number" min="1" placeholder="100" /></div>
                <div>Donation</div>
                <div class="flex flex-row">
                    <div class="basis-3/4 flex flex-row">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                    <div class="basis-1/4">5</div>
                </div>
                <div>Total: 100</div>
                <div>
                    <button class="button is-success is-outlined">Connect Wallet</button>
                </div>
            </div>
        </div>
    </section>
</template>

