<template>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
    width: 7px;
    height: 7px;
}
::-webkit-scrollbar-corner {
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #949ea8;
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.4) 25%,
   transparent 25%, transparent 50%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.4) 75%, transparent 75%, transparent);
  border-radius: 7px;
}
::-webkit-scrollbar-track {
  background-color: #fff;
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #949ea8;
  background-image: none;
}
::-webkit-scrollbar-thumb:active {
  background-color: #949ea8;
  background-image: none;
}
</style>
