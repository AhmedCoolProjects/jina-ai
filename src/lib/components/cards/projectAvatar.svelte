<script lang="ts">
	export let image: string, title: string;
</script>

<div class="flex flex-col items-center">
	<div class="avatar">
		<div class="w-[250px] rounded-full">
			<img src={image} alt={title} />
		</div>
	</div>

	<h1 class="divider text-3xl font-semibold">
		{title}
	</h1>
</div>
