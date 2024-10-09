<template>
    <nav class="header__nav">
        <ul class="header__nav-list">
            <li class="header__nav-list-item">
                <a href="#" class="header-link">Main</a>
            </li>
            <li class="header__nav-list-item">
                <a href="#" class="header-link">Products</a>
            </li>
            <li class="header__nav-list-item">
                <a href="#" class="header-link">Articles</a>
            </li>
        </ul>
    </nav>
  </template>
  
  <script setup></script>
  
  <style lang="scss">
    .header__nav-list {
        display: flex;
        height: 60px;
        list-style-type: none;
        padding: 22px 16px;
    }
    .header__nav-list-item:not(:last-child){
        margin-right: 12px;
    }
    .header-link {
        text-decoration: none;
        color: #111;
        font-family: Montserrat;
        font-weight: 600;
        font-size: 16px;
        line-height: 0.24px;
    }
</style>