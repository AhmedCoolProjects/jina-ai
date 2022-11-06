<script lang="ts">
	import type { projectCardProps } from '$lib/types';

	export let projectData: projectCardProps;
</script>

<div class="card h-full w-full glass">
	<figure>
		<img
			class="w-full max-h-[250px] object-cover"
			src={projectData.image}
			alt={projectData.title}
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{projectData.title}
		</h2>
		<p>
			{projectData.description}
		</p>
		<div class="card-actions items-center justify-between">
			<a href={projectData.github}>
				<img
					class="w-16 bg-transparent hover:bg-transparent border-none btn p-0 h-16"
					src="/pngs/logos/github.png"
					alt="github_logo"
				/></a
			>
			<a href={`/project/${projectData.id}`}>
				<button class="btn btn-primary">Documentation!</button></a
			>
		</div>
	</div>
</div>
