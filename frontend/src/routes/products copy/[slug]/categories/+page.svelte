<script>

	export let data;
	const { categories } = data;

</script>


<div class="row justify-content-center">
    <div class="col-lg-12">
        <div class="white_card card_height_100 mb_30">
            <div class="white_card_header">
                <div class="box_header m-0">
                    <div class="main-title">
                        <h3 class="m-0">Categories</h3>
                    </div>
                </div>
            </div>
            <div class="white_card_body">
                <table class="table table-striped">
                    <th>Name</th>
                    <tbody>
                        {#each categories as category}
                            <tr>
                                <td>{category.name}</td>
                
                            </tr>
                        {/each}
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
</div>