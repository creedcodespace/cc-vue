<script>
import { useAppOptionStore } from '@/stores/app-option';
import { useRouter, RouterLink } from 'vue-router';
import VueCountdown from '@chenfengyuan/vue-countdown';

const appOption = useAppOptionStore();

export default {
	data() {
		return {
			year: (new Date()).getFullYear()
		}
	},
	components: {
		VueCountdown: VueCountdown
	},
	mounted() {
		appOption.appSidebarHide = true;
		appOption.appHeaderHide = true;
		appOption.appContentClass = 'p-0';
	},
	beforeUnmount() {
		appOption.appSidebarHide = false;
		appOption.appHeaderHide = false;
		appOption.appContentClass = '';
	},
	methods: {
		submitForm: function() {
			this.$router.push('/');
		}
	}
}
</script>
<template>




	<!-- BEGIN coming-soon -->
	<div class="coming-soon">
		<div class="flex-1">
			<div class="coming-soon-timer">
				<div class="is-countdown text-center">
					<vue-countdown class="countdown-row countdown-show4" :time="48 * 24 * 60 * 60 * 1000" :transform="transformSlotProps" v-slot="{ days, hours, minutes, seconds }">
						<span class="countdown-section">
							<span class="countdown-amount d-block">{{ days }}</span>
							<span class="countdown-period d-block">Days</span>
						</span>
						<span class="countdown-section">
							<span class="countdown-amount d-block">{{ hours }}</span>
							<span class="countdown-period d-block">Hours</span>
						</span>
						<span class="countdown-section">
							<span class="countdown-amount d-block">{{ minutes }}</span>
							<span class="countdown-period d-block">Minutes</span>
						</span>
						<span class="countdown-section">
							<span class="countdown-amount d-block">{{ seconds }}</span>
							<span class="countdown-period d-block">Seconds</span>
						</span>
					</vue-countdown>
				</div>
			</div>
			<!-- BEGIN coming-soon-content -->
			<div class="coming-soon-content d-flex flex-column">
				<div class="flex-1 mb-3">
					<h2 class="mb-3">We're coming soon!</h2>
					<p class="mb-4">We are working very hard on the new version of our site.<br /> It will bring a lot of new features. Stay tuned!</p>
					<form v-on:submit.prevent="submitForm()">
						<div class="input-group mb-2">
							<input type="text" class="form-control" placeholder="Email Address" />
							<button type="submit" class="btn btn-outline-theme"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="M481-779q108 0 203.5 46T843-601q3 5 2.5 8t-3.5 6q-3 3-7.5 3t-8.5-5q-59-82-150.5-126T481-759q-103 0-193 44.5T138-589q-4 5-7.5 6t-7.5-1q-4-2-4-6.5t2-8.5q62-86 157-133t203-47Zm0 96q136 0 233.5 90T812-371q0 46-34 78t-82 32q-49 0-84-32t-35-78q0-39-28.5-65T481-462q-39 0-68 26t-29 65q0 104 63 173.5T604-100q6 2 7.5 5t.5 7q-1 5-4 7t-8 0q-103-26-169.5-103T364-371q0-47 34.5-79t82.5-32q48 0 82.5 32t34.5 79q0 38 29.5 64t68.5 26q38 0 66.5-26t28.5-64q0-123-91.5-206T481-660q-127 0-218.5 83T171-371q0 24 5.5 62.5T200-221q2 5 0 7.5t-5 4.5q-4 2-8.5 1t-6.5-6q-13-38-20.5-77.5T152-371q0-129 98-220.5T481-683Zm0-197q65 0 127.5 16T728-819q5 2 5.5 6t-1.5 7q-2 3-5.5 5t-8.5 0q-55-27-115-42.5T481-859q-62 0-121 14.5T247-801q-5 2-7.5.5T235-805q-2-2-2-6t3-6q57-31 119.5-47T481-880Zm0 298q92 0 158.5 61T706-371q0 5-2.5 7.5T696-361q-5 0-8-2.5t-3-7.5q0-81-60.5-136T481-562q-83 0-142.5 55T279-371q0 85 29.5 145T396-106q4 4 3.5 7.5T396-92q-2 2-6.5 3.5T381-92q-58-60-90.5-126T258-371q0-89 65.5-150T481-582Zm-1 200q5 0 7.5 3t2.5 8q0 81 59.5 133.5T687-185q8 0 19-1t24-3q5-1 8 1.5t4 5.5q1 4-.5 7t-6.5 4q-18 5-31.5 5.5t-16.5.5q-88 0-152.5-58.5T470-371q0-5 2.5-8t7.5-3Z"/></svg></button>
						</div>
					</form>
					<div class="mb-1 small text-inverse text-opacity-50">* Subscribe and get notified for latest news</div><br />
				</div><br />
				<div class="text-center small text-inverse text-opacity-50">
					<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="M219.82-650q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5ZM400-80q-66 0-113-47t-47-113v-240q0-100 70-170t170-70h73q69 0 118 46.5T720-559q0 46-24.5 84.5T629-416q-32 15-50.5 44.5T560-307v67q0 67-46.5 113.5T400-80Zm-80.18-640q-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-40q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v40q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63ZM400-140q42 0 71-29t29-71v-67q0-52.23 27.56-96.36Q555.11-447.49 603-470q26-13 41.5-37.22T660-560q0-42-31.5-71T553-660h-73q-75 0-127.5 52.5T300-480v240q0 42 29 71t71 29Zm39.82-620q-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-40q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v40q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63Zm120 0q-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-60q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v60q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63Zm140.06 40q-20.88 0-35.38-14.58Q650-749.17 650-770v-60q0-20.83 14.62-35.42Q679.24-880 700.12-880q20.88 0 35.38 14.58Q750-850.83 750-830v60q0 20.83-14.62 35.42Q720.76-720 699.88-720ZM400-480Z"/></svg> {{ year }} NYAWO RIGHT RESERVED
				</div>
			</div>
			<!-- END coming-soon-content -->
		</div>
	</div>
	<!-- END coming-soon -->
</template>