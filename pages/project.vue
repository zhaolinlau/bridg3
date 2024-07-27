<template>
    <div class="hero">
		<div class="hero-head bg-gray-400">
			<NavBar />
		</div>
	</div>

    <section class="max-w-5xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <div class="basis-2/3">
				<img
                    class="rounded-lg w-11/12"
					src="https://bulma.io/assets/images/placeholders/1280x960.png"
					alt="Placeholder image"
				/>
        </div>
        <div class="basis-1/3 flex flex-col ms-8">
            <div class="flex flex-col h-fit my-auto p-4 rounded-lg bg-slate-50 shadow-lg">
                <div>
                    <h5 class="font-semibold text-2xl mb-3">Donation</h5>
                </div>
                <div>  
                    <div class="flex flex-row justify-between items-end">
				    	<div class="font-semibold text-green-600">Fund Raised</div>
				    	<div class="text-end font-medium text-xs">40%</div>
				    </div>
				    <div>  
				    	<progress class="progress is-success" value="40" max="100">
				    		40%
				    	</progress>
				    </div>
				    <div class="flex flex-row justify-between font-medium text-xs py-1">
				    	<p><span class="text-green-600">360 Tokens</span> raised of <span class="text-green-600">900 Tokens</span> Goal</p>
				    </div>
                    <div class="flex flex-col font-medium text-xs text-gray-500 py-2">
				    	<p>Created Date: <span class="text-black">27-07-2024 11:15:36</span></p>
                        <p>End Date: <span class="text-black">01-08-2024</span></p>
				    </div>
				    <div class="flex flex-col mt-3">
				    	<button class="button is-success w-28 rounded-lg text-white mx-auto my-4">Donate</button>
                        <button class="button w-28 rounded-lg mx-auto">Share</button>
				    </div>
				</div>
            </div>
        </div>
    </section>
</template>

