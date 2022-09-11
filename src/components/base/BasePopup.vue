<template>
    <div class="ms-popup-con">
        <div class="ms-popup-con-inner">
            <div class="ms-popup-con-content">
                <div class="ms-popup-con-body">
                    <div class="ms-popup-con-icon">
                        <div class="icon icon-48" :id="iconPopup"></div>
                    </div>
                    <div class="ms-popup-con-text">
                        <slot name="textPopup"></slot>
                    </div>
                </div>
                <div class="ms-popup-con-line"></div>
                <div class="ms-popup-con-footer">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BasePopup",
    props: {
        iconPopup: {
            type: String,
            default: ""
        },
       
    }
}
</script>
<style scoped>
.ms-popup-con
{
    position: relative;
    transition: all .2s;
    z-index: 10002;
    max-width: calc(100% - 30px);
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    background: #fff;
}
.ms-popup-con-inner
{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10002;
}
.ms-popup-con-content 
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    min-width:444px;
    max-width: 444px;
    width: 444px;
    background-color: #fff;
    padding: 32px;
}
.ms-popup-con-body
{
    display: flex;
    align-items: flex-start;
}
.ms-popup-con-text
{
    overflow: auto;
    max-height: 400px;
    margin-bottom: 32px;
    padding-left: 16px;
    padding-top: 12px;
}
.ms-popup-con-line
{
    height: 1px;
    background: #b8bcc3;
    margin-bottom: 20px;
}
.ms-popup-con-footer 
{
    position: relative;
    height: 36px;
}
</style>