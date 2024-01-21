<script lang="ts">
	// desktop
	import col1 from '$lib/assets/images/home-page/section-integrate/col-1.svg';
	import col2 from '$lib/assets/images/home-page/section-integrate/col-2.svg';
	import col3 from '$lib/assets/images/home-page/section-integrate/col-3.svg';
	import col4 from '$lib/assets/images/home-page/section-integrate/col-4.svg';
	import col5 from '$lib/assets/images/home-page/section-integrate/col-5.svg';
	import col6 from '$lib/assets/images/home-page/section-integrate/col-6.svg';
	// mobile
	import col1mobile from '$lib/assets/images/home-page/section-integrate/col-mobile-1.svg';
	import col2mobile from '$lib/assets/images/home-page/section-integrate/col-mobile-2.svg';
	import col3mobile from '$lib/assets/images/home-page/section-integrate/col-mobile-3.svg';
</script>

<ul
	class="px-5 lg:px-0 justify-center items-start h-[280px] hidden md:grid md:grid-cols-6 gap-x-3 lg:gap-x-4"
>
	<img class="relative top-[116px]" src={col1} alt="" />
	<img class="relative" src={col2} alt="" />
	<img class="relative top-[58px]" src={col3} alt="" />
	<img class="relative top-[116px]" src={col4} alt="" />
	<img class="relative top-[58px]" src={col5} alt="" />
	<img class="relative" src={col6} alt="" />
</ul>

<ul class="justify-center items-start h-[280px] md:hidden flex gap-x-3 lg:gap-x-4">
	<img class="relative top-[72px]" src={col1mobile} alt="" />
	<img class="relative top-[36px]" src={col2mobile} alt="" />
	<img class="relative" src={col3mobile} alt="" />
</ul>
