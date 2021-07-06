<template>
  <div class="footer">
    <div class="contacts">
      <a href="https://www.facebook.com" target="_blank"
        ><b-icon icon="facebook" font-scale="1.5"></b-icon> |
      </a>
      <a href="https://www.instagram.com" target="_blank"
        ><b-icon icon="instagram" font-scale="1.5"></b-icon>
      </a>
      <br />
      <span>&copy; 2021 CONNECT-E</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss">
.footer {
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #d9d9ea;
  color: #0e0302;
  .contacts {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 50%;
    height: 30%;
    margin: auto;
    span {
      font-size: large;
    }
  }
}
</style>
