<script setup lang="ts">
import { slideToggle } from '@/composables/slideToggle.js';
import { useAppOptionStore } from '@/stores/app-option';
import { RouterLink } from 'vue-router';

const appOption = useAppOptionStore();
const notificationData = [{
	icon: 'bi bi-bag text-theme',
	title: 'NEW ORDER RECEIVED ($1,299)',
	time: 'JUST NOW'
},{
	icon: 'bi bi-person-circle text-theme',
	title: '3 NEW ACCOUNT CREATED',
	time: '2 MINUTES AGO'
},{
	icon: 'bi bi-gear text-theme',
	title: 'SETUP COMPLETED',
	time: '3 MINUTES AGO'
},{
	icon: 'bi bi-grid text-theme',
	title: 'WIDGET INSTALLATION DONE',
	time: '5 MINUTES AGO'
},{
	icon: 'bi bi-credit-card text-theme',
	title: 'PAYMENT METHOD ENABLED',
	time: '10 MINUTES AGO'
}];

function toggleAppSidebarCollapsed() {
	if (!appOption.appSidebarHide) {
		if (appOption.appSidebarCollapsed) {
			appOption.appSidebarToggled = !appOption.appSidebarToggled;
		} else if (appOption.appSidebarToggled) {
			appOption.appSidebarToggled = !appOption.appSidebarToggled;
		}
		appOption.appSidebarCollapsed = !appOption.appSidebarCollapsed;
	}
}
function toggleAppSidebarMobileToggled() {
	if (!(appOption.appTopNav && appOption.appSidebarHide)) {
		appOption.appSidebarMobileToggled = !appOption.appSidebarMobileToggled;
	} else {
		slideToggle(document.querySelector('.app-top-nav'));
		window.scrollTo(0, 0);
	}
}
function toggleAppHeaderSearch(event) {
	event.preventDefault();
	
	appOption.appHeaderSearchToggled = !appOption.appHeaderSearchToggled;
}
function checkForm(event) {
	event.preventDefault();
	this.$router.push({ path: '/extra/search' })
}
</script>
<template>
	<div id="header" class="app-header">
		<!-- BEGIN desktop-toggler -->
		<div class="desktop-toggler">
			<button type="button" class="menu-toggler" v-on:click="toggleAppSidebarCollapsed">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</button>
		</div>
		<!-- BEGIN desktop-toggler -->
		
		<!-- BEGIN mobile-toggler -->
		<div class="mobile-toggler">
			<button type="button" class="menu-toggler" v-on:click="toggleAppSidebarMobileToggled">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</button>
		</div>
		<!-- END mobile-toggler -->
		
		<!-- BEGIN brand -->
		<div class="brand">
			<RouterLink to="/" class="brand-logo">
				<span class="brand-img">
					<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="M602-319h131q12.75 0 21.38-8.63Q763-336.25 763-349v-262q0-12.75-8.62-21.38Q745.75-641 733-641H602q-12.75 0-21.37 8.62Q572-623.75 572-611v262q0 12.75 8.63 21.37Q589.25-319 602-319Zm30-60v-202h71v202h-71Zm-278 60h126q12.75 0 21.38-8.63Q510-336.25 510-349v-262q0-12.75-8.62-21.38Q492.75-641 480-641H354q-12.75 0-21.37 8.62Q324-623.75 324-611v262q0 12.75 8.63 21.37Q341.25-319 354-319Zm30-60v-202h66v202h-66Zm-187 60h60v-322h-60v322ZM80-160v-640h800v640H80Zm60-580v520-520Zm0 520h680v-520H140v520Z"/></svg>

				</span>
				<span class="brand-text">WE NEVER CLOSE</span>
			</RouterLink>
		</div>
		<!-- END brand -->
		
		<!-- BEGIN menu -->
		<div class="menu">
			<div class="menu-item">
				<a href="#" v-on:click="toggleAppHeaderSearch" data-toggle-class="app-header-menu-search-toggled" data-toggle-target=".app" class="menu-link">
					<div class="menu-icon"><i class="bi bi-search nav-icon"></i></div>
				</a>
			</div>
			<div class="menu-item dropdown dropdown-mobile-full">
				<a href="#" data-bs-toggle="dropdown" data-bs-display="static" class="menu-link">
					<div class="menu-icon"><i class="bi bi-grid-3x3-gap nav-icon"></i></div>
				</a>
				<div class="dropdown-menu fade dropdown-menu-end w-300px text-center p-0 mt-1">
					<div class="row row-grid gx-0">
						<div class="col-4">
							<RouterLink to="/email/inbox" class="dropdown-item text-decoration-none p-3 bg-none">
								<div class="position-relative">
									<i class="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
									<i class="bi bi-envelope h2 opacity-5 d-block my-1"></i>
								</div>
								<div class="fw-500 fs-10px text-inverse">INBOX</div>
							</RouterLink>
						</div>
						<div class="col-4">
							<RouterLink to="/pos/customer-order" class="dropdown-item text-decoration-none p-3 bg-none">
								<div><i class="bi bi-hdd-network h2 opacity-5 d-block my-1"></i></div>
								<div class="fw-500 fs-10px text-inverse">POS SYSTEM</div>
							</RouterLink>
						</div>
						<div class="col-4">
							<RouterLink to="/calendar" class="dropdown-item text-decoration-none p-3 bg-none">
								<div><i class="bi bi-calendar4 h2 opacity-5 d-block my-1"></i></div>
								<div class="fw-500 fs-10px text-inverse">CALENDAR</div>
							</RouterLink>
						</div>
					</div>
					<div class="row row-grid gx-0">
						<div class="col-4">
							<RouterLink to="/helper" class="dropdown-item text-decoration-none p-3 bg-none">
								<div><i class="bi bi-terminal h2 opacity-5 d-block my-1"></i></div>
								<div class="fw-500 fs-10px text-inverse">HELPER</div>
							</RouterLink>
						</div>
						<div class="col-4">
							<RouterLink to="/settings" class="dropdown-item text-decoration-none p-3 bg-none">
								<div class="position-relative">
									<i class="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
									<i class="bi bi-sliders h2 opacity-5 d-block my-1"></i>
								</div>
								<div class="fw-500 fs-10px text-inverse">SETTINGS</div>
							</RouterLink>
						</div>
						<div class="col-4">
							<RouterLink to="/widgets" class="dropdown-item text-decoration-none p-3 bg-none">
								<div><i class="bi bi-collection-play h2 opacity-5 d-block my-1"></i></div>
								<div class="fw-500 fs-10px text-inverse">WIDGETS</div>
							</RouterLink>
						</div>
					</div>
				</div>
			</div>
			<div class="menu-item dropdown dropdown-mobile-full">
				<a href="#" data-bs-toggle="dropdown" data-bs-display="static" class="menu-link">
					<div class="menu-icon"><i class="bi bi-bell nav-icon"></i></div>
					<div class="menu-badge bg-theme" v-if="notificationData && notificationData.length > 0"></div>
				</a>
				<div class="dropdown-menu dropdown-menu-end mt-1 w-300px fs-11px pt-1">
					<h6 class="dropdown-header fs-10px mb-1">NOTIFICATIONS</h6>
					<div class="dropdown-divider mt-1"></div>
					<template v-if="notificationData && notificationData.length > 0">
						<a href="#" class="d-flex align-items-center py-10px dropdown-item text-wrap fw-semibold" v-for="(notification, index) in notificationData" v-bind:key="index">
							<div class="fs-20px">
								<i v-if="notification.icon" v-bind:class="notification.icon"></i>
							</div>
							<div class="flex-1 flex-wrap ps-3">
								<div class="mb-1 text-inverse">{{ notification.title }}</div>
								<div class="small text-inverse text-opacity-50">{{ notification.time }}</div>
							</div>
							<div class="ps-2 fs-16px">
								<i class="bi bi-chevron-right"></i>
							</div>
						</a>
					</template>
					<template v-else>
						<div class="px-3 pb-3 pt-2">
							No record found
						</div>
					</template>
					<hr class="m-0">
					<div class="py-10px mb-n2 text-center">
						<a href="#" class="text-decoration-none fw-bold">SEE ALL</a>
					</div>
				</div>
			</div>
			<div class="menu-item dropdown dropdown-mobile-full">
				<a href="#" data-bs-toggle="dropdown" data-bs-display="static" class="menu-link">
					<div class="menu-img online">
						<img :src="'/assets/img/user/profile.jpg'" alt="Profile" height="60">
					</div>
					<div class="menu-text d-sm-block d-none w-170px">SHOP@BUYBYE.COM</div>
				</a>
				<div class="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
					<RouterLink to="/profile" class="dropdown-item d-flex align-items-center">PROFILE <i class="bi bi-person-circle ms-auto text-theme fs-16px my-n1"></i></RouterLink>
					<RouterLink to="/email/inbox" class="dropdown-item d-flex align-items-center">INBOX <i class="bi bi-envelope ms-auto text-theme fs-16px my-n1"></i></RouterLink>
					<RouterLink to="/calendar" class="dropdown-item d-flex align-items-center">CALENDAR <i class="bi bi-calendar ms-auto text-theme fs-16px my-n1"></i></RouterLink>
					<RouterLink to="/settings" class="dropdown-item d-flex align-items-center">SETTINGS <i class="bi bi-gear ms-auto text-theme fs-16px my-n1"></i></RouterLink>
					<div class="dropdown-divider"></div>
					<RouterLink to="/page/login" class="dropdown-item d-flex align-items-center">LOGOUT <i class="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i></RouterLink>
				</div>
			</div>
		</div>
		<!-- END menu -->
		
		<!-- BEGIN menu-search -->
		<form class="menu-search" name="header_search_form" v-on:submit="checkForm">
			<div class="menu-search-container">
				<div class="menu-search-icon"><i class="bi bi-search"></i></div>
				<div class="menu-search-input">
					<input type="text" class="form-control form-control-lg" placeholder="Search menu...">
				</div>
				<div class="menu-search-icon">
					<a href="#" v-on:click="toggleAppHeaderSearch"><i class="bi bi-x-lg"></i></a>
				</div>
			</div>
		</form>
		<!-- END menu-search -->
	</div>
</template>
