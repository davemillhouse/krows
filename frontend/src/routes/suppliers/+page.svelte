<script>
	export let data;
	const { suppliers } = data;
</script>

<h1>Suppliers</h1>

{#each suppliers as supplier}
	<h2>{supplier.id}</h2>
	<p>{supplier.name}</p>
{/each}
