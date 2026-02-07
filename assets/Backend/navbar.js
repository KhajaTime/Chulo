// Update navbar based on login state
function updateNavbar() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const navProfile = document.getElementById("navprofile");

    if (!navProfile) return;

    if (isLoggedIn) {
        const currentUser = getCurrentUser();
        
        // Fallback to getUserData if currentUser is not set
        const user = currentUser || getUserData();
        const username = user ? user.username : "User";
        const email = user ? user.email : "";
        const isAdmin = user ? user.isAdmin === true : false;

        // Add styles to head if not already present
        if (!document.getElementById("navbar-profile-menu-styles")) {
            const style = document.createElement("style");
            style.id = "navbar-profile-menu-styles";
            style.textContent = `
                .navbar-profile-dropdown-container {
                    position: relative;
                }
                
                .navbar-profile-menu-wrapper {
                    display: flex;
                    flex-direction: column;
                    width: 220px;
                    background-color: var(--bg-primary);
                    border-radius: 8px;
                    position: absolute;
                    top: 50px;
                    right: 0;
                    z-index: 10000;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
                    overflow: hidden;
                }
                
                .navbar-profile-menu-header {
                    padding: 15px;
                    background-color: var(--bg-secondary);
                    border-bottom: 1px solid #30363d;
                }
                
                .navbar-profile-username {
                    color: var(--text-primary);
                    font-weight: 600;
                    font-size: 14px;
                    display: block;
                }
                
                .navbar-profile-userrole {
                    font-size: 12px;
                    color: #8b949e;
                    margin-top: 4px;
                    display: block;
                }
                
                .navbar-profile-menu-item {
                    background-color: transparent;
                    border: none;
                    padding: 12px 15px;
                    color: var(--text-primary);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    border-radius: 0;
                    transition: background-color 0.2s;
                    font-size: 14px;
                    text-align: left;
                    width: 100%;
                    position: relative;
                }
                
                .navbar-profile-menu-item:hover {
                    background-color: var(--bg-secondary);
                }
                
                .navbar-profile-menu-item:active,
                .navbar-profile-menu-item:focus {
                    background-color: #1a1f24;
                    outline: none;
                }
                
                .navbar-profile-menu-item::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 3px;
                    height: 70%;
                    background-color: #2f81f7;
                    border-radius: 0 3px 3px 0;
                    opacity: 0;
                    transition: opacity 0.2s;
                }
                
                .navbar-profile-menu-item:hover::before,
                .navbar-profile-menu-item:focus::before,
                .navbar-profile-menu-item:active::before {
                    opacity: 1;
                }
                
                .navbar-profile-menu-item svg {
                    width: 16px;
                    height: 16px;
                    flex-shrink: 0;
                }
                
                .navbar-profile-menu-item.logout-btn {
                    border-top: 1px solid #30363d;
                    margin-top: 5px;
                    color: #f85149;
                }
                
                .navbar-profile-menu-item.logout-btn:hover {
                    background-color: #2d1519;
                }
                
                #sign-up-btn {
                    display: none;
                }
            `;
            document.head.appendChild(style);
        }

        // Generate navbar HTML based on user role
        if (isAdmin) {
            // Admin navbar
            navProfile.innerHTML = `
        <div class="navbar-profile-dropdown-container">
            <a href="#" id="navbar-profile-toggle-btn">
                <i class="fas fa-user-circle" style="scale: 1.4"></i>
            </a>
            <div class="navbar-profile-menu-wrapper" id="navbar-profile-dropdown-menu" style="display: none;">
                <div class="navbar-profile-menu-header">
                    <span class="navbar-profile-username">Hello ${username}!</span>
                    <span class="navbar-profile-userrole" style="font-weight: bold; color: #FFD700;">Admin Session</span>
                </div>
                <button class="navbar-profile-menu-item" onclick="alert('Profile page coming soon!')">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2">
                        <path fill="#7D8590" d="m1.5 13v1a.5.5 0 0 0 .3379.4731 18.9718 18.9718 0 0 0 6.1621 1.0269 18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0 -4.461-6.1676 3.5 3.5 0 1 0 -4.078 0 6.5083 6.5083 0 0 0 -4.461 6.1676zm4-9a2.5 2.5 0 1 1 2.5 2.5 2.5026 2.5026 0 0 1 -2.5-2.5zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1 -11 0v-.6392a5.5066 5.5066 0 0 1 5.5-5.5z"></path>
                    </svg>
                    Profile
                </button>
                <button class="navbar-profile-menu-item" onclick="alert('Settings page coming soon!')">
                    <svg id="Line" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#7D8590" d="m17.074 30h-2.148c-1.038 0-1.914-.811-1.994-1.846l-.125-1.635c-.687-.208-1.351-.484-1.985-.824l-1.246 1.067c-.788.677-1.98.631-2.715-.104l-1.52-1.52c-.734-.734-.78-1.927-.104-2.715l1.067-1.246c-.34-.635-.616-1.299-.824-1.985l-1.634-.125c-1.035-.079-1.846-.955-1.846-1.993v-2.148c0-1.038.811-1.914 1.846-1.994l1.635-.125c.208-.687.484-1.351.824-1.985l-1.068-1.247c-.676-.788-.631-1.98.104-2.715l1.52-1.52c.734-.734 1.927-.779 2.715-.104l1.246 1.067c.635-.34 1.299-.616 1.985-.824l.125-1.634c.08-1.034.956-1.845 1.994-1.845h2.148c1.038 0 1.914.811 1.994 1.846l.125 1.635c.687.208 1.351.484 1.985.824l1.246-1.067c.787-.676 1.98-.631 2.715.104l1.52 1.52c.734.734.78 1.927.104 2.715l-1.067 1.246c.34.635.616 1.299.824 1.985l1.634.125c1.035.079 1.846.955 1.846 1.993v2.148c0 1.038-.811 1.914-1.846 1.994l-1.635.125c-.208.687-.484 1.351-.824 1.985l1.067 1.246c.677.788.631 1.98-.104 2.715l-1.52 1.52c-.734.734-1.928.78-2.715.104l-1.246-1.067c-.635.34-1.299.616-1.985.824l-.125 1.634c-.079 1.035-.955 1.846-1.993 1.846zm-5.835-6.373c.848.53 1.768.912 2.734 1.135.426.099.739.462.772.898l.18 2.341 2.149-.001.18-2.34c.033-.437.347-.8.772-.898.967-.223 1.887-.604 2.734-1.135.371-.232.849-.197 1.181.089l1.784 1.529 1.52-1.52-1.529-1.784c-.285-.332-.321-.811-.089-1.181.53-.848.912-1.768 1.135-2.734.099-.426.462-.739.898-.772l2.341-.18h-.001v-2.148l-2.34-.18c-.437-.033-.8-.347-.898-.772-.223-.967-.604-1.887-1.135-2.734-.232-.37-.196-.849.089-1.181l1.529-1.784-1.52-1.52-1.784 1.529c-.332.286-.81.321-1.181.089-.848-.53-1.768-.912-2.734-1.135-.426-.099-.739-.462-.772-.898l-.18-2.341-2.148.001-.18 2.34c-.033.437-.347.8-.772.898-.967.223-1.887.604-2.734 1.135-.37.232-.849.197-1.181-.089l-1.785-1.529-1.52 1.52 1.529 1.784c.285.332.321.811.089 1.181-.53.848-.912 1.768-1.135 2.734-.099.426-.462.739-.898.772l-2.341.18.002 2.148 2.34.18c.437.033.8.347.898.772.223.967.604 1.887 1.135 2.734.232.37.196.849-.089 1.181l-1.529 1.784 1.52 1.52 1.784-1.529c.332-.287.813-.32 1.18-.089z"></path>
                        <path fill="#7D8590" d="m16 23c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path>
                    </svg>
                    Settings
                </button>
                <button class="navbar-profile-menu-item" onclick="alert('Inventory management coming soon!')">
                    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#7D8590" d="m109.9 20.63a6.232 6.232 0 0 0 -8.588-.22l-57.463 51.843c-.012.011-.02.024-.031.035s-.023.017-.034.027l-4.721 4.722a1.749 1.749 0 0 0 0 2.475l.341.342-3.16 3.16a8 8 0 0 0 -1.424 1.967 11.382 11.382 0 0 0 -12.055 10.609c-.006.036-.011.074-.015.111a5.763 5.763 0 0 1 -4.928 5.41 1.75 1.75 0 0 0 -.844 3.14c4.844 3.619 9.4 4.915 13.338 4.915a17.14 17.14 0 0 0 11.738-4.545l.182-.167a11.354 11.354 0 0 0 3.348-8.081c0-.225-.02-.445-.032-.667a8.041 8.041 0 0 0 1.962-1.421l3.16-3.161.342.342a1.749 1.749 0 0 0 2.475 0l4.722-4.722c.011-.011.018-.025.029-.036s.023-.018.033-.029l51.844-57.46a6.236 6.236 0 0 0 -.219-8.589zm-70.1 81.311-.122.111c-.808.787-7.667 6.974-17.826 1.221a9.166 9.166 0 0 0 4.36-7.036 1.758 1.758 0 0 0 .036-.273 7.892 7.892 0 0 1 9.122-7.414c.017.005.031.014.048.019a1.717 1.717 0 0 0 .379.055 7.918 7.918 0 0 1 4 13.317zm5.239-10.131c-.093.093-.194.176-.293.26a11.459 11.459 0 0 0 -6.289-6.286c.084-.1.167-.2.261-.3l3.161-3.161 6.321 6.326zm7.214-4.057-9.479-9.479 2.247-2.247 9.479 9.479zm55.267-60.879-50.61 56.092-9.348-9.348 56.092-50.61a2.737 2.737 0 0 1 3.866 3.866z"></path>
                    </svg>
                    Inventory Management
                </button>
                <button class="navbar-profile-menu-item" onclick="alert('Analytics coming soon!')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7D8590" class="bi bi-graph-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                    </svg>
                    View Analytics
                </button>
                <button class="navbar-profile-menu-item" onclick="alert('Sales reports coming soon!')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7D8590" class="bi bi-files" viewBox="0 0 16 16">
                        <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
                    </svg>
                    Sales Reports
                </button>
                <button class="navbar-profile-menu-item logout-btn" onclick="logout()">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 16L21 12M21 12L17 8M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9" stroke="#f85149" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Logout
                </button>
            </div>
        </div>
            `;
        } else {
            // Regular user navbar
            navProfile.innerHTML = `
        <div class="navbar-profile-dropdown-container">
            <a href="#" id="navbar-profile-toggle-btn">
                <i class="fas fa-user-circle" style="scale: 1.4"></i>
            </a>
            <div class="navbar-profile-menu-wrapper" id="navbar-profile-dropdown-menu" style="display: none;">
                <div class="navbar-profile-menu-header">
                    <span class="navbar-profile-username">Hello ${username}!</span>
                    <span class="navbar-profile-userrole">${email}</span>
                </div>
                <button class="navbar-profile-menu-item" onclick="alert('Profile page coming soon!')">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2">
                        <path fill="#7D8590" d="m1.5 13v1a.5.5 0 0 0 .3379.4731 18.9718 18.9718 0 0 0 6.1621 1.0269 18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0 -4.461-6.1676 3.5 3.5 0 1 0 -4.078 0 6.5083 6.5083 0 0 0 -4.461 6.1676zm4-9a2.5 2.5 0 1 1 2.5 2.5 2.5026 2.5026 0 0 1 -2.5-2.5zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1 -11 0v-.6392a5.5066 5.5066 0 0 1 5.5-5.5z"></path>
                    </svg>
                    Profile
                </button>
                <button class="navbar-profile-menu-item" onclick="alert('Settings page coming soon!')">
                    <svg id="Line" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#7D8590" d="m17.074 30h-2.148c-1.038 0-1.914-.811-1.994-1.846l-.125-1.635c-.687-.208-1.351-.484-1.985-.824l-1.246 1.067c-.788.677-1.98.631-2.715-.104l-1.52-1.52c-.734-.734-.78-1.927-.104-2.715l1.067-1.246c-.34-.635-.616-1.299-.824-1.985l-1.634-.125c-1.035-.079-1.846-.955-1.846-1.993v-2.148c0-1.038.811-1.914 1.846-1.994l1.635-.125c.208-.687.484-1.351.824-1.985l-1.068-1.247c-.676-.788-.631-1.98.104-2.715l1.52-1.52c.734-.734 1.927-.779 2.715-.104l1.246 1.067c.635-.34 1.299-.616 1.985-.824l.125-1.634c.08-1.034.956-1.845 1.994-1.845h2.148c1.038 0 1.914.811 1.994 1.846l.125 1.635c.687.208 1.351.484 1.985.824l1.246-1.067c.787-.676 1.98-.631 2.715.104l1.52 1.52c.734.734.78 1.927.104 2.715l-1.067 1.246c.34.635.616 1.299.824 1.985l1.634.125c1.035.079 1.846.955 1.846 1.993v2.148c0 1.038-.811 1.914-1.846 1.994l-1.635.125c-.208.687-.484 1.351-.824 1.985l1.067 1.246c.677.788.631 1.98-.104 2.715l-1.52 1.52c-.734.734-1.928.78-2.715.104l-1.246-1.067c-.635.34-1.299.616-1.985.824l-.125 1.634c-.079 1.035-.955 1.846-1.993 1.846zm-5.835-6.373c.848.53 1.768.912 2.734 1.135.426.099.739.462.772.898l.18 2.341 2.149-.001.18-2.34c.033-.437.347-.8.772-.898.967-.223 1.887-.604 2.734-1.135.371-.232.849-.197 1.181.089l1.784 1.529 1.52-1.52-1.529-1.784c-.285-.332-.321-.811-.089-1.181.53-.848.912-1.768 1.135-2.734.099-.426.462-.739.898-.772l2.341-.18h-.001v-2.148l-2.34-.18c-.437-.033-.8-.347-.898-.772-.223-.967-.604-1.887-1.135-2.734-.232-.37-.196-.849.089-1.181l1.529-1.784-1.52-1.52-1.784 1.529c-.332.286-.81.321-1.181.089-.848-.53-1.768-.912-2.734-1.135-.426-.099-.739-.462-.772-.898l-.18-2.341-2.148.001-.18 2.34c-.033.437-.347.8-.772.898-.967.223-1.887.604-2.734 1.135-.37.232-.849.197-1.181-.089l-1.785-1.529-1.52 1.52 1.529 1.784c.285.332.321.811.089 1.181-.53.848-.912 1.768-1.135 2.734-.099.426-.462.739-.898.772l-2.341.18.002 2.148 2.34.18c.437.033.8.347.898.772.223.967.604 1.887 1.135 2.734.232.37.196.849-.089 1.181l-1.529 1.784 1.52 1.52 1.784-1.529c.332-.287.813-.32 1.18-.089z"></path>
                        <path fill="#7D8590" d="m16 23c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path>
                    </svg>
                    Settings
                </button>
                <button class="navbar-profile-menu-item" onclick="window.location.href='order-history.html'">
                    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#7D8590" d="m109.9 20.63a6.232 6.232 0 0 0 -8.588-.22l-57.463 51.843c-.012.011-.02.024-.031.035s-.023.017-.034.027l-4.721 4.722a1.749 1.749 0 0 0 0 2.475l.341.342-3.16 3.16a8 8 0 0 0 -1.424 1.967 11.382 11.382 0 0 0 -12.055 10.609c-.006.036-.011.074-.015.111a5.763 5.763 0 0 1 -4.928 5.41 1.75 1.75 0 0 0 -.844 3.14c4.844 3.619 9.4 4.915 13.338 4.915a17.14 17.14 0 0 0 11.738-4.545l.182-.167a11.354 11.354 0 0 0 3.348-8.081c0-.225-.02-.445-.032-.667a8.041 8.041 0 0 0 1.962-1.421l3.16-3.161.342.342a1.749 1.749 0 0 0 2.475 0l4.722-4.722c.011-.011.018-.025.029-.036s.023-.018.033-.029l51.844-57.46a6.236 6.236 0 0 0 -.219-8.589zm-70.1 81.311-.122.111c-.808.787-7.667 6.974-17.826 1.221a9.166 9.166 0 0 0 4.36-7.036 1.758 1.758 0 0 0 .036-.273 7.892 7.892 0 0 1 9.122-7.414c.017.005.031.014.048.019a1.717 1.717 0 0 0 .379.055 7.918 7.918 0 0 1 4 13.317zm5.239-10.131c-.093.093-.194.176-.293.26a11.459 11.459 0 0 0 -6.289-6.286c.084-.1.167-.2.261-.3l3.161-3.161 6.321 6.326zm7.214-4.057-9.479-9.479 2.247-2.247 9.479 9.479zm55.267-60.879-50.61 56.092-9.348-9.348 56.092-50.61a2.737 2.737 0 0 1 3.866 3.866z"></path>
                    </svg>
                    Manage Orders
                </button>
                <button class="navbar-profile-menu-item" onclick="alert('Notifications coming soon!')">
                    <svg fill="none" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="m11.9572 4.31201c-3.35401 0-6.00906 2.59741-6.00906 5.67742v3.29037c0 .1986-.05916.3927-.16992.5576l-1.62529 2.4193-.01077.0157c-.18701.2673-.16653.5113-.07001.6868.10031.1825.31959.3528.67282.3528h14.52603c.2546 0 .5013-.1515.6391-.3968.1315-.2343.1117-.4475-.0118-.6093-.0065-.0085-.0129-.0171-.0191-.0258l-1.7269-2.4194c-.121-.1695-.186-.3726-.186-.5809v-3.29037c0-1.54561-.6851-3.023-1.7072-4.00431-1.1617-1.01594-2.6545-1.67311-4.3019-1.67311zm-8.00906 5.67742c0-4.27483 3.64294-7.67742 8.00906-7.67742 2.2055 0 4.1606.88547 5.6378 2.18455.01.00877.0198.01774.0294.02691 1.408 1.34136 2.3419 3.34131 2.3419 5.46596v2.97007l1.5325 2.1471c.6775.8999.6054 1.9859.1552 2.7877-.4464.795-1.3171 1.4177-2.383 1.4177h-14.52603c-2.16218 0-3.55087-2.302-2.24739-4.1777l1.45056-2.1593zm4.05187 11.32257c0-.5523.44772-1 1-1h5.99999c.5523 0 1 .4477 1 1s-.4477 1-1 1h-5.99999c-.55228 0-1-.4477-1-1z" fill="#7D8590" fill-rule="evenodd"></path>
                    </svg>
                    Notifications
                </button>
                <button class="navbar-profile-menu-item logout-btn" onclick="logout()">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 16L21 12M21 12L17 8M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9" stroke="#f85149" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Logout
                </button>
            </div>
        </div>
            `;
        }

        // Add click event to toggle menu
        const profileToggle = document.getElementById("navbar-profile-toggle-btn");
        if (profileToggle) {
            profileToggle.addEventListener("click", (e) => {
                e.preventDefault();
                const menu = document.getElementById("navbar-profile-dropdown-menu");
                if (menu) {
                    menu.style.display = menu.style.display === "none" ? "flex" : "none";
                }
            });
        }

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            const menu = document.getElementById("navbar-profile-dropdown-menu");
            const toggle = document.getElementById("navbar-profile-toggle-btn");
            if (
                menu &&
                toggle &&
                !toggle.contains(e.target) &&
                !menu.contains(e.target)
            ) {
                menu.style.display = "none";
            }
        });
    } else {
        // Not logged in - show login icon
        navProfile.innerHTML = `
            <a href="signup.html">
                <i class="fas fa-user-alt" style="scale: 1.4"></i>
            </a>
        `;
    }
}

// Run on page load
document.addEventListener("DOMContentLoaded", updateNavbar);
