<template>
  <div>
    <nav
      class="navbar navbar-dark bg-danger justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a href="" class="navbar-brand float-left">VDOM Stack application</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/"
              >Create Contact</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacts"
              >List Contacts</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
