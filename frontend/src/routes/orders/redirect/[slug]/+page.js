import { redirect } from '@sveltejs/kit'

export const load = async ({ params }) => {

  window.location.href= '/orders?searchString=' + params.slug;
}