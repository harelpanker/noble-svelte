<script lang="ts">
	export let src: string = '/';
	export let text: string;
</script>

<a class="transition hover:opacity-85" href={src}>{text}</a>
