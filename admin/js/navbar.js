$("#sidebarMenu").addClass("col-md-3 col-lg-2 d-md-block bg-light sidebar collapse");
$("#sidebarMenu").html(`
<div class="position-sticky pt-3">
<ul class="nav flex-column">
    <li class="nav-item">
        <a class="nav-link" aria-current="page" href="index.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Dashboard
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="news.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="feather feather-calendar">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Add News
        </a>
    </li>
    
</ul>
<div class="container mt-5 mb-3">
    <div class="row">
        <div class="col p-0">
            <a href="api/logout.php" class="btn btn-danger btn-sm m-0"
                style="font-size: .8rem;">Logout</a>
        </div>
    </div>
</div>
<hr>

</div>
`);