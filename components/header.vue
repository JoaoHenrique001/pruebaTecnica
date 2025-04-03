<template>
    <header>
        <div class="header-left">
            <div class="logo"><img src="../assets/images/logo_twitch.png" alt="logo">
                <span>MIDUTCH</span
                    ></div>
            <img src="../assets/icon/more.svg" class="more" alt="more">
        </div>

        <form class="middle-header">
            <input type="text" placeholder="Search">
            <button><img src="../assets/icon/search.svg" alt="search"></button>
        </form>

        <div class="rigth-header">
            <div class="notification"><img src="../assets/icon/notification.svg" alt=""> <span>63</span></div>
            <div class="auth">
            <button class="log-in">Log In</button>
            <button class="sign-up">Sign Up</button>
            </div>
            <img src="../assets/icon/profile.svg" alt="" class="person">
        </div>

    </header>
  </template>
  
  <script setup lang="ts"></script>