<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let title: string,
		imageFile: Writable<string | null>,
		uploadedFile: Writable<string | Blob>;

	function handleFileChange(event: Event) {
		const file = (event?.target as HTMLInputElement)?.files[0];
		imageFile.set(URL.createObjectURL(file));
		uploadedFile.set(file);
	}
</script>

<div class="flex w-full h-full items-center justify-center bg-grey-lighter">
	<label
		class="w-full h-full flex flex-col justify-center items-center px-4 py-6 text-blue rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer hover:text-primary"
	>
		<svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
			<path
				d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
			/>
		</svg>
		<span class="mt-2 text-base leading-normal">
			{title}
		</span>
		<input type="file" class="hidden" on:change={handleFileChange} />
	</label>
</div>
