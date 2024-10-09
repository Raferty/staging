<template>
    <div class="container header">
        <HeaderLogo />
        <Navigation />
        <input class="header-nav-search" type="text" placeholder="Search" autocomplete="off">
    </div>
  </template>
  
  <script setup></script>
  
  <style lang="scss">
    .header {
        height: 60px;
        margin-bottom: 36px;
    }
    .container {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        width: 1440px;
        padding: 6px 16px;
        margin: 0 auto;
    }
    .header-nav-search{
        appearance: none;
        box-sizing: border-box;
        width: 180px;
        height: 40px;
        padding: 12px 48px;
        border-radius: 5px;
        background-color: #F5F5F5;
        background-image: url("/public/SearchImg.svg");
        background-repeat: no-repeat;
        background-size: 40px 40px;
        background-position: left center;
    }
</style>