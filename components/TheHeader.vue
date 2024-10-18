<template>
    <header class="header">
        <div class="header__container">
            <HeaderLogo />
            <Navigation />
            <input class="header__container__nav" type="text" placeholder="Search" autocomplete="off">
        </div>
    </header>
  </template>
  
  <script setup>
import HeaderLogo from './icons/HeaderLogo.vue'; //Почему отображение лого в данной ветке не работает без этой строки, а в STG-props работает?
</script>
  
  <style lang="scss">
    .header {
        padding: 8px 0;
        margin-bottom: 36px;
    
        &__container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6px 16px;
            width: 100%;
            max-width: 1440px; //Не занимает нужные 1440px, а застягивается по всей ширине экрана
            margin: 0 auto;
        

            &__nav{
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
        }  
    }
</style>