<script lang="ts">
	import { Navbar, ProjectCard } from '$lib/components';
	import { projectCardsData } from '$lib/constants';
</script>

<!-- projects -->

<svelte:head>
	<title>Jina DL | Ahmed BARGADY</title>
</svelte:head>

<section class="px-8 md:px-12">
	<div class="divider mb-12 text-2xl">Projects</div>
	<div class="grid w-full grid-cols-12 gap-6">
		{#each projectCardsData as projectData}
			<div class="col-span-12 md:col-span-4">
				<ProjectCard {projectData} />
			</div>
		{/each}
	</div>
</section>
