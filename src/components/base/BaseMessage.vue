<template>
<div>
    <BasePopup  iconPopup="icon-popup-warning" v-if="showPopup == 2" >
        <template v-slot:textPopup> {{ msg }}</template>
        <div class="flex justify-between">
            <BaseButton classBtn="btn btn-normal-default" textBtn="Không" @click="btnCancelPopup"></BaseButton>
            <BaseButton classBtn="btn btn-normal-green" textBtn="Có" @click="btnDeletePopup"></BaseButton>
        </div>
    </BasePopup>

     <BasePopup  iconPopup="icon-popup-error" v-if="showPopup == 1" >
        <template v-slot:textPopup> {{ msg }}</template>
        <div class="flex justify-center">
            <BaseButton classBtn="btn btn-normal-green" textBtn="Đóng" @click="btnCancelPopup" ></BaseButton>
        </div>
    </BasePopup>

    <BasePopup  iconPopup="icon-popup-warning" v-if="showPopup == 3" >
        <template v-slot:textPopup> {{ msg }}</template>
        <div class="flex justify-end">
            <BaseButton classBtn="btn btn-normal-green" textBtn="Đồng ý" @click="btnCancelPopup" ></BaseButton>
        </div>
    </BasePopup>

    <BasePopup  iconPopup="icon-popup-info" v-if="showPopup == 4" >
        <template v-slot:textPopup> {{ msg }}</template>
        <div class="flex justify-between">
            <BaseButton classBtn="btn btn-normal-default" textBtn="Huỷ" @click="btnCancelPopup" ></BaseButton>
            <div>
                <BaseButton classBtn="btn btn-normal-default " textBtn="Không" @click="btnNoClose" ></BaseButton>
                <BaseButton classBtn="btn btn-normal-green ml-10" textBtn="Có" @click="btnYesClose" ></BaseButton>
            </div>
        </div>
    </BasePopup>
</div>
</template>
<script>
import BasePopup from '../base/BasePopup.vue'
import BaseButton from '../base/BaseButton.vue'
export default {
    name: "BaseMessage",
    props: {
        showPopup: 
        {
           type: Number, 
        },
        msg: {
            type: String
        }
    },
 
    components: {
        BasePopup,
        BaseButton
    },
    methods: {
        btnDeletePopup() {
            this.$emit('popupDelete');
           
        },
        btnCancelPopup() {
            this.$emit('cancelPopup');
        },
        btnYesClose() {
            this.$emit('saveForm');
        },
        btnNoClose(){
            this.$emit('cancelEmpDetail')
        }
    },
}
</script>
<style scoped>
.justify-between
{
    justify-content: space-between;
}
.justify-center
{
    justify-content: center;
}
.justify-end 
{
    justify-content: flex-end;
}
.ml-10 
{
    margin-left: 10px;
}
</style>