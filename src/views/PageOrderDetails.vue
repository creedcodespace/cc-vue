<template>
	<div class="d-flex align-items-center mb-3">
		<div>
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="javascript:;">PAGES</a></li>
				<li class="breadcrumb-item active">ORDER DETAILS</li>
			</ol>
			<h1 class="page-header mb-0">Order Details</h1>
		</div>
	</div>
	
	<div class="mb-3 d-md-flex fw-bold">
		<div class="mt-md-0 mt-2"><a href="#" class="text-decoration-none text-inverse"><i class="bi bi-printer fa-fw me-1 text-inverse text-opacity-50"></i> Print</a></div>
		<div class="ms-md-4 mt-md-0 mt-2"><a href="#" class="text-decoration-none text-inverse"><i class="bi bi-boxes fa-fw me-1 text-inverse text-opacity-50"></i> Restock items</a></div>
		<div class="ms-md-4 mt-md-0 mt-2"><a href="#" class="text-decoration-none text-inverse"><i class="bi bi-pen fa-fw me-1 text-inverse text-opacity-50"></i> Edit</a></div>
		<div class="ms-md-4 mt-md-0 mt-2 dropdown-toggle">
			<a href="#" data-bs-toggle="dropdown" class="text-decoration-none text-inverse"><i class="bi bi-gear fa-fw me-1 text-inverse text-opacity-50"></i> More Actions</a>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
				<a class="dropdown-item" href="#">Something else here</a>
				<div role="separator" class="dropdown-divider"></div>
				<a class="dropdown-item" href="#">Separated link</a>
			</div>
		</div>
	</div>
	<div class="row gx-4">
		<div class="col-lg-8">
			<card class="mb-4">
				<card-header class="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
					Products (3)
					<a href="#" class="ms-auto text-decoration-none text-inverse text-opacity-50"><i class="bi bi-truck fa-lg me-1"></i> Add Tracking Link</a>
				</card-header>
				<card-body class="text-inverse">
					<div class="row align-items-center">
						<div class="col-lg-8 d-flex align-items-center">
							<div class="h-65px w-65px d-flex align-items-center justify-content-center position-relative bg-white p-1">
								<img src="/assets/img/product/product-1.jpg" alt="" class="mw-100 mh-100">
								<span class="w-20px h-20px p-0 d-flex align-items-center justify-content-center badge bg-theme text-theme-color position-absolute end-0 top-0 fw-bold fs-12px rounded-pill mt-n2 me-n2">1</span>
							</div>
							<div class="ps-3 flex-1">
								<div><a href="#" class="text-decoration-none text-inverse">iPhone 13 Pro Max</a></div>
								<div class="text-inverse text-opacity-50 small">
									SKU: IP13PROMAX-512
								</div>
							</div>
						</div>
						<div class="col-lg-2 m-0 ps-lg-3">
							R9,999 x 1
						</div>
						<div class="col-lg-2 m-0 text-end">
							R9,999
						</div>
					</div>
					<hr class="my-4">
					<div class="row">
						<div class="col-lg-8 d-flex align-items-center">
							<div class="h-65px w-65px d-flex align-items-center justify-content-center position-relative bg-white p-1">
								<img src="/assets/img/product/product-2.jpg" alt="" class="mw-100 mh-100">
								<span class="w-20px h-20px p-0 d-flex align-items-center justify-content-center badge bg-theme text-theme-color position-absolute end-0 top-0 fw-bold fs-12px rounded-pill mt-n2 me-n2">1</span>
							</div>
							<div class="ps-3 flex-1">
								<div class=""><a href="#" class="text-decoration-none text-inverse">Macbook Pro 2025</a></div>
								<div class="text-inverse text-opacity-50 small">
									SKU: MACBOOKPRO-1TB
								</div>
							</div>
						</div>
						<div class="col-lg-2 m-0 ps-lg-3">
							R21,999 x 1
						</div>
						<div class="col-lg-2 m-0 text-end">
							R21,999
						</div>
					</div>
					<hr class="my-4">
					<div class="row">
						<div class="col-lg-8 d-flex align-items-center">
							<div class="h-65px w-65px d-flex align-items-center justify-content-center position-relative bg-white p-1">
								<img src="/assets/img/product/product-3.jpg" alt="" class="mw-100 mh-100">
								<span class="w-20px h-20px p-0 d-flex align-items-center justify-content-center badge bg-theme text-theme-color position-absolute end-0 top-0 fw-bold fs-12px rounded-pill mt-n2 me-n2">1</span>
							</div>
							<div class="ps-3 flex-1">
								<div class=""><a href="#" class="text-decoration-none text-inverse">Apple Watch 5</a></div>
								<div class="text-inverse text-opacity-50 small">
									SKU: APPLEWATCHBLACK
								</div>
							</div>
						</div>
						<div class="col-lg-2 m-0 ps-lg-3">
							R6,666 x 1
						</div>
						<div class="col-lg-2 text-inverse m-0 text-end">
							R6,666
						</div>
					</div>
				</card-body>
				<card-footer class="bg-none d-flex p-3">
					<a href="#" class="btn btn-outline-default ms-auto dropdown-toggle">More</a>
					<a href="#" class="btn btn-outline-theme ms-2">Add Tracking</a>
				</card-footer>
			</card>
			<card>
				<card-header class="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
					Payment Records
					<a href="#" class="ms-auto text-decoration-none text-inverse text-opacity-50"><i class="bifa-lg"></i><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-470h480q29 0 54.5 9t45.5 26v-45q0-42-29-71t-71-29H240q-42 0-71 29t-29 71v45q20-17 45.5-26t54.5-9Zm-97 136 477 115q7 2 14.5.5T647-385l160-134q-13-23-36-37t-51-14H240q-35 0-62 21.5T143-494Z"/></svg> View Y O U R WALLET records</a>
				</card-header>
				<card-body>
					<table class="table table-borderless table-sm m-0">
						<tbody>
							<tr>
								<td class="w-150px">Subtotal</td>
								<td>3 items</td>
								<td class="text-end">R38,664.00</td>
							</tr>
							<tr>
								<td>Tax</td>
								<td>VAT 15%</td>
								<td class="text-end">R5,799.60</td>
							</tr>
							<tr>
								<td>Shipping Fee</td>
								<td>promo code: <u class="text-success fw-bold small">FREESHIPPING</u> <small>(<span class="text-decoration-line-through">R222.00</span>)</small></td>
								<td class="text-end">R0.00</td>
							</tr>
							<tr>
								<td class="pb-2" colspan="2"><b>Total</b></td>
								<td class="text-end pb-2 text-decoration-underline"><b>R44,463.60</b></td>
							</tr>
							<tr>
								<td colspan="3">
									<hr class="m-0">
								</td>
							</tr>
							<tr>
								<td class="pt-2 pb-2 text-nowrap">
									Paid by customer
								</td>
								<td class="pt-2 pb-2">
									via <a href="#" class="text-decoration-none">Y O U R WALLET</a> (#RESTOBANK)
								</td>
								<td class="pt-2 pb-2 text-end">R44,463.60</td>
							</tr>
						</tbody>
					</table>
				</card-body>
				<card-footer class="bg-none d-flex p-3">
					<a href="#" class="btn btn-outline-theme ms-auto">Mark as paid</a>
				</card-footer>
			</card>
		</div>
		<div class="col-lg-4">
			<card class="mb-4">
				<card-header class="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
					Notes
					<a href="#" class="ms-auto text-decoration-none text-inverse text-opacity-50">Edit</a>
				</card-header>
				<card-body>
					No notes from customer
				</card-body>
			</card>
			<card class="mb-4">
				<card-header class="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
					Customer
					<a href="#" class="ms-auto text-decoration-none text-inverse text-opacity-50">Edit</a>
				</card-header>
				<card-body class="fw-bold">
					<div class="d-flex align-items-center">
						<a href="#" class="d-block"><img src="/assets/img/user/toki.jpg" alt="" width="45" class="rounded-pill" /></a>
						<div class="flex-1 ps-3">
							<a href="#" class="d-block text-decoration-none">Creed Code</a>
							apple@creedcode.com
						</div>
					</div>
				</card-body>
			</card>
			<card class="mb-4">
				<card-header class="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
					Shipping Information
					<a href="#" class="ms-auto text-decoration-none text-inverse text-opacity-50">Edit</a>
				</card-header>
				<card-body class="fw-bold">
					<i class="bi bi-telephone-fill fa-fw"></i> +2771-657-6322<br /><br />
					2 Nyawo Walk Drive<br />
					eSihlangwini, <br />
					KZN<br />
					PO 61<br />
					<br />
					<a href="#" class="text-decoration-none"><i class="bi bi-geo-alt-fill fa-fw"></i> View map</a>
				</card-body>
			</card>
			<card class="mb-4">
				<card-header class="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
					Billing Information
					<a href="#" class="ms-auto text-decoration-none text-inverse text-opacity-50">Edit</a>
				</card-header>
				<card-body class="fw-bold">
					2 Nyawo Walk Drive<br />
					eSihlangwini, <br />
					KZN<br />
					PO 61<br />
				</card-body>
			</card>
                    </div>
		</div><br /><br /><br />
<div class="text-center small text-inverse text-opacity-50">
					<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="M219.82-650q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5ZM400-80q-66 0-113-47t-47-113v-240q0-100 70-170t170-70h73q69 0 118 46.5T720-559q0 46-24.5 84.5T629-416q-32 15-50.5 44.5T560-307v67q0 67-46.5 113.5T400-80Zm-80.18-640q-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-40q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v40q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63ZM400-140q42 0 71-29t29-71v-67q0-52.23 27.56-96.36Q555.11-447.49 603-470q26-13 41.5-37.22T660-560q0-42-31.5-71T553-660h-73q-75 0-127.5 52.5T300-480v240q0 42 29 71t71 29Zm39.82-620q-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-40q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v40q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63Zm120 0q-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-60q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v60q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63Zm140.06 40q-20.88 0-35.38-14.58Q650-749.17 650-770v-60q0-20.83 14.62-35.42Q679.24-880 700.12-880q20.88 0 35.38 14.58Q750-850.83 750-830v60q0 20.83-14.62 35.42Q720.76-720 699.88-720ZM400-480Z"/></svg> {{ year }} NYAWO RIGHT RESERVED
				</div>
               
</template>